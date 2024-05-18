
import request from "@/config/request.config.js"

let res;
try {
    res = await request({
        url: "/user/getVaildateCode",
        method: "GET"
    });
    console.log(res);
} catch(err){
    console.log(err);
}