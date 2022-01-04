require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember uncle hunt battle sun sure'; 
let testAccounts = [
"0x745f4b43c72560d45b6f56484c8863a2168a6f35228863ce2f5a77ce2ceb0e4f",
"0xfe4240d12a3ceafc400052a3d21472753ec76975fe3a152115699b8a15a4a482",
"0x6fdf6182bdf7774b92691d93cd6560b803cc65005f2df956a142a754b3584705",
"0x71a494f640726395f7df956ffb4970c8787e27ab3c5723d60be60a0a05072999",
"0x4766d24162d1003775fe5ffd821ab43a192753f33244f15d7eccecd1f916aa5f",
"0x8c3b68ba2f9cb4608ac60ac2ef4a86e6e7ee4e562a1606726673788a50c8f9b1",
"0xe0b8ced83af42fb1340b1b2f0f357df399f74a8c8f0e7ee9c33b5385031ba407",
"0x7e4067eb7cea9b4ff6114e574b4c974d9be9cbff4999749ca33f268ca88f1674",
"0xd95a5e7913a606ecfd4e2c75617e25c8fde2a3e9edac93024270ab69f590b53d",
"0x100992cce602de0bcf6d392ab033000360fbea39e164baae35d914c5159acd04"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

