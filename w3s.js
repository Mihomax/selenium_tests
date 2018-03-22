var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://www.w3schools.com/html/html_tables.asp');



driver.sleep(15000).then(function () {

    var table = [];

    for (var i = 2; i < 8; i++) {

        for (var k = 1; k < 4; k++) {
            driver.findElement(By.xpath('//*[@id="customers"]/tbody/tr[' + i + ']/td[' + k + ']')).getText().then(function(name){
                table.push(name);
            });
        }
    }

    driver.sleep(10000).then(function () {

        console.log(table);

    });
});










