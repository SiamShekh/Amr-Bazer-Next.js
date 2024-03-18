import axios from "axios";

const axios_master = () => {
    const instance = axios.create({
        baseURL: "http://localhost:5000/"
    })
    return instance;
};

export default axios_master;