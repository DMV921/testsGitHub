import { IssuesModel } from '../../../issues/model/issues.model'

type CreateIssueRequest = {
    title: string,
    body?: string,
    assignee?: string,
    milestone?: string,
    labels?: string[],
    assignees?: string[],
}

class IssueAPIDataProvider {
    public static getUpdatedIssueData(issue: IssuesModel): CreateIssueRequest {
        return {
            title: issue.title,
        }
    }
}

export {
    IssueAPIDataProvider,
    CreateIssueRequest,
}