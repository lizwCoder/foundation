/**
 * Created by Administrator on 2019/1/1.
 */
import HttpCommonApiService from "./common/HttpCommonApi.service"
class UserInfoHttpService{
    constructor(){

    }

    getUserInfo(){
        return HttpCommonApiService.get("/user");
    }
}

export default new UserInfoHttpService();