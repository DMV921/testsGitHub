import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential2'
import { getRandomString, getRandomNumber, getTimeStamp } from "../../common/generations.data"

type UserData = {
    blog: string
    login: string
    password: string
    email: string
    name: string
    bio: string
    pronouns: PronounsType
    customPronounsValue?: string,
    filePath: string
}

enum PronounsType {
    THEY = 'they/them',
    SHE = 'she/her',
    HE = 'he/him',
    CUSTOM = 'Custom'
}

const userData: UserData = {
    blog: '',
    login: `${LOGIN}`,
    password: `${PASSWORD}`,
    email: `${EMAIL}`,
    name: `nameField-${getRandomString(5)}-${getTimeStamp()}-${getRandomNumber(5)}`,
    bio: `bioField-${getRandomString(5)}-${getTimeStamp()}-${getRandomNumber(5)}`,
    pronouns: PronounsType.HE,
    filePath: 'src/files/placeimg_640_480_any.jpg',
}

const userEmptyData: UserData = {
    blog: '',
    login: `${LOGIN}`,
    password: `${PASSWORD}`,
    email: ``,
    name: ``,
    bio: ``,
    pronouns: PronounsType.HE,
    filePath: 'src/files/placeimg_640_480_any.jpg',
}

const SRC_WITHOUT_AVATAR: string = 'https://avatars.githubusercontent.com/u/104264067?s=400&v=4'
const BAD_PASSWORD: string = '1'
const BAD_EMAIL: string = 'fefefe'
const LONG_NAME: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis do'
const LONG_BIO: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
const FILE_PATH_BIG_SIZE: string = 'src/files/photo_visokogo_razresheniya.jpg'
const CUSTOM_PRONOUNS: string = 'Custom'

export {
    BAD_PASSWORD,
    PronounsType,
    BAD_EMAIL,
    LONG_NAME,
    LONG_BIO,
    FILE_PATH_BIG_SIZE,
    CUSTOM_PRONOUNS,
    SRC_WITHOUT_AVATAR,
    UserData, 
    userData,
    userEmptyData
}