import { Observable } from "rx";
import axios from "axios";
import { mapperToPlayerInfo } from "./mapper";
import { PlayerInfoDto } from "./typings";
import { PlayerInfo } from "../../components/page/PlayerClash.typings";

const baseUrl: string = "https://api.royaleapi.com";
const myToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcxLCJpZGVuIjoiMjMzMzI2MTUxOTAzMjE1NjE2IiwibWQiOnt9LCJ0cyI6MTUyNzkzNjQ1NzE5NX0.uSCGosQIvVeEM9iIUjR6y4xZe6GvSYu_uip1B1vJ-Qk";

export const postComment = (body: string, postId: number) =>
  fetch(`${baseUrl}/comments/`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body, postId })
  }).then(res => res.json());

const fetchByTypeById = <T>(type: string, id: string): Promise<T> => {
  const fetchCall = axios.get(`${baseUrl}/${type}/${id}`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + myToken,
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });
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
