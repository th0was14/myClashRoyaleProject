import axios from "axios";
import { API_KEY } from "./constant";

const myToken: string = API_KEY;

const instance = axios.create({
  baseURL: "https://api.royaleapi.com",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + myToken,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  }
});

export default instance;
