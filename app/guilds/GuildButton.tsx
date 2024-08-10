"use client";

import {useRouter} from "next/navigation";

export default function GuildButton({ id }: { id: string }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/guilds/${id}`)
    };

    return (
        <button
            onClick={handleClick}
            className="bg-gray-900 text-white outline outline-1 outline-gray-50 py-2 px-4 rounded hover:bg-gray-700 transition-colors z-50">
            View guild
        </button>
    )
}