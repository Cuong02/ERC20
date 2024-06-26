/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIV_KEY],
    }
  },
 
  etherscan: {
    apiKey: {
      bscTestnet:process.env.API_KEY,
  }

}}
