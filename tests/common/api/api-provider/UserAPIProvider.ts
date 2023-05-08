import { UpdateUserRequest } from '../api-data-provider/UserAPIDataProvider'
import { GitAPIProvider } from './GitAPIProvider'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

class UserAPIProvider extends GitAPIProvider {
    public getUser<T>(): Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = UserAPIProvider.configureRequest(
            '/user',
            'GET',
            this.headers,
        )
        return this.sendRequest(apiRequest)
    }

    public updateAuthenticatedUser<T>(data: UpdateUserRequest):
        Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = UserAPIProvider.configureRequest(
            '/user',
            'PATCH',
            this.headers,
            JSON.stringify(data)
        )
        return this.sendRequest(apiRequest)
    }
}

export {
    UserAPIProvider,
}