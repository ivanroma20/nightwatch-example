const chromedriver = require("chromedriver");

const defaultTimeout = 15000
module.exports = {
  src_folders : ['tests'],
  output_folder: 'reports',
  test_settings: {
    default: {
      launch_url: "http://localhost:8087",
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'disable-gpu']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-gpu']
        }
      }
    },

    firefox : {
      globals: {
          waitForConditionTimeout: defaultTimeout // when the networks connection is slow
      },
      webdriver: {
          server_path: './node_modules/.bin/geckodriver',
          port: 4444
      },
      desiredCapabilities: {
          browserName: "firefox",
          acceptInsecureCerts: true
      }
  },
  }
};
