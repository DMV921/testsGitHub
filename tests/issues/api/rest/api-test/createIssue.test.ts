import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../../../credential2"
import { MASK } from "../../../../../lesson 10/issues/data/issues.data"
import { createIssuesData } from "../../../data/issues.data"
import { IssuesModel, createIssuesModel } from "../../../model/issues.model"
import { IssueResponse, IssueAPIService, } from "../../../../common/api/api-service/IssueAPIService"
import { IssueAPIProvider } from "../../../../common/api/api-provider/IssueAPIProvider"
import { CreateIssueRequest, IssueAPIDataProvider } from "../../../../common/api/api-data-provider/IssueAPIDataProvider"

const fetch = require('node-fetch')
describe(`/repos/${LOGIN}/${REPO}/issues`, () => {

    let issue: IssuesModel
    beforeEach(async () => {
        issue = createIssuesModel(createIssuesData(MASK))
    })

    it('issue should be created', async () => {
        const response: AxiosResponse<IssueResponse> = await IssueAPIService.createIssue(
            LOGIN,
            REPO,
            issue,
        )
        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual('open')
        const responseUrl: Response = await fetch(response.data.html_url)
        expect(responseUrl.status).toEqual(200)

        const getResponseIssues: AxiosResponse<IssueResponse[]> = await IssueAPIService.getIssues(
            LOGIN,
            REPO,
        )
        const issueResp: IssueResponse | undefined = getResponseIssues.data.find((element) => element.number === response.data.number)
        expect(issueResp?.title).toEqual(issue.title)
        expect(issueResp?.number).toEqual(response.data.number)
        expect(issueResp?.html_url).toEqual(response.data.html_url)
        expect(issueResp?.id).toEqual(response.data.id)
        // expect(issueResp?.state ==='open').toEqual(undefined)
        expect(issueResp?.state).toEqual('open')
    })

    it('issue should be not created (410 code)', async () => {
        const repOffIssues: string = 'offCreateIssues'
        const data: CreateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueResponse> = await issueAPIProvider.createIssue(
            LOGIN,
            repOffIssues,
            data
        )
        expect(response.status).toEqual(410)
    })

    it('issue should be not created (404 code)', async () => {
        const ownerPrivate: string = 'lokiju-test'
        const repoPrivate: string = 'private-repo'
        const data: CreateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueResponse> = await issueAPIProvider.createIssue(
            ownerPrivate,
            repoPrivate,
            data,
        )
        expect(response.status).toEqual(404)
    })

    it('issue should be not created (422 code)', async () => {
        const data = {
            title: issue.title,
            assignees: ["1"]
        }
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<IssueResponse> = await issueAPIProvider.createIssue(
            LOGIN,
            REPO,
            data,
        )
        expect(response.status).toEqual(422)
    })
})