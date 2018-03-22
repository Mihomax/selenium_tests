var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://qashopscreen.microsignage.com/mgmt/index.html#!/login');
driver.findElement(By.id('email_input')).sendKeys('qatelefonica@microsigns.com');
driver.findElement(By.id('userPassword')).sendKeys('12345');

driver.sleep(10000).then(function () {
    driver.findElement(By.id('loginButton')).click();
});


driver.sleep(15000).then(function () {
    driver.findElement(By.xpath('//*[@id="Planogram"]/div/button')).click();
});
driver.sleep(15000).then(function () {
    driver.findElement(By.id('STORE PLANOGRAM')).click();
    console.log("Success !!!")
});



driver.sleep(18000).then(function () {

    var table = [];

    for (var i = 5; i < 30; i=i+2) {

        for (var k = 2; k < 5; k++) {
            driver.findElement(By.xpath('//*[@id="storePlanogram"]/table[3]/tbody/tr[' + i + ']/td[' + k + ']')).getText().then(function(name){
              table.push(name);
            });
        }
    }

    driver.sleep(12000).then(function () {

        console.log(table);
    });
});










