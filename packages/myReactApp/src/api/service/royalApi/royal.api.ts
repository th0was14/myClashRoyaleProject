import { mapperToPlayerInfo, mapperToPlayerChest } from "./mapper";
import { PlayerInfo, PlayerChest } from "components/PlayerClash/PlayerClash.typings";
import instance from "api/axiosInstance";

const baseUrl = "/api";

const fetchByTypeById = <T>(type: string, id: string): Promise<T> => {
  const fetchCall = instance.get(`${baseUrl}/${type}/${id}`);
  return fetchCall
    .then(response => response.data)
    .catch(e => {
      throw e;
    });
};

const fetch = <T>(url: string): Promise<T> => {
  const fetchCall = instance.get(`${baseUrl}/${url}`);
  return fetchCall
    .then(response => response.data)
    .catch(e => {
      throw e;
    });
};

export const fetchPlayerInfo = (type: string, id: string): Promise<PlayerInfo> =>
  fetchByTypeById(type, id).then(mapperToPlayerInfo);

export const fetchPlayerChest = (type: string, id: string): Promise<PlayerChest> =>
  fetch(`${type}/${id}/upcomingchests`).then(mapperToPlayerChest);
