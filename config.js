/* eslint-env browser */

module.exports = {
  homeURL: 'https://ryxex.github.io',
  contractRyxEx: 'smart_contract/ryxex.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractRyxExAddrs: [
    { addr: '0x56a20f5c2ad2d88d635783780a7a1ad0e50df492', info: 'New Contract 0% Fee 21/03/2018' },
    { addr: '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819', info: 'Deployed 02/09/2017 -- Old Contract, Do Not Use' },
    { addr: '0x373c55c277b866a69dc047cad488154ab9759466', info: 'Deployed 10/24/2016 -- Old Contract, Do Not Use' },
    { addr: '0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65', info: 'Deployed 08/30/2016 -- Old Contract, Do Not Use' },
    { addr: '0x2136bbba2edca21afdddee838fff19ea70d10f03', info: 'Deployed 08/03/2016 -- Old Contract, Do Not Use' },
    { addr: '0xc6b330df38d6ef288c953f1f2835723531073ce2', info: 'Deployed 07/08/2016 -- Old Contract, Do Not Use' },

  ],
  ethTestnet: false,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 4000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: ['https://cache1.ryxex.com', 'https://cache2.ryxex.com'],
  userCookie: 'RyxEx',
  eventsCacheCookie: 'RyxEx_eventsCache',
  deadOrdersCacheCookie: 'RyxEx_deadOrdersCache',
  ordersCacheCookie: 'RyxEx_ordersCache',
  etherscanAPIKey: 'ZWWWHY5CW6JI5DHKKXC12EK57SJJEVESFJ',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0xbdc5bac39dbe132b1e030e898ae3830017d7d969', name: 'SNOV', decimals: 18 },
    { addr: '0x539efe69bcdd21a83efd9122571a64cc25e0282b', name: 'BLUE', decimals: 8 },
    { addr: '0x936f78b9852d12f5cb93177c1f84fb8513d06263', name: 'GNTW', decimals: 18 },
    { addr: '0x01afc37f4f85babc47c0e2d0eababc7fb49793c8', name: 'GNTM', decimals: 18 },
    { addr: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0', name: 'EOS', decimals: 18 },
    { addr: '0xb8d8a92cafaf6c055bce8e53405d90be96d1a677', name: 'REDV', decimals: 8 },

  ],
  defaultPair: { token: '   EOS', base: 'ETH' },
  pairs: [
    { token: 'SNOV', base: 'ETH' },
    { token: 'BLUE', base: 'ETH' },
    { token: 'GNTW', base: 'ETH' },
    { token: 'GNTM', base: 'ETH' },
    { token: 'EOS', base: 'ETH' },
    { token: 'REDV', base: 'ETH' },

  ],
};
