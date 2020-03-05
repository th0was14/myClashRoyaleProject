import { PlayerChestDto, PlayerInfoDto } from "./typings";
import { PlayerChest, PlayerInfo } from "components/PlayerClash/PlayerClash.typings";
import { get, map } from "lodash";

export const mapperToPlayerInfo = (dto: PlayerInfoDto): PlayerInfo => {
  return {
    id: dto.tag,
    name: dto.name,
    trophies: dto.trophies,
    clanName: get(dto.clan, "name"),
    currentDeck: map(dto.currentDeck, ({ iconUrls, level, maxLevel }, index) => ({
      icon: iconUrls.medium,
      level: level - maxLevel + 13,
      id: index + 1
    }))
  };
};

export const mapperToPlayerChest = (dto: PlayerChestDto): PlayerChest => {
  return {
    upcomingChests: map(dto.items, (chest) => ({
      name: chest.name,
      src: getChestSrc(chest.name),
      position: chest.index + 1,
    })),
  };
};

const getChestSrc = (chestName: string): string => {
  const url = "https://royaleapi.github.io/cr-api-assets/chests/";
  switch (chestName) {
    case "Silver Chest": return `${url}chest-silver.png`;
    case "Golden Chest": return `${url}chest-gold.png`;
    case "Magical Chest": return `${url}chest-magical.png`;
    case "Giant Chest": return `${url}chest-giant.png`;
    case "Mega Lightning Chest": return `${url}chest-megalightning.png`;
    case "Legendary Chest": return `${url}chest-legendary.png`;
    case "Epic Chest": return `${url}chest-epic.png`;
    default: return "";
  }
};