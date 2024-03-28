import axios from "axios";


const axios_auth = ({UserUID, UserToken}) => {
    const instance = axios.create({
        baseURL: "http://localhost:5000/",
        //baseURL: "https://feed-pet-admin.vercel.app/",
        withCredentials: true,
        params: {
            uid: UserUID,
            token: UserToken
        }
    })
    return instance;
};

export default axios_auth;