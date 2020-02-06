import { mapperToPlayerInfo, mapperToPlayerChest } from "./mapper";
import { PlayerInfoDto } from "./typings";
import { PlayerInfo, PlayerChest } from "../../components/PlayerClash.typings";

import instance from "../../axios";

import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

// export const postComment = (body: string, postId: number) =>
//   fetch(`${baseUrl}/comments/`, {
//     method: "post",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ body, postId })
//   }).then(res => res.json());

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

// export const fetchPlayerInfoObservable = (
//   type: string,
//   id: string
// ): Observable<PlayerInfo> =>
//   from<PlayerInfoDto>(fetchByTypeById(type, id)).pipe(map(mapperToPlayerInfo));

export const fetchPlayerInfo = (
  type: string,
  id: string
): Promise<PlayerInfo> => fetchByTypeById(type, id).then(mapperToPlayerInfo);

export const fetchPlayerChest = (
  type: string,
  id: string
): Promise<PlayerChest> =>
  fetch(`${type}/${id}/chests`).then(mapperToPlayerChest);
