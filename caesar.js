// function encrypt(message,key){
//     let encryptedMessage='';
//     const charArray = Array.from(message);
//     for(let i=0;i<charArray.length;i++){
//         let letter=(charArray[i]+key)%26;

const { encryption, decryption } = require('./encDec');

//     }
// }

// function decrypt(encryptedMessage,key){

// }

exports.breakCipher = (encryptedMessage) => {
  for (let key = 1; key < 128; key++) {
    const decryptedMessage = decryption(encryptedMessage, key);
    // const decryptedMessage = decryption(encryptedMessage, key);
    console.log(decryptedMessage);
    // if (encryptedMessage === message) {
    //   return key;
    // }
  }
};
