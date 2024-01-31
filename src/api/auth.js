import axios from "axios";

const API = "http://localhost:3400/api";

export const registerRequest = (user) => axios.post(`${API}/registro`, user);

