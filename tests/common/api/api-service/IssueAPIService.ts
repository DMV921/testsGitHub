import { AxiosResponse } from 'axios'
import { CreateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { IssueAPIProvider } from '../api-provider/IssueAPIProvider'
import { IssueAPIDataProvider } from '../api-data-provider/IssueAPIDataProvider'
import { IssuesModel } from '../../../issues/model/issues.model'

type IssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string
    number: number
}

class IssueAPIService {
    public static async createIssue(
        login: string,
        repo: string,
        issue: IssuesModel,
    ): Promise<AxiosResponse<IssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<IssueResponse>
                = await issueAPIProvider.createIssue(
                    login,
                    repo,
                    data,
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }

    public static async getIssues(
        login: string,
        repo: string,
    ): Promise<AxiosResponse<IssueResponse[]>> {
        try {
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<IssueResponse[]>
                = await issueAPIProvider.getIssues(
                    login,
                    repo,
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }
}

export {
    IssueAPIService,
    IssueResponse
}