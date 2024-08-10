"use client";

import {useRouter} from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/guilds");
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