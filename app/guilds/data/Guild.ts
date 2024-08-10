import { GuildIdentifier } from "./GuildIdentifier"
import { GuildMember } from "./GuildMember"

export type Guild = {
    guildIdentifier: GuildIdentifier,
    since: number,
    guildOwner: GuildMember,
    shortCode: string,
    level: number,
    guildMembers: Array<GuildMember>
}