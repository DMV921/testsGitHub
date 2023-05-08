import { LoginPage } from '../page-object/Login.page'
import { MainPage } from "../../profile/page-object/Main.page"
import { createUserModel, UserModel } from '../model/user.model'
import { userData } from '../data/user.data'
import { BAD_PASSWORD, BAD_EMAIL } from '../data/user.data'

const user: UserModel = createUserModel(userData)

describe('Login from', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })
    beforeEach(async () => {
        await loginPage.open()
    })

    it('User will login using login', async () => {
        await loginPage.login(user)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('User will login using email', async () => {
        await loginPage.setValueUsernameField(user.email)
        await loginPage.setValuePasswordField(user.password)
        await loginPage.clickLoginButton()
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(user.login)
    })

    it('Error message should be displayed by login with wrong email', async () => {
        await loginPage.setValueUsernameField(BAD_EMAIL)
        await loginPage.setValuePasswordField(user.password)
        await loginPage.clickLoginButton()
        expect(await loginPage.isDisplayedErrorMessege()).toEqual(true)
    })

    it('Error message should be displayed by login with wrong password', async () => {
        await loginPage.setValueUsernameField(user.email)
        await loginPage.setValuePasswordField(BAD_PASSWORD)
        await loginPage.clickLoginButton()
        expect(await loginPage.isDisplayedErrorMessege()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})