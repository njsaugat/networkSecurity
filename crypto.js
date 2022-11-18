const { breakCipher } = require('./caesar');
const { encryption, decryption } = require('./encDec');

const message = 'Hello';
const encryptedMessage = 'ifmmp';
const key = 3;

// const encryptedMessage = encryption(message, key);
// console.log(encryptedMessage);

// const decryptedMessage = decryption(encryptedMessage, key);
// console.log(decryptedMessage);

console.log(breakCipher(encryptedMessage));
