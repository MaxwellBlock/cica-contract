const fs = require('fs');
const https = require('https')

const Hello = artifacts.require("Hello");

module.exports = function (deployer) {
  deployer.deploy(Hello);
};
