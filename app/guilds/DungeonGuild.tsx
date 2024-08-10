import { Guild } from "./data/Guild";
import { GuildMember } from "./data/GuildMember";

export default function DungeonGuild({ data }: { data: Guild }) {
    return (
        <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Guild: {data.shortCode}</h1>
            <p className="text-sm text-gray-400">Identifier: {data.guildIdentifier.identifier}</p>
            <p className="text-sm text-gray-400">Level: {data.level}</p>
            <p className="text-sm text-gray-400">Since: {new Date(data.since).toLocaleString()}</p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Owner Details:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p className="text-sm text-gray-300">UUID: {data.guildOwner.playerUUID}</p>
                    <p className="text-sm text-gray-300">Member Since: {new Date(data.guildOwner.since).toLocaleString()}</p>
                    <p className="text-sm text-gray-300">Member Level: {data.guildOwner.memberLevel}</p>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Guild Members:</h2>
                {data.guildMembers.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {data.guildMembers.map((member: GuildMember, index: number) => (
                            <li key={index} className="text-sm text-gray-300">
                                {JSON.stringify(member)} {/* Replace with appropriate member details */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-400">No members found.</p>
                )} 
            </div>
        </div>
    );
}