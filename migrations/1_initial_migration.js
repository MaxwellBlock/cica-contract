const fs = require('fs');
const https = require('https')

const Hello = artifacts.require("Hello");

module.exports = function (deployer) {
  deployer.deploy(Hello);

  let secrets = JSON.parse(fs.readFileSync('data.json','utf8'));
  config = {
    provider: secrets.bsctest_rpc,
    hello: Hello.address
  }

  fs.writeFileSync('config.json', JSON.stringify(config), 'utf8')
};
