import { IssuesData } from "../data/issues.data"

 type IssuesModel = {
    title: string
    commentPrivateFiled: string
    commentPublicField: string
    filePath: string
}

 function createIssuesModel(data: IssuesData): IssuesModel {
    return { 
        title: data.title,
        commentPrivateFiled: data.commentPrivateFiled, 
        commentPublicField: data.commentPublicField,
        filePath: data.filePath
    }
}

export {
    IssuesModel, createIssuesModel
}
