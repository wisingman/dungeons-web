import './globals.css';
import BackButton from './components/BackButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white font-sans p-0 m-0">
                <header>
                    <BackButton />
                </header>
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}