const Hello = artifacts.require("Hello");

module.exports = async function (deployer) {
  await deployer.deploy(Hello);

  await Hello.deployed().then(async function (instance) {
    await instance.setCounter();
  });
};
