/**
 * Created by Administrator on 2019/1/1.
 */
import axios from 'axios'
class HttpCommonApiService {
    constructor() {

    }

    get(url) {
        return axios.get(url)
    }

    post(url, paramObj) {
        return axios.post(url, paramObj);
    }
}

export default new HttpCommonApiService();