// import axios from "axios";
import axios from './axios.customize';


//auth
const postLogin = (email, password) => {
    const URL_BACKEND = `/auth/login`;
    const data = { email, password }
    return axios.post(URL_BACKEND, data);
}
const getAccountAPI = () => {
    const token = localStorage.getItem("access_token");
    return axios.get("/auth/account", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

//cart 
const getCartCount = async () => {
    const token = localStorage.getItem("access_token");
    const URL_BACKEND = `/api/count-cart`;
    return axios.get(URL_BACKEND, {
        headers: { Authorization: `Bearer ${token}` }
    });
};


export {
    postLogin, getAccountAPI, getCartCount
}