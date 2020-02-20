// @ts-ignore
import axios, { AxiosInstance } from "axios";
import { API_KEY } from "api/constant";

const myToken: string = API_KEY;

const instance: AxiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    authorization: "Bearer " + myToken,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  }
});

export default instance;
