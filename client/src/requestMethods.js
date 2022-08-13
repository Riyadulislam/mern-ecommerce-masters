import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFjYjljNmEwZjA1YmY3ODFlZjZjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDMyMTU3MywiZXhwIjoxNjU0NTgwNzczfQ.lakU6ZZPsUXW5D2w97xyCLaalC1AiGLPI7qf1ycZ5Ys"



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});