import './globals.css';  // Importing global CSS styles for the entire application
import BackButton from './components/BackButton';  // Importing a custom `BackButton` component

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">  {/* Setting the language attribute for the HTML document to English */}
        <body className="bg-gray-900 text-white font-sans p-0 m-0">  {/* Applying styles to the body: dark background, white text, sans-serif font, no padding/margin */}
        <header>
            <BackButton />  {/* Rendering the `BackButton` component in the header */}
        </header>
        <main className="min-h-screen">
            {children}  {/* Rendering any child components or elements passed to the RootLayout */}
        </main>
        </body>
        </html>
    );
}