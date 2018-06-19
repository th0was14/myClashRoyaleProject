import { PlayerInfoDto } from "./typings";
import { PlayerInfo } from "../../components/PlayerClash.typings";

export const mapperToPlayerInfo = (dto: PlayerInfoDto): PlayerInfo => {
  return {
    id: dto.tag,
    name: dto.name,
    trophies: dto.trophies,
    clanName: dto.clan.name
  };
};
