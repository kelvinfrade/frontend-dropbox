import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-clone-dropbox.herokuapp.com',
});

export default api;