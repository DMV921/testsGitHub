export const config: WebdriverIO.Config = {
    afterTest: async function (
        test: unknown,
        context: unknown,
        result: { error?: unknown, duration: unknown, passed: unknown }
    ) {
        await browser.takeScreenshot()
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    specs: ['./src/**/*.test.ts'],
    maxInstances: 5,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['window-size=1366,768'],
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    waitforTimeout: 20000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
        }],
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
