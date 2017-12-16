// Common functions are addeded here
const { By } = require('selenium-webdriver');
var expect = require('chai').expect;

module.exports.fillRegistrationForm = function (driver, username, password, phoneNumber){
  var usernameWE = driver.findElement(By.id('username'));
  usernameWE.sendKeys(username);

  var passwordWE = driver.findElement(By.id('passwd'));
  passwordWE.sendKeys(password);

  var phoneNumberWE = driver.findElement(By.id('phoneNumber'));
  phoneNumberWE.sendKeys(phoneNumber);
}

module.exports.resetForm = function (driver){
  var usernameWE = driver.findElement(By.id('username'));
  usernameWE.clear();

  var passwordWE = driver.findElement(By.id('passwd'));
  passwordWE.clear();

  var phoneNumberWE = driver.findElement(By.id('phoneNumber'));
  phoneNumberWE.clear();
}

module.exports.expectError = function(driver, errorMsg, cssClass){
  var errorWE = driver.findElement(By.css(cssClass));

  var error = errorWE.getAttribute('innerHTML').then(function(errorTxt) {
      expect(errorTxt.trim()).equals(errorMsg);
  });
}
