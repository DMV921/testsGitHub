import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'
import { LOGIN } from '../../../../../credential'

class NewIssuePage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/Test/issues/new`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser 
    }

    public async setIssueTitle(issue: IssuesModel): Promise<void> {
        await this.getIssueTitleField().setValue(issue.title)
    }

    public async clickSubmitNewIssue(): Promise<void> {
        await this.getSubmitNewIssueButton().waitForClickable({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.getSubmitNewIssueButton().click()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getIssueTitleField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }

    private getSubmitNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_issue"]//div[contains(@class,"d-flex")]//*[@type="submit"]')
    }
}

export {
    NewIssuePage,
}