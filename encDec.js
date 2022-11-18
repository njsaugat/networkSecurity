const ASCII_LETTERS_LENGTH = 128;

exports.encryption = (message, key) => {
  const charArray = Array.from(message);
  //   console.log(charArray);
  let encryptedMessage = '';
  for (let i = 0; i < charArray.length; i++) {
    const letter = String.fromCharCode(
      (charArray[i].charCodeAt(0) + key) % ASCII_LETTERS_LENGTH
    );
    encryptedMessage += letter;
  }
  return encryptedMessage;
};
exports.decryption = (encryptedMessage, key) => {
  const charArray = Array.from(encryptedMessage);
  let decryptedMessage = '';
  for (let i = 0; i < charArray.length; i++) {
    const letter = String.fromCharCode(
      (charArray[i].charCodeAt(0) - key) % ASCII_LETTERS_LENGTH
    );
    decryptedMessage += letter;
  }
  return decryptedMessage;
};
