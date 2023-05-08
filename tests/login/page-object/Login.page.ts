import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'
import { Reporter } from '../../common/reporter/Reporter'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickLoginButton(): Promise<void> {
        Reporter.addStep('Подождать кликабельности кнопки Sign in')
        await this.getLoginButton().waitForClickable({
            timeoutMsg: 'Login button was not clickable',
        })
        Reporter.addStep(`Нажать на кнопку Sign in`)
        await this.getLoginButton().click()
    }

    public isDisplayedErrorMessege(): Promise<boolean> {
        Reporter.addStep('Проверить отображение сообщения об ошибке')
        return this.getErrorMessege().isDisplayed()
    }

    public async login(user: UserModel): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed',
        })
        await this.setValueUsernameField(user.login)
        await this.setValuePasswordField(user.password)
        await this.clickLoginButton()
    }

    public async open(): Promise<void> {
        Reporter.addStep('Открыть страницу с логинацией пользователя')
        await this.browser.url(this.url)
    }

    public async setValuePasswordField(password: string): Promise<void> {
        Reporter.addStep('Подождать отображения поля Password')
        await this.getPasswordField().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed',
        })
        Reporter.addStep(`Ввести в поле пароль..`)
        await this.getPasswordField().setValue(password)
    }

    public async setValueUsernameField(user: string): Promise<void> {
        Reporter.addStep('Подождать отображения поля Login')
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed',
        })
        Reporter.addStep(`Ввести в поле логин..`)
        await this.getLoginField().setValue(user)
    }

    private getErrorMessege(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div')
    }

    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}
export {
    LoginPage,
}