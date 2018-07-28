import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-972d3.firebaseio.com/'
});

export default instance;

