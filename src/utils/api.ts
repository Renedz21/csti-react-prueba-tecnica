import axios from 'axios';

const BASE_URL = 'https://randomuser.me/'

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=5000',
    }
});