import axios from "axios";

import { apiConfig } from "../config/apiConfig";

const api = axios.create({
  baseURL: apiConfig.baseURL,
  responseType: "json",
});

export default api;
