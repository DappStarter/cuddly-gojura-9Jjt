require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name recipe sad exchange include another army genius'; 
let testAccounts = [
"0xf9a3ad7999d6d9a720ba37baca0cebb5ec4e3e444c6ae40a85e3c30817b22918",
"0xced917068050d86fc9d393a9027f83c71d6c8e5bd02da002c3c3c59ff15dc85f",
"0x8c967f5bf6cfa61502e9de5d370ea1711bf6387b166c9c72d6dbc182f95b0d3e",
"0x552ba6daea6936d92cb399fd5edadc83236269fa6b9393297cd80d1846fc2a85",
"0x809225dfbad06bbc345b3129b47b19b62b35c4a170f90de3de94b4a832a63ead",
"0x6f937ab8da546684fa6ddd85b7c8aa789292a1c548c97783e6ba8ec9783c09c7",
"0x74c725198e8b9656087610aa604748a6a2b19f941061dc79dcc7c0255f00c1f2",
"0xb6b1e3ddaeed1e85e9a8e3a21c3ad2ef96042added17f6150e4c66dfdffcaa1d",
"0x61639da05534b8d5e2a09c928fa40c1a7cabef584ee913f056f9a18cbed2e5e7",
"0x367bb86d2c98e38d23d4e361a7d67f34867336584d4b2b9f239cfcc155888a09"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

