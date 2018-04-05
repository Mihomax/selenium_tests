var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const co = require('co');

startSeleniumDriver = function() {
    return co(function*(){
        try {
            var driver = new webdriver.Builder().forBrowser('chrome').build();
            yield driver.get('https://devshopscreen.microsignage.com/mgmt/index.html#!/login');
            yield driver.findElement(By.id('email_input')).sendKeys('dev@testing.com');
            yield driver.findElement(By.id('userPassword')).sendKeys('12345');
            yield driver.findElement(By.id('loginButton')).click();
            yield driver.sleep(10000);
            yield driver.findElement(By.xpath('//*[@id="Planogram"]/div/button')).click();
            yield driver.findElement(By.id('STORE PRICES')).click();
            yield driver.sleep(5000);
            yield driver.findElement(By.xpath('//*[@id="select_value_label_7"]/span[1]')).click();
            yield driver.findElement(By.xpath('//*[@id="select_option_15"]/div[1]')).click();
            console.log("Success !!!");
            
            yield driver.sleep(5000);

            var table = [];
            let rows = yield driver.findElements(By.tagName("tr"));
            let cols = yield rows[2].findElements(By.tagName("td"));
            let head = yield driver.findElements(By.tagName("th"));
            console.log ("Rows length is "+rows.length+ " Columns are " +cols.length+
            " And headers are "+head.length);

            var header = [];

                for (var z= 2; z< cols.length; z++) {

                var titles = yield driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[2]/store-prices/div/div[5]/table/thead/tr/th['+z+']')).getText();
                    header.push(titles);
            }
                console.log(header);

                for (var i = 1; i < rows.length-1; i++) {

                    var tempArray = [];

                        for (var k = 2; k < cols.length; k++) {
                        let text = yield driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[2]/store-prices/div/div[5]/table/tbody[1]/tr[' + i + ']/td[' + k + ']')).getText();
                            
                            tempArray.push(text);
                        }
                         table.push({ "ID":tempArray[0], "Product rofile":tempArray[1],
                            "Plan":tempArray[2],"Price":tempArray[3],"MRSP":tempArray[4],
                            "Discount":tempArray[5]});
                    }
             
                yield driver.sleep(5000);
                        console.log(table);
       

            yield driver.quit();
        } catch (err) {
            throw err;
        }
    });
};

startSeleniumDriver();