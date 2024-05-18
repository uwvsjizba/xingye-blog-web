import axios from "axios";

const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 10000,
    withCredentials: true
})

request.interceptors.request.use(
    (config) =>{
        console.log("请求已发出");
        return config;
    }
)

request.interceptors.response.use(
    (response)=>{
        return Promise.resolve(response.data);
    },
    (error)=>{
        console.log(error.message);
})

export default request;