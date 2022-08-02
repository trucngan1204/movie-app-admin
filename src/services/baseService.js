import Axios from "axios"
import { DOMAIN, TOKEN, TokenCyberSoft, TOKEN_CYBERSOFT } from '../util/settings/config'

// const http = Axios.create({
//     baseURL: DOMAIN,
//     timeout: 30000,
// })

// http.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
//         'accept': 'application/json',
//         // 'Access-Control-Allow-Origin':'*',
//         'TokenCyberSoft': TOKEN_CYBERSOFT,
//         'Authorization': `${localStorage.getItem() ? 'Bearer ' + localStorage.getItem(TOKEN) : ''}`   //Token mà người dùng đăng nhập
//     }
//     return config
// }, (errors) => {
//     return Promise.reject(errors)
// })

export class baseService {
    constructor() {
        this.http = Axios.create({
            baseURL: DOMAIN,
            timeout: 30000,
        })
        this.http.interceptors.request.use((config) => {
            config.headers = {
                ...config.headers,
                'accept': 'application/json',
                // 'Access-Control-Allow-Origin':'*',
                'TokenCyberSoft': TokenCyberSoft,
                'Authorization': `${localStorage.getItem(TOKEN) ? 'Bearer ' + localStorage.getItem(TOKEN) : ''}`   //Token mà người dùng đăng nhập
            }
            return config
        }, (errors) => {
            return Promise.reject(errors)
        })
    }

    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: {TokenCyberSoft,
                 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }


    get = (url) => {
        console.log(url)
        return this.http.get(url);
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { TokenCyberSoft,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}