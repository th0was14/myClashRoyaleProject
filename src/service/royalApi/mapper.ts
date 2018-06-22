import { PlayerInfoDto, PlayerChestDto } from "./typings";
import { PlayerInfo, PlayerChest } from "../../components/PlayerClash.typings";

export const mapperToPlayerInfo = (dto: PlayerInfoDto): PlayerInfo => {
  return {
    id: dto.tag,
    name: dto.name,
    trophies: dto.trophies,
    clanName: dto.clan.name
  };
};

export const mapperToPlayerChest = (dto: PlayerChestDto): PlayerChest => {
  return {
    chests: dto.upcoming
  };
};
