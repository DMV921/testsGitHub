import { getRandomString, getRandomNumber, getTimeStamp } from "../../common/generations.data"

type IssuesData = {
    title: string
    commentPrivateFiled: string
    commentPublicField: string
    filePath: string
}

enum ReasonForLocking {
    OFF_TOPIC = 'Off-topic',
    SPAM = 'Spam',
    TOO_HEATED = 'Too heated',
    RESLOVED = 'Resolved'  
}

function createIssuesData(mask: string): IssuesData {
    return {
        title: `${mask}-${getRandomString(5)}-${getTimeStamp()}-${getRandomNumber(5)}`,
        commentPrivateFiled: `${getRandomString(5)}`,
        commentPublicField: `${getRandomString(5)}`,
        filePath: 'src/files/placeimg_640_480_any.jpg'
    }
}

const MASK: string = 'Issue_Test'

export {
    createIssuesData,
    MASK,
    IssuesData,
    ReasonForLocking
}