// Import the necessary modules and types
import DungeonAPIRequest from "../DungeonAPIRequest";
import {Guild} from "./data/Guild";
import DungeonGuild from "./DungeonGuild";
import GuildButton from "@/app/guilds/GuildButton";

async function getGuilds(): Promise<Array<Guild>> {
    const res = await DungeonAPIRequest("/guilds", "get");
    return await res.json();
}

export default async function GuildsPage() {
    let guilds: Array<Guild> = await getGuilds();

    return (
        <div className={"p-8"}>
            <h1 className="text-3xl font-bold mb-8 text-center">Guilds Overview</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {guilds.map((guild: Guild) => (
                    <div key={guild.guildIdentifier.identifier} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h2 className="text-xl font-semibold mb-4 text-center">{guild.shortCode}</h2>
                        <DungeonGuild data={guild} />
                        <div className={"pt-4"}>
                            <GuildButton id={guild.guildIdentifier.identifier} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}