var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://qashopscreen.microsignage.com/mgmt/index.html#!/login');
driver.findElement(By.id('email_input')).sendKeys('qatelefonica@microsigns.com');
driver.findElement(By.id('userPassword')).sendKeys('12345');
driver.findElement(By.id('loginButton')).click();
//driver.findElement(By.css('button[submit]')).click();

/*driver.sleep(10000).then(function getElementByXpath(path) {
    driver.findElement(By.xpath('//*[@id="loginButton"]')).click();
    });*/
    
    driver.sleep(13000).then(function () {
        driver.findElement(By.xpath('//*[@id="Content"]/div/button')).click();
        });

driver.sleep(14000).then(function() {
        driver.findElement(By.id('CONTENT CATALOGS')).click();
    });

    

//driver.findElement(By.id('Content')).click();







/*driver.sleep(10000).then(function(){
    var content = driver.findElement(By.css("#Content")).then(function(){
        var child = content.firstChild;
        child.firstChild.click();
        
    });
});*/





