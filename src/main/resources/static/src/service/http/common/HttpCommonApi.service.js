/**
 * Created by Administrator on 2019/1/1.
 */
import axios from 'axios'

class HttpCommonApiService {



    constructor() {

        this.config = {

            // `baseURL` will be prepended to `url` unless `url` is absolute.
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            // to methods of that instance.
            // baseURL: 'https://some-domain.com/api/',

            // `transformRequest` allows changes to the request data before it is sent to the server
            // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
            // FormData or Stream
            // You may modify the headers object.
            transformRequest: [function (data, headers) {
                // Do whatever you want to transform the data

                return data;
            }],

            // `transformResponse` allows changes to the response data to be made before
            // it is passed to then/catch
            transformResponse: [function (data) {
                // Do whatever you want to transform the data
                return data;
            }],

            // `headers` are custom headers to be sent
            // headers: {
            //     'X-Requested-With': 'XMLHttpRequest'
            // },


        }
    }

    get(url) {
        return axios.get(url, this.config)
    }

    post(url, paramObj) {

        return axios.post(url, paramObj, this.config);
    }
}

export default new HttpCommonApiService();