import axios from "axios";

const apiV2 = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v2",
});

export default apiV2;
