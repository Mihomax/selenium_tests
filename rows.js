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
    driver.findElement(By.xpath('//*[@id="Content"]/div/button')).click();
});
driver.sleep(15000).then(function () {
    driver.findElement(By.id('CONTENT CATALOGS')).click();
    console.log("Success !!!")
});



driver.sleep(17000).then(function () {

    var table = [];

    for (var i = 1; i < 11; i++) {

            driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/table/tbody/tr[' + i + ']')).getText().then(function(name){
            
                var rowValue = name.split(' ');
            var rowObject = {id: rowValue[0], name: rowValue[1], code: rowValue[2]};
            table.push(rowObject);
        });
    }

    driver.sleep(10000).then(function () {
       console.log(table);

    });
});










