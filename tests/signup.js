const {
    Builder,
    By,
    until
} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

// read config js
const fs = require('fs');
var config = JSON.parse(fs.readFileSync('../data/config.json', 'utf8'));

describe('Personal Sign UP', function() {
    //global time out
    this.timeout(config.implicitTimeout);

    let driver;

    test.before(function() {
        console.log('Executing test on browser = ' + config.browserType);
        driver = new Builder().forBrowser(config.browserType).build();
    });


    test.it('open capital one web page and check if title is loaded', function openWebSite() {
        driver.get(config.url); // (1)
        driver.wait(until.titleIs('Financial Software and Wealth Management | Personal Capital'), config.explicitTimeout); // (4)
    });


    test.it('check if financial tool is clickable', function openWebSite() {
        console.log('Open URL = ' + config.url);
        driver.get(config.url); // (1)
        driver.wait(until.titleIs('Financial Software and Wealth Management | Personal Capital'), config.explicitTimeout); // (4)
    });

    test.after(function() {
        driver.quit();
    });
});
