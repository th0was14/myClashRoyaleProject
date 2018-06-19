import axios from "axios";

const myToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcxLCJpZGVuIjoiMjMzMzI2MTUxOTAzMjE1NjE2IiwibWQiOnt9LCJ0cyI6MTUyNzkzNjQ1NzE5NX0.uSCGosQIvVeEM9iIUjR6y4xZe6GvSYu_uip1B1vJ-Qk";

const instance = axios.create({
  baseURL: "https://api.royaleapi.com",
  // timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + myToken,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  }
});

export default instance;
