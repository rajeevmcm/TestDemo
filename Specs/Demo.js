var DocumentationPage = require('.././PageObject/TestLoginPage.js');
var dp = new DocumentationPage();
describe('Protractor Demo App1', function() {
  it('should add one and two', function() {
	try{  
    dp.go();
	browser.sleep(1000);
    dp.enterValue();
    browser.sleep(1000);
    expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
		browser.quit();
	}catch(err){
	  	browser.quit();
	}
  });
});