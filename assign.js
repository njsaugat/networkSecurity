function encrypt(message, key) {
  message = message.toUpperCase();
  let encryptedMsg = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersArray = Array.from(letters);
  const messageArray = Array.from(message);
  let letter = '';
  for (let i = 0; i < messageArray.length; i++) {
    for (let j = 0; j < lettersArray.length; j++) {
      if (messageArray[i] == lettersArray[j]) {
        letter = lettersArray[(j + key) % 26];
        encryptedMsg += letter;
      }
    }
  }
  return encryptedMsg;
}

function decrypt(encryptedMessage, key) {
  encryptedMessage = encryptedMessage.toUpperCase();
  let decryptedMsg = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersArray = Array.from(letters);
  const messageArray = Array.from(encryptedMessage);
  let letter = '';
  for (let i = 0; i < messageArray.length; i++) {
    for (let j = 0; j < lettersArray.length; j++) {
      if (messageArray[i] == lettersArray[j]) {
        letter = lettersArray[(j - key) % 26];
        decryptedMsg += letter;
      }
    }
  }
  return decryptedMsg;
}

console.log(encrypt('hello', 3));
console.log(decrypt(encrypt('hello', 3), 3));
