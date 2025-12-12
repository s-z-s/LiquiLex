import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "LiquiLex",
    description: "Civic Compliance, Decoded by AI.",
    icons: {
        icon: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
