import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-notes-an4e.onrender.com"
});

