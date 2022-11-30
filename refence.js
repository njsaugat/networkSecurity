function encrypt(message) {
  const messageArray = Array.from(message);
  // let pointer=0;
  let encryptedMessage1 = '';
  let encryptedMessage2 = '';
  for (let i = 0; i < messageArray.length; i++) {
    let letter = messageArray[i];
    if (i % 2 == 0) {
      encryptedMessage1 += letter;
    } else {
      encryptedMessage2 += letter;
    }
  }
  return encryptedMessage1 + encryptedMessage2;
}

function decrypt(encryptedMessage) {
  const encryptedMessageArray = Array.from(encryptedMessage);
  let decryptedMessage = '';
  let leftPointer = 0;
  let rightPointer;
  if (encryptedMessageArray.length % 2 == 0) {
    //even length
    rightPointer = parseInt(encryptedMessageArray.length / 2);
  } else {
    rightPointer = parseInt(encryptedMessageArray.length / 2 + 1);
  }
  for (let i = 0; i < encryptedMessageArray.length; i++) {
    if (i % 2 == 0) {
      decryptedMessage += encryptedMessageArray[leftPointer++];
    } else {
      decryptedMessage += encryptedMessageArray[rightPointer++];
    }
  }
  return decryptedMessage;
}

console.log(encrypt('helloi'));
console.log(decrypt(encrypt('helloi')));
