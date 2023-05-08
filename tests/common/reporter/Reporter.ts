import allureReporter from '@wdio/allure-reporter'

class Reporter {
    public static addStep(text: string): void {
        allureReporter.addStep(text)
    }
}

export {
    Reporter
}