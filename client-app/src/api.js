import axios from 'axios';
const base = process.env.REACT_APP_API_BASE_URL || '/api';
const api = axios.create({ baseURL: base });
export default api;
