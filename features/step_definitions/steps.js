const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Capabilities } = require("selenium-webdriver");
const assert = require("assert");

const { filter, folder } = require("../page_objects/page");

require("chromedriver");

let driver;

Before(function (_testCase, callback) {
  const capabilities = Capabilities.chrome();
  capabilities.set("chromeOptions", { w3c: false });
  new Builder()
    .forBrowser("chrome")
    .build()
    .then((d) => {
      driver = d;
      callback();
    });
});

After(function () {
  return driver.quit();
});

Given("I have opened LivingDoc", function () {
  driver.get("http://localhost:3000/ld");
});

When("I enter {string} into filter input", function (filterText) {
  driver.findElement(By.xpath(filter.input)).sendKeys(filterText);
});

When("I click on the clear filter input icon", function () {
  driver.findElement(By.xpath(filter.clearIcon)).click();
});

When("I click on the {string} folder", function (folderName) {
  driver.findElement(By.xpath(folder.title(folderName))).click();
});

const checkElementPresent = async function (selector, present) {
  const elements = await driver.findElements(
    By.xpath(selector)
  )
  present ? assert.notStrictEqual(elements.length, 0) : assert.strictEqual(elements.length, 0)
}

Then("{string} folder should be displayed", async function (folderName) {
  await checkElementPresent(folder.title(folderName), true)
});

Then("{string} folder should not be displayed", async function (folderName) {
  await checkElementPresent(folder.title(folderName), false)
});
