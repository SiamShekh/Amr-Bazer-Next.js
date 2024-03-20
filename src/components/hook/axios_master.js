import axios from "axios";

const axios_master = () => {
    const instance = axios.create({
        //baseURL: "http://localhost:5000/",
        baseURL: "https://feed-pet-admin.vercel.app/",
        withCredentials: true
    })
    return instance;
};

export default axios_master;