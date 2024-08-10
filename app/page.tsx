"use client";  // Indicates that this component is intended to run on the client-side in a Next.js application

import { useRouter } from "next/navigation";  // Importing the `useRouter` hook from Next.js for programmatic navigation

export default function HomePage() {
    const router = useRouter();  // Initializing the router to enable navigation within the app

    const handleClick = () => {
        router.push("/guilds");  // Navigates the user to the "/guilds" page when the button is clicked
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="grid grid-cols-1 gap-4 p-8 bg-gray-800 rounded-md shadow-lg">
                <div className="text-white text-xl">
                    <button
                        onClick={handleClick}
                        className="bg-gray-900 text-white outline outline-1 outline-gray-50 py-2 px-4 rounded hover:bg-gray-700 transition-colors z-50">
                        Enter Guild Database
                    </button>
                </div>
            </div>
        </div>
    )
}