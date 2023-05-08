import { ChainablePromiseElement } from 'webdriverio'
import { Reporter } from '../../common/reporter/Reporter'
import { LOGIN } from '../../../../../credential2'

class MainPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'
    
    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }
    public getUserLoginText(): Promise<string> {
        Reporter.addStep(`Сравнить текст логина с ${LOGIN}`)
        return this.getUserLogin().getText()
    }
    public async openUserMenu(): Promise<void> {
        Reporter.addStep('Подождать кликабельности аватара')
        await this.getUserAvatar().waitForClickable({
            timeoutMsg: 'User avatar was not clickable',
        })
        Reporter.addStep('Кликнуть на аватар')
        await this.getUserAvatar().click()
    }
    private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary//*[contains(@class,"avatar")]')
    }
    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="css-truncate-target"]')
    }
}
export {
    MainPage,
}
