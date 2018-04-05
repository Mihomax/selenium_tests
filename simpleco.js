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
            yield driver.findElement(By.xpath('//*[@id="Content"]/div/button')).click();
            yield driver.findElement(By.id('CONTENT CATALOGS')).click();
            console.log("Success !!!");
            
            yield driver.sleep(5000);

                var table = [];

                let rows = driver.findElements(By.xpath("/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/table/tbody/tr"));
                 //let rows =   driver.findElements(By.tagName("tr"));
                //console.log(typeof rows);
            
                for (var i = 1; i < 11; i++) {

                    var tempArray = [];

                        for (var k = 2; k < 5; k++) {
                        let text = yield driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/table/tbody/tr[' + i + ']/td[' + k + ']')).getText();
                            //console.log( `row ${i} column ${k} ${name}`);
                            //table.push(name);
                            tempArray.push(text);
                        }
                        table.push({"id":tempArray[0], "name":tempArray[1], "code":tempArray[2]});
                    }
             
                yield driver.sleep(5000);
                        console.log(table);
                        //console.log(rows);

                yield driver.sleep(5000);
                yield driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/dir-pagination-controls/ul/li[4]/a')).click();
                        
                var page2table = [];
            
                        for (var i = 1; i < 9; i++) {
        
                            var tempArray = [];
        
                                for (var k = 2; k < 5; k++) {

                                let text = yield driver.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/content-catalogs/div/div[4]/table/tbody/tr[' + i + ']/td[' + k + ']')).getText();
                                    //console.log( `row ${i} column ${k} ${name}`);
                                    //table.push(name);
                                    tempArray.push(text);
                                
                                }
                                page2table.push({"id":tempArray[0], "name":tempArray[1], "code":tempArray[2]});
                            }
    
                yield driver.sleep(5000);
                console.log("And the content of 2nd table is ");
                console.log(page2table);
                        

            yield driver.quit();
        } catch (err) {
            throw err;
        }
    });
};

startSeleniumDriver();