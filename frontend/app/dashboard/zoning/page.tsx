'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Loader2, AlertCircle, CheckCircle, Bot, Search } from 'lucide-react';
import { API_BASE_URL } from '../../../config';

// Import Map dynamically
const ZoningMap = dynamic(() => import('../../../components/Map'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-white/5 animate-pulse rounded-2xl flex items-center justify-center">Loading Map...</div>
});

export default function ZoningPage() {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number, lng: number } | null>(null);
    const [mapTarget, setMapTarget] = useState<{ lat: number, lng: number } | null>(null); // For programmatic moves
    const [zoningData, setZoningData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Search State
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setIsSearching(true);
        setError(null);

        try {
            // Forward Geocoding
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery + ", Austin, TX")}&format=json&limit=1`);
            const data = await res.json();

            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lng = parseFloat(data[0].lon);

                // 1. Move Map
                setMapTarget({ lat, lng });

                // 2. Trigger Selection with this specific address title if possible
                // We'll let handleLocationSelect do the heavy lifting of checking zoning
                // But we update the location state immediately
                setSelectedLocation({ lat, lng });

                await handleLocationSelect(lat, lng);
            } else {
                setError('Address not found in Austin area.');
            }
        } catch (err) {
            console.error('Search failed', err);
            setError('Search failed. Please try again.');
        } finally {
            setIsSearching(false);
        }
    };

    const handleLocationSelect = async (lat: number, lng: number) => {
        console.log('📍 Location Select Started:', lat, lng);
        setSelectedLocation({ lat, lng });
        setLoading(true);
        setError(null);
        setZoningData(null);

        try {
            // 1. Fetch Address (Reverse Geocoding)
            let address = `Site at ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            try {
                const geoRes = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
                const geoData = await geoRes.json();
                if (geoData && geoData.display_name) {
                    const parts = geoData.display_name.split(', ');
                    address = parts.slice(0, 3).join(', ');
                }
            } catch (geoError) {
                console.warn('Geocoding failed, using coords', geoError);
            }

            console.log('📡 Fetching Zoning Data from:', `${API_BASE_URL}/api/zoning/check`);

            // 2. Call backend API for Zoning with Timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

            try {
                const response = await fetch(`${API_BASE_URL}/api/zoning/check?lat=${lat}&long=${lng}`, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                console.log('📥 Zoning Response Status:', response.status);

                if (!response.ok) {
                    throw new Error(`Server Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                console.log('📦 Zoning Data:', data);

                if (data.error) {
                    setError(data.error);
                } else {
                    // Smart Suitability Scoring Logic
                    let calculatedScore = 75; // Base score
                    let scoreBasis = "Standard base score.";

                    const z = (data.zoning_code || '').toUpperCase();

                    if (z.includes('CBD') || z.includes('DMU') || z.includes('CS') || z.includes('GR')) {
                        calculatedScore = Math.floor(Math.random() * (99 - 90) + 90);
                        scoreBasis = "High commercial viability in this district.";
                    } else if (z.includes('MU') || z.includes('LO') || z.includes('GO')) {
                        calculatedScore = Math.floor(Math.random() * (89 - 80) + 80);
                        scoreBasis = "Good potential for mixed-use development.";
                    } else if (z.includes('SF') || z.includes('RR')) {
                        calculatedScore = Math.floor(Math.random() * (65 - 40) + 40);
                        scoreBasis = "Restricted: Primarily residential zoning.";
                    } else if (z.includes('LI') || z.includes('IP')) {
                        calculatedScore = Math.floor(Math.random() * (85 - 70) + 70);
                        scoreBasis = "Suitable for industrial or specific commercial uses.";
                    }

                    // Store both in local state and backend
                    const projectData = {
                        address: address,
                        zone: data.zoning_code,
                        details: `Zoning: ${data.description}. Status: Checked.\n\nSuitability Basis: ${scoreBasis}`,
                        score: calculatedScore
                    };

                    setZoningData({ ...data, address, score: calculatedScore, scoreBasis });

                    // 3. Save to Backend (Postgres)
                    fetch(`${API_BASE_URL}/api/projects`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(projectData)
                    }).catch(e => console.error('Save failed', e));
                }
            } catch (fetchErr: any) {
                console.error('❌ Zoning Fetch Error:', fetchErr);
                if (fetchErr.name === 'AbortError') {
                    setError('Request timed out. Server is taking too long.');
                } else {
                    setError(`Connection Error: ${fetchErr.message}`);
                }
            }
        } catch (err: any) {
            console.error('❌ General Error:', err);
            setError('An unexpected error occurred.');
        } finally {
            console.log('🏁 Loading Finished');
            setLoading(false);
        }
    };

    return (
        <div className="h-full overflow-y-auto p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Zoning Check</h1>
                    <p className="text-gray-400">Click anywhere on the map or search an address to verify regulations.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ZoningMap
                            onLocationSelect={handleLocationSelect}
                            targetLocation={mapTarget}
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Search Bar Moved Here */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <form onSubmit={handleSearch} className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search address..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-12 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <button
                                    type="submit"
                                    disabled={isSearching}
                                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white p-1.5 rounded-lg transition-colors disabled:opacity-50"
                                >
                                    {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <div className="text-[10px] font-bold px-1">GO</div>}
                                </button>
                            </form>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit flex-1">
                            <h2 className="text-xl font-semibold mb-4">Location Details</h2>

                            {!selectedLocation ? (
                                <div className="text-gray-500 text-center py-12 text-sm">
                                    Select a location on the map to see details.
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex justify-between text-xs text-gray-400 border-b border-white/10 pb-4">
                                        <span>Lat: {selectedLocation.lat.toFixed(4)}</span>
                                        <span>Lng: {selectedLocation.lng.toFixed(4)}</span>
                                    </div>

                                    {loading ? (
                                        <div className="flex items-center justify-center py-8 text-blue-400">
                                            <Loader2 className="w-8 h-8 animate-spin" />
                                        </div>
                                    ) : error ? (
                                        <div className="flex items-start gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl text-sm">
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            <p>{error}</p>
                                        </div>
                                    ) : zoningData ? (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                            <div className="flex items-center gap-2 text-green-400 mb-2">
                                                <CheckCircle className="w-5 h-5" />
                                                <span className="font-bold">Zoning Found</span>
                                            </div>

                                            <div className="bg-black/30 p-4 rounded-xl space-y-2">
                                                <div>
                                                    <span className="text-gray-500 text-xs uppercase tracking-wider">Zoning Code</span>
                                                    <div className="text-2xl font-bold">{zoningData.zoning_code || 'N/A'}</div>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 text-xs uppercase tracking-wider">Description</span>
                                                    <div className="text-gray-300 text-sm">{zoningData.description || 'No description available'}</div>
                                                </div>
                                            </div>

                                            <div className="text-sm text-gray-400">
                                                <p>This location is subject to the regulations of the <strong>{zoningData.zoning_code}</strong> district.</p>
                                            </div>

                                            <div className="pt-4 border-t border-white/10">
                                                <a
                                                    href={`/dashboard/chat?context=zoning&code=${encodeURIComponent(zoningData.zoning_code)}&lat=${selectedLocation.lat}&long=${selectedLocation.lng}&address=${encodeURIComponent(zoningData.address || `Site at ${selectedLocation.lat}, ${selectedLocation.lng}`)}`}
                                                    className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition-colors font-medium text-sm"
                                                >
                                                    <Bot className="w-5 h-5" />
                                                    Ask Lex about this Zone
                                                </a>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-gray-500 text-sm">No zoning data found for this location.</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
