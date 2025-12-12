'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Mic, Loader2, Check, VolumeX, MessageSquare, Plus, Trash2, History, Menu, X, Play, Square } from 'lucide-react';
import { API_BASE_URL } from '../../../config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSearchParams } from 'next/navigation';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    steps?: string[];
}

interface ChatSession {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: number;
    messages: Message[];
}

function ChatInterface() {
    // Session Management
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am Lex, your Civic Compliance Navigator. How can I help you with Austin zoning or permits today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Voice
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const silenceTimer = useRef<NodeJS.Timeout | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playingMessageIndex, setPlayingMessageIndex] = useState<number | null>(null); // Track which message is playing for button state

    const searchParams = useSearchParams();

    // 1. Load Sessions from LocalStorage & Deduplicate
    useEffect(() => {
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;
        if (!user || !user.id) return;

        const storageKey = `lex_chat_sessions_${user.id}`;
        const storedSessions = localStorage.getItem(storageKey);

        if (storedSessions) {
            try {
                const parsed = JSON.parse(storedSessions);

                // Deduplicate by Title and Last Message to clean up mess
                const uniqueSessions = parsed.reduce((acc: ChatSession[], current: ChatSession) => {
                    const x = acc.find(item => item.title === current.title);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);

                setSessions(uniqueSessions);
            } catch (e) {
                console.error("Failed to load chats", e);
            }
        }
    }, []);

    const processedParams = useRef<string | null>(null);

    // 2. Handle Context & Session Params
    useEffect(() => {
        if (!sessions.length && !searchParams.toString()) return; // Wait for sessions to load

        const sessionId = searchParams.get('session');
        const context = searchParams.get('context');

        // A. Load specific session ID
        if (sessionId) {
            const targetSession = sessions.find(s => s.id === sessionId);
            if (targetSession) {
                if (currentSessionId !== sessionId) {
                    setCurrentSessionId(sessionId);
                    setMessages(targetSession.messages);
                }
                return;
            }
        }

        // B. Handle Context (Zoning, Fee, Site)
        if (context) {
            const currentParamsStr = searchParams.toString();
            if (processedParams.current === currentParamsStr) return;

            // Check if we ALREADY have a session for this address/context to resume it
            // This prevents creating "Site at ..." duplicates
            const address = searchParams.get('address');
            const code = searchParams.get('code');

            if (address) {
                const existingSession = sessions.find(s => s.title.includes(address) || (s.messages[0]?.content.includes(address)));
                if (existingSession) {
                    setCurrentSessionId(existingSession.id);
                    setMessages(existingSession.messages);
                    processedParams.current = currentParamsStr;
                    return;
                }
            }

            // If no existing session found, ensure we create a NEW one correctly
            const contextId = `ctx-${Date.now()}`;
            let initialMsg = '';

            if (context === 'zoning') {
                const lat = searchParams.get('lat');
                const lng = searchParams.get('long');

                let locationContext = '';
                if (address) locationContext = ` at **${decodeURIComponent(address)}**`;
                else if (lat && lng) locationContext = ` at coordinates **${lat}, ${lng}**`;

                // STRONG SYSTEM INSTRUCTION IN USER PROMPT STYLE
                initialMsg = `I see you're asking about zoning district **${code}**${locationContext}. How can I help you understand its regulations?`;
            } else if (context === 'fee') {
                const amount = searchParams.get('amount');
                const trade = searchParams.get('trade');
                initialMsg = `I see you calculated a **${trade}** permit fee of **$${amount}**. Do you have questions about the breakdown or payment process?`;
            } else if (context === 'site') {
                const zone = searchParams.get('zone');
                initialMsg = `Let's discuss the site at **${address}** (Zone: ${zone}). What would you like to know?`;
            }

            if (initialMsg) {
                const newSession: ChatSession = {
                    id: contextId,
                    title: address ? address : `New ${context} Inquiry`,
                    lastMessage: initialMsg,
                    timestamp: Date.now(),
                    messages: [{ role: 'assistant', content: initialMsg }]
                };
                setSessions(prev => [newSession, ...prev]);
                setCurrentSessionId(contextId);
                setMessages(newSession.messages);
                processedParams.current = currentParamsStr;
            }
        }
    }, [searchParams, sessions]); // Depend on sessions to allow "resume" check

    // 3. Save Sessions to LocalStorage
    useEffect(() => {
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;

        if (user && user.id && sessions.length > 0) {
            const storageKey = `lex_chat_sessions_${user.id}`;
            localStorage.setItem(storageKey, JSON.stringify(sessions));
        }
    }, [sessions]);

    // Auto-Scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    const createNewSession = () => {
        const newId = `chat-${Date.now()}`;
        const newSession: ChatSession = {
            id: newId,
            title: 'New Conversation',
            lastMessage: 'Started new chat',
            timestamp: Date.now(),
            messages: [{ role: 'assistant', content: 'Hello! How can I help you?' }]
        };
        setSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newId);
        setMessages(newSession.messages);
    };

    const loadSession = (id: string) => {
        const session = sessions.find(s => s.id === id);
        if (session) {
            setCurrentSessionId(id);
            setMessages(session.messages);
            // Optional: Close sidebar on mobile or keep open?
        }
    };

    const deleteSession = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setSessions(prev => prev.filter(s => s.id !== id));
        if (currentSessionId === id) {
            setCurrentSessionId(null);
            setMessages([{ role: 'assistant', content: 'Chat deleted. Start a new one?' }]);
        }
    };

    const updateCurrentSession = (newMessages: Message[], explicitId?: string) => {
        const targetId = explicitId || currentSessionId;

        if (!targetId) return; // Should not happen with new logic

        setSessions(prev => {
            const existingSession = prev.find(s => s.id === targetId);

            if (existingSession) {
                return prev.map(s => {
                    if (s.id === targetId) {
                        return {
                            ...s,
                            messages: newMessages,
                            lastMessage: newMessages[newMessages.length - 1].content,
                            title: s.title === 'New Conversation'
                                ? (newMessages.find(m => m.role === 'user')?.content.split(' ').slice(0, 5).join(' ') + '...') || s.title
                                : s.title
                        };
                    }
                    return s;
                });
            } else {
                // New Session Logic
                const firstUserMsg = newMessages.find(m => m.role === 'user')?.content || 'New Chat';
                const title = firstUserMsg.split(' ').slice(0, 5).join(' ') + '...';

                const newSession: ChatSession = {
                    id: targetId,
                    title: title,
                    lastMessage: newMessages[newMessages.length - 1].content,
                    timestamp: Date.now(),
                    messages: newMessages
                };
                return [newSession, ...prev];
            }
        });

        if (targetId !== currentSessionId) {
            setCurrentSessionId(targetId);
        }
    };

    // --- Voice Implementation Matches Previous ---
    const startListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Voice input is not supported in this browser. Try Chrome.');
            return;
        }
        const SpeechRecognition = (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
            let fullTranscript = '';
            for (let i = 0; i < event.results.length; ++i) fullTranscript += event.results[i][0].transcript;
            setInput(fullTranscript);
            if (silenceTimer.current) clearTimeout(silenceTimer.current);
            silenceTimer.current = setTimeout(() => {
                recognition.stop();
                if (fullTranscript.trim()) {
                    handleVoiceMessage(fullTranscript);
                    setInput('');
                }
            }, 2000);
        };
        recognition.start();
        recognitionRef.current = recognition;
    };
    const stopListening = () => recognitionRef.current?.stop();
    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    // --- TTS Logic ---
    const toggleAudio = async (text: string, index: number) => {
        // Stop if playing this one
        if (playingMessageIndex === index && isPlaying) {
            stopAudio();
            setPlayingMessageIndex(null);
            return;
        }

        // Stop any other
        stopAudio();
        setPlayingMessageIndex(index);
        setIsPlaying(true); // Optimistic UI

        try {
            const ttsResponse = await fetch(`${API_BASE_URL}/api/voice/speak`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            if (ttsResponse.ok) {
                const blob = await ttsResponse.blob();
                if (audioRef.current) {
                    audioRef.current.src = URL.createObjectURL(blob);
                    audioRef.current.play().catch(e => {
                        console.error("Play error", e);
                        setIsPlaying(false);
                        setPlayingMessageIndex(null);
                    });
                }
            } else {
                console.error("TTS Failed");
                setIsPlaying(false);
                setPlayingMessageIndex(null);
            }
        } catch (e) {
            console.error("Network Error", e);
            setIsPlaying(false);
            setPlayingMessageIndex(null);
        }
    };

    const handleVoiceMessage = async (text: string) => {
        const updatedMsgs = [...messages, { role: 'user', content: text } as Message];
        setMessages(updatedMsgs);
        updateCurrentSession(updatedMsgs);
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/lex/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ messages: updatedMsgs.map(m => ({ role: m.role, content: m.content })) })
            });
            const data = await response.json();
            if (data.success) {
                const finalMsgs = [...updatedMsgs, { role: 'assistant', content: data.response, steps: data.steps } as Message];
                setMessages(finalMsgs);
                updateCurrentSession(finalMsgs);

                // TTS
                const ttsResponse = await fetch(`${API_BASE_URL}/api/voice/speak`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: data.response })
                });
                if (ttsResponse.ok) {
                    const blob = await ttsResponse.blob();
                    if (audioRef.current) {
                        audioRef.current.src = URL.createObjectURL(blob);
                        audioRef.current.play().catch(e => console.error(e));
                    }
                }
            }
        } catch (error) {
            console.error('Voice error:', error);
        } finally {
            setLoading(false);
        }
    };

    // --- Message Processing Helper ---
    const handleSuggestionClick = async (text: string) => {
        if (loading) return;

        const updatedMsgs = [...messages, { role: 'user', content: text } as Message];
        setMessages(updatedMsgs);

        let activeSessionId = currentSessionId;
        if (!activeSessionId) {
            activeSessionId = `chat-${Date.now()}`;
            setCurrentSessionId(activeSessionId);
        }
        updateCurrentSession(updatedMsgs, activeSessionId);

        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/lex/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    messages: updatedMsgs.map(m => ({ role: m.role, content: m.content }))
                })
            });
            const data = await response.json();
            if (data.success) {
                const finalMsgs = [...updatedMsgs, { role: 'assistant', content: data.response, steps: data.steps } as Message];
                setMessages(finalMsgs);
                updateCurrentSession(finalMsgs, activeSessionId);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + data.error }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Network error.' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;
        const userMessage = input.trim();
        setInput('');

        const updatedMsgs = [...messages, { role: 'user', content: userMessage } as Message];
        setMessages(updatedMsgs);

        let activeSessionId = currentSessionId;
        if (!activeSessionId) {
            activeSessionId = `chat-${Date.now()}`;
            setCurrentSessionId(activeSessionId);
        }
        updateCurrentSession(updatedMsgs, activeSessionId);

        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/lex/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    messages: updatedMsgs.map(m => ({ role: m.role, content: m.content }))
                })
            });
            const data = await response.json();
            if (data.success) {
                const finalMsgs = [...updatedMsgs, { role: 'assistant', content: data.response, steps: data.steps } as Message];
                setMessages(finalMsgs);
                updateCurrentSession(finalMsgs, activeSessionId);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + data.error }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Network error.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-full bg-[#0a0a0a] relative overflow-hidden">
            <audio
                ref={audioRef}
                className="hidden"
                onPlay={() => setIsPlaying(true)}
                onEnded={() => { setIsPlaying(false); setPlayingMessageIndex(null); }}
                onPause={() => setIsPlaying(false)}
            />

            {/* Sidebar Toggle - Floating on top (z-50) */}
            <div className="absolute top-4 right-10 z-50">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`p-2 backdrop-blur border rounded-lg transition-colors ${sidebarOpen ? 'bg-blue-600 text-white border-blue-500' : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'}`}
                    title="Toggle Chat History"
                >
                    {sidebarOpen ? <X className="w-5 h-5" /> : <History className="w-5 h-5" />}
                </button>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 relative flex flex-col h-full overflow-hidden transition-all duration-300">
                {/* Header removed (moved to floating) */}

                <div className="flex-1 overflow-y-auto p-4 pb-32">
                    <div className="flex flex-col justify-end min-h-full space-y-6 max-w-4xl mx-auto">
                        <AnimatePresence initial={false}>
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-start gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'assistant' ? 'bg-blue-600' : 'bg-gray-600'
                                        }`}>
                                        {message.role === 'assistant' ? <Bot className="w-6 h-6" /> : <User className="w-6 h-6" />}
                                    </div>

                                    <div className={`relative p-4 pr-12 rounded-2xl max-w-[85%] ${message.role === 'assistant'
                                        ? 'bg-white/10 text-white rounded-tl-none'
                                        : 'bg-blue-600 text-white rounded-tr-none'
                                        }`}>
                                        {/* Play Button (Top Right of Bubble) */}
                                        {message.role === 'assistant' && (
                                            <button
                                                onClick={() => toggleAudio(message.content, index)}
                                                className="absolute top-3 right-3 p-1.5 bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white rounded-lg transition-colors"
                                                title="Read Aloud"
                                            >
                                                {playingMessageIndex === index && isPlaying ? (
                                                    <Square className="w-3.5 h-3.5 fill-current" />
                                                ) : (
                                                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                                )}
                                            </button>
                                        )}
                                        {message.steps && message.steps.length > 0 && (
                                            <details className="mb-3 group">
                                                <summary className="list-none cursor-pointer flex items-center gap-2 text-xs text-blue-300/70 hover:text-blue-300 transition-colors select-none">
                                                    <div className="flex items-center gap-1 bg-blue-900/30 px-2 py-1 rounded-full border border-blue-500/20">
                                                        <Check className="w-3 h-3" />
                                                        <span>{message.steps.length} Actions Verified</span>
                                                    </div>
                                                </summary>
                                                <div className="mt-2 space-y-1 pl-2 border-l-2 border-blue-500/20 ml-2">
                                                    {message.steps.map((step, i) => (
                                                        <div key={i} className="text-xs text-blue-300/60">{step}</div>
                                                    ))}
                                                </div>
                                            </details>
                                        )}
                                        <div className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    a: ({ node, ...props }) => <a {...props} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer" />,
                                                    p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                                                    ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-4 mb-2" />,
                                                    li: ({ node, ...props }) => <li {...props} className="mb-1" />,
                                                    strong: ({ node, ...props }) => <strong {...props} className="font-bold text-white shadow-blue-500/20" />,
                                                }}
                                            >
                                                {message.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {loading && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"><Bot className="w-6 h-6" /></div>
                                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none"><Loader2 className="w-5 h-5 animate-spin" /></div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pt-10">

                    {/* Suggested Questions (Only show when empty) */}
                    {messages.length === 1 && !loading && (
                        <div className="max-w-4xl mx-auto mb-4 grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
                            <button onClick={() => handleSuggestionClick("Check zoning for 500 E 6th St")} className="text-sm bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-600/20 hover:border-blue-600/40 p-3 rounded-xl transition-all text-left">
                                Check zoning for 500 E 6th St
                            </button>
                            <button onClick={() => handleSuggestionClick("Calculate permit fees for a $150,000 kitchen remodel")} className="text-sm bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-600/20 hover:border-blue-600/40 p-3 rounded-xl transition-all text-left">
                                Calculate fees for $150k remodel
                            </button>
                            <button onClick={() => handleSuggestionClick("How do I apply for a commercial building permit?")} className="text-sm bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 border border-blue-600/20 hover:border-blue-600/40 p-3 rounded-xl transition-all text-left">
                                How do I apply for a permit?
                            </button>
                        </div>
                    )}

                    <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <form onSubmit={handleSubmit} className="flex items-center gap-4 p-2">
                            <button
                                type="button"
                                onClick={isListening ? stopListening : startListening}
                                className={`p-3 rounded-full transition-all duration-200 ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                            >
                                <Mic className="w-5 h-5" />
                            </button>
                            {isPlaying && (
                                <button type="button" onClick={stopAudio} className="p-3 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30">
                                    <VolumeX className="w-5 h-5" />
                                </button>
                            )}

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about zoning, fees, or codes..."
                                className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-lg placeholder-gray-500 text-white"
                            />

                            <button
                                type="submit"
                                disabled={!input.trim() || loading}
                                className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - History */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 300, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="border-l border-white/10 flex flex-col bg-black/40 backdrop-blur-md h-full absolute right-0 top-0 z-30 shadow-2xl"
                    >
                        <div className="p-4 pt-16 border-b border-white/5">
                            <button
                                onClick={createNewSession}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-all font-medium shadow-lg shadow-blue-900/20"
                            >
                                <Plus className="w-5 h-5" /> New Chat
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
                            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">History</h3>
                            {sessions.length === 0 ? (
                                <p className="text-gray-600 text-sm px-3 italic">No history yet.</p>
                            ) : sessions.map(session => (
                                <div
                                    key={session.id}
                                    onClick={() => loadSession(session.id)}
                                    className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${currentSessionId === session.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <MessageSquare className="w-4 h-4 flex-shrink-0" />
                                        <div className="truncate text-sm font-medium">
                                            {session.title}
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => deleteSession(e, session.id)}
                                        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-all"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ChatPage() {
    return (
        <Suspense fallback={
            <div className="flex h-full items-center justify-center bg-[#0a0a0a]">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    <p className="text-gray-400 text-sm">Loading Chat...</p>
                </div>
            </div>
        }>
            <ChatInterface />
        </Suspense>
    );
}
