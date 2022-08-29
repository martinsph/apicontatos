import axios from "axios";

// Cria conexão com o backend na porta 3001.
const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export default api;
