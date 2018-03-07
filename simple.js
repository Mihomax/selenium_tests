var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://qashopscreen.microsignage.com/mgmt/index.html#!/login');
driver.findElement(By.id('email_input')).sendKeys('qatelefonica@microsigns.com');
driver.findElement(By.id('userPassword')).sendKeys('12345');
driver.findElement(By.id('loginButton')).click();
//driver.findElement(By.id('Content')).click();


driver.sleep(10000).then(function(){
    var content = driver.findElement(By.id("Content")).then(function(){
        var child = content.firstChild;
        child.firstChild.click();
        
    });
});





