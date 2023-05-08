import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'
import { LOGIN } from '../../../../../credential2'

class IssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/Test/issues`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async createNewIssue(): Promise<void> {
        await this.getNewIssueButton().waitForClickable({
            timeoutMsg: 'New issue button was not clickable',
        })
        await this.getNewIssueButton().click()
    }

    public async isDisplayedCloseLabel(): Promise<boolean> {
        await this.getCloseLabel().waitForDisplayed({
            timeoutMsg: 'Label was not displayed',
        })
        return this.getCloseLabel().isDisplayed()
    }

    public async openClosedIssuesList(): Promise<void> {
        await this.getCloseIssuesList().waitForClickable({
            timeoutMsg: 'Close issues list was not clickable',
        })
        await this.getCloseIssuesList().click()
    }

    public async getDocumentationLabelIssue(): Promise<boolean> {
        await this.getResetFiltersButton().waitForDisplayed({
            timeoutMsg: 'Clear current search button was not displayed',
        })
        await this.getDocumentationLabelInList().waitForDisplayed({
            timeoutMsg: 'Documentation label was not displayed',
        })
        return this.getDocumentationLabelInList().isDisplayed()
    }

    public isDisplayedMessegeAboutSuccessDelete(): Promise<boolean> {
        return this.getMessegeAboutSuccessDelete().isDisplayed()
    }

    public async openLabelInList(): Promise<void> {
        await this.getlabelList().waitForClickable({
            timeoutMsg: 'Labels list was not clickable',
        })
        await this.getlabelList().click()
        await this.getlabelListDocumentation().waitForDisplayed({
            timeoutMsg: 'Label lisl was not displayed',
        })
        await this.getlabelListDocumentation().waitForClickable({
            timeoutMsg: 'Documentation button was not clickable',
        })
        await this.getlabelListDocumentation().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async openIssue(issueModel: IssuesModel): Promise<void> {
        await this.getIssueInList(issueModel).waitForClickable({
            timeoutMsg: 'Open issue button was not clickable',
        })
        await this.getIssueInList(issueModel).click()
    }

    public isExistIssue(issueModel: IssuesModel): Promise<boolean> {
        return this.getIssueInList(issueModel).isExisting()
    }

    private getCloseIssuesList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[contains(@class,"d-lg-block no-wrap")]//a[@class="btn-link "]')
    }

    private getCloseLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@aria-label="Closed issue"]//*[name()="svg"]')
    }

    private getDocumentationLabelInList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//span/a[@data-name="documentation"]')
    }

    private getResetFiltersButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//a[@class="issues-reset-query"]')
    }

    private getIssueInList(issueTitle: IssuesModel): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`//a[text()="${issueTitle.title}"]`)
    }

    private getMessegeAboutSuccessDelete(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div/div/div')
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="d-none d-md-block"]')
    }

    private getlabelList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary[@title="Label"]//span[@class="dropdown-caret hide-sm"]')
    }

    private getlabelListDocumentation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[normalize-space()="documentation"]')
    }
}

export {
    IssuesPage,
}