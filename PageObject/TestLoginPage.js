var DocumentationPage = function () {
   
    
    var documentationURL = "http://juliemr.github.io/protractor-demo/"  
	var firstTxt = element(by.model('first'));
	var secondTxt = element(by.model('second'));
	var goBtn = element(by.id('gobutton'));

    this.go = function(){
        browser.get(documentationURL);
		browser.sleep(2000);
    };
    this.enterValue = function(){
        firstTxt.sendKeys(1);
        browser.sleep(100);
        secondTxt.sendKeys(2);
        browser.sleep(100);
        goBtn.click();
        browser.sleep(100);
    };
    this.clickInstallOnAmazonLink = function(){
        amazonInstallLink.click();
        browser.sleep(100);
    };
   this.drillUpToAmazonInstallDocumentation = function(){
        
    };
};

module.exports = DocumentationPage;