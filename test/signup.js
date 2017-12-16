/*
@author: Geethanjali
This code performs basic test by going to personal capital website and fills the registration form
*/
const {
    Builder,
    By,
    until
} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

var assert = require('chai').assert;
var expect = require('chai').expect;

//common util functions are coded here
var util = require('../util.js');

// read config js
var fs = require("fs");
//app root
var appRoot = process.cwd();

//load the json
var content = fs.readFileSync(appRoot + "/config/userRegistration.json");
var config = JSON.parse(content);


describe('Personal Capital Sign UP - Test Suite', function() {
    //global time out
    this.timeout(config.implicitTimeout);

    let driver;

    //pre hook
    test.before(function() {
        console.log('Executing test on browser = ' + config.browserType);
        driver = new Builder().forBrowser(config.browserType).build();
    });

    //test1
    test.it('open personal capital web page and check if title is loaded', function openWebSite() {
        console.log('Open URL = ' + config.url);
        driver.get(config.url);
        //check if browser title is valid
        driver.getTitle().then(function(title){
          expect(title).equals(config.title);
        })
    });

    //test2
    test.it('check if financial tool link is clickable', function openWebSite() {
        var link = By.linkText('FINANCIAL TOOLS');
        driver.wait(until.elementLocated(link), config.explicitTimeout);
        driver.findElement(link).click();
    });

    //test3
    test.it('check if sign up button is clickable', function clickSign() {
        var link = By.linkText('Sign Up Now');
        driver.wait(until.elementLocated(link), config.explicitTimeout);
        driver.findElement(link).click();
    });

    //test4
    test.it('enter sign up details - correct values', function register() {
        driver.wait(until.elementLocated(By.id('registrationForm')), config.explicitTimeout);

        util.fillRegistrationForm(driver, config.validUserRegistration.username, config.validUserRegistration.passwd, config.validUserRegistration.phoneNumber);

        util.resetForm(driver);

    });

    //test5
    test.it('enter sign up details - incorrect username & check error message', function register() {
        driver.wait(until.elementLocated(By.id('registrationForm')), config.explicitTimeout);

        util.fillRegistrationForm(driver, config.invalidUserRegistration1.username, config.invalidUserRegistration1.passwd, config.invalidUserRegistration1.phoneNumber);
        util.expectError(driver, config.errorMessagesExpected.invalidUsername, '.col-xs-12.email .formHelp.invalid')

        util.resetForm(driver);
    });

    //test6
    test.it('enter sign up details - incorrect password & check error message', function register() {
        driver.wait(until.elementLocated(By.id('registrationForm')), config.explicitTimeout);

        util.fillRegistrationForm(driver,config.invalidUserRegistration1.username, config.invalidUserRegistration1.passwd, config.invalidUserRegistration1.phoneNumber);
        util.expectError(driver, config.errorMessagesExpected.invalidPassword, '.col-xs-12.password .formHelp.invalid')

        util.resetForm(driver);
    });

    //test7
    test.it('enter sign up details - incorrect phoneNumber & check error message', function register() {
        driver.wait(until.elementLocated(By.id('registrationForm')), config.explicitTimeout);
        util.fillRegistrationForm(driver,config.invalidUserRegistration1.username, config.invalidUserRegistration1.passwd, config.invalidUserRegistration1.phoneNumber);

        util.expectError(driver, config.errorMessagesExpected.invalidPhoneNo, '.col-xs-12.phone .formHelp.invalid')

        util.resetForm(driver);
    });

    //post hook
    test.after(function() {
        driver.quit();
    });
});
