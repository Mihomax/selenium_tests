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
driver.sleep(15000).then(function() {
        driver.findElement(By.id('CONTENT CATALOGS')).click();
        console.log("Success !!!")
    });



    driver.sleep(17000).then(function() {

    var table = driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/table/tbody/tr[1]/td[4]')).getText();


    driver.sleep(10000).then(function() {


        console.log(table);

    }); 
}); 
    

     /*
    //Print data from each cell
    for (var i=0; i < elements.length; i++){
    elements[i].getText().then(function(txt){
    console.log(txt + "\n");
    });
    }
*/






