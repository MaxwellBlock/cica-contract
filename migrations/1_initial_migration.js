const Hello = artifacts.require("Hello");

module.exports = async function (deployer) {
  await deployer.deploy(Hello);
};
