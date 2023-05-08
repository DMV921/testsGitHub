import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios'
import { PERSONAL_TOKEN } from '../../../../../../credential2'

class GitAPIProvider {
    protected headers: AxiosRequestHeaders = {}
    protected personalToken = PERSONAL_TOKEN
    protected isSuccesful: boolean

    constructor(isSuccesful: boolean = true) {
        this.isSuccesful = isSuccesful 
        this.headers = {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Authorization': `Bearer ${this.personalToken}`,
        }
    }

    public sendRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        if (this.isSuccesful) {

            return axios(config)
        }
        return axios(config)
            .then(response => response)
            .catch(error => error.response)
    }

    public static configureRequest(
        methodUrl: string,
        method: Method,
        requestHeaders: AxiosRequestHeaders,
        data?: string): AxiosRequestConfig {
        return {
            method: method,
            url: `https://api.github.com${methodUrl}`,
            headers: requestHeaders,
            data: data,
        }
    }
}

export {
    GitAPIProvider
}