import { Guild } from "@/app/guilds/data/Guild";
import DungeonAPIRequest from "@/app/DungeonAPIRequest";
import { redirect } from "next/navigation";

async function getGuilds(): Promise<Array<Guild>> {
    const res = await DungeonAPIRequest("/guilds", "get");
    return await res.json();
}

export default async function GuildPage({ params }: any) {
    let guilds: Array<Guild> = await getGuilds();

    // Filter guilds to find the one matching the provided ID
    let filteredGuilds = guilds.filter((guild) => guild.guildIdentifier.identifier === params.id);

    if (filteredGuilds.length == 0) {
        return redirect("/guilds");
    }

    let guild: Guild = filteredGuilds[0];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="grid grid-cols-1 gap-4 p-8 bg-gray-800 rounded-md shadow-lg text-white max-w-lg">
                {/* Guild Identifier */}
                <div className="text-2xl font-bold mb-4">
                    Guild ID: {guild.guildIdentifier.identifier}
                </div>

                {/* Short Code */}
                <div className="text-xl mb-2">
                    Short Code: {guild.shortCode || "N/A"}
                </div>

                {/* Guild Level */}
                <div className="text-xl mb-2">
                    Level: {guild.level.toFixed(1)}
                </div>

                {/* Guild Owner */}
                <div className="text-lg mb-2">
                    <strong>Owner:</strong> {guild.guildOwner.playerUUID}
                </div>

                {/* Guild Creation Date */}
                <div className="text-lg mb-2">
                    <strong>Created On:</strong> {new Date(guild.since).toLocaleString()}
                </div>
            </div>
        </div>
    )
}