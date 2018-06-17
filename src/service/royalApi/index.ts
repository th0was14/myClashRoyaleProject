import { Observable } from "rx";
import { mapperToPlayerInfo } from "./mapper";
import { PlayerInfoDto } from "./typings";
import { PlayerInfo } from "../../components/page/PlayerClash.typings";

import axiosInstance from "../../axios";

// export const postComment = (body: string, postId: number) =>
//   fetch(`${baseUrl}/comments/`, {
//     method: "post",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ body, postId })
//   }).then(res => res.json());

const fetchByTypeById = <T>(type: string, id: string): Promise<T> => {
  const fetchCall = axiosInstance.get(`/${type}/${id}`);
  return fetchCall.then(response => response.data).catch(e => {
    throw e;
  });
};

export const fetchPlayerInfoObservable = (
  type: string,
  id: string
): Observable<PlayerInfo> =>
  Observable.fromPromise<PlayerInfoDto>(fetchByTypeById(type, id)).map(
    mapperToPlayerInfo
  );

export const fetchPlayerInfo = (
  type: string,
  id: string
): Promise<PlayerInfo> => fetchByTypeById(type, id).then(mapperToPlayerInfo);
