import { PlayerInfoDto, PlayerChestDto } from "./typings";
import { PlayerInfo, PlayerChest } from "../../components/PlayerClash.typings";
import { get } from "lodash";

export const mapperToPlayerInfo = (dto: PlayerInfoDto): PlayerInfo => {
  return {
    id: dto.tag,
    name: dto.name,
    trophies: dto.trophies,
    clanName: get(dto.clan, "name"),
    currentDeck: dto.currentDeck.map(({ icon, level }, index) => ({
      icon,
      level,
      id: index + 1
    }))
  };
};

export const mapperToPlayerChest = (dto: PlayerChestDto): PlayerChest => {
  return {
    chests: dto.upcoming.map(chestName => ({
      name: chestName,
      src: getChestSrc(chestName)
    }))
  };
};

const getChestSrc = (chestName: string) =>
  `https://royaleapi.github.io/cr-api-assets/chests/chest-${chestName}.png`;
