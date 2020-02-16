import { PlayerInfoDto, PlayerChestDto } from "./typings";
import { PlayerInfo, PlayerChest } from "../../components/PlayerClash.typings";
import { get, omit, keys, map, toLower, orderBy } from "lodash";

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
    upcomingChests: dto.upcoming.map((chestName, index) => ({
      name: chestName,
      src: getChestSrc(chestName),
      position: index + 1,
    })),
    rareChests: orderBy(map(keys(omit(dto, "upcoming")), key => ({name: key, src: getChestSrc(toLower(key)), position: dto[key]})), ({position}) => position)
  };
};

const getChestSrc = (chestName: string) =>
  `https://royaleapi.github.io/cr-api-assets/chests/chest-${chestName === "golden" ? "gold": chestName}.png`;
