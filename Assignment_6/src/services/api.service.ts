import Axios from "axios";

const API = Axios.create({
    baseURL: 'http://assignment.cyberboxer.com/',
    timeout: 1000,
    headers: {
      
    }
});
export default API;