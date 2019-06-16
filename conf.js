exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 600000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600000,
    isVerbose: true
},
  framework: 'jasmine',
  onPrepare: function () {
    var jasmineReporters = require('jasmine-reporters');
    var newFolder = 'Result';
    // returning the promise makes protractor wait for the reporter config before executing tests 
    return browser.getProcessedConfig().then(function (config) {
        // you could use other properties here if you want, such as platform and version 
        var browserName = config.capabilities.browserName;
        var browserEnv = config.capabilities.browserEnv;
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            cleanDestination: true,
            consolidate: false,
            consolidateAll: false,
            savePath: newFolder,
            // this will produce distinct xml files for each capability 
            filePrefix: browserName + '--UI--',
            modifyReportFileName: function (generatedFileName, suite) {
                //process.env.ENV_SPEC = browserName + '--UI--' + generatedFileName;
                return generatedFileName;
            }
        });
        jasmine.getEnv().addReporter(junitReporter);
    });
},

  capabilities: {
  browserName: 'firefox'
  },
  specs: ['Specs/Demo.js']
  };
  