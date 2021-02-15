import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:8001'
    baseURL: 'https://my-whatsapp-clone-backend.herokuapp.com'
});

export default instance;