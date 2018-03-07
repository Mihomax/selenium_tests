var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const co = require('co');

startSeleniumDriver = function() {
    return co(function*(){
        try {
            var driver = new webdriver.Builder().forBrowser('chrome').build();
            yield driver.get('https://qashopscreen.microsignage.com/mgmt/index.html#!/login');
            yield driver.findElement(By.id('email_input')).sendKeys('qatelefonica@microsigns.com');
            yield driver.findElement(By.id('userPassword')).sendKeys('12345');
            yield driver.findElement(By.id('loginButton')).click();
            yield driver.sleep(10000);
            //let contentBtn = yield driver.findElement(By.id('Content'));
            //yield driver.findElement(By.xpath);
            //console.log(contentBtn);

            var text = driver.findElement(By.css('#Content md-button.md-no-style'));

            console.log(text);

            yield driver.quit();
        } catch (err) {
            throw err;
        }
    });
};

startSeleniumDriver();