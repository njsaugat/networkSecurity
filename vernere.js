const lettersLength = 26;
const letterMatrix = new Array(lettersLength);
for (let i = 0; i < letterMatrix.length; i++) {
  letterMatrix[i] = new Array(lettersLength);
}

function encrypt(message, key) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersArray = Array.from(letters);
  const messageArray = Array.from(message);
  const keyArray = Array.from(key);
  const mapper = 0;
  let pointer = 0;
  // for(let i=0;i<le)

  for (let i = 0; i < lettersLength; i++) {
    pointer = i;
    for (let j = 0; j < lettersLength; j++) {
      letterMatrix[i][j] = lettersArray[pointer % lettersLength];
      pointer++;
    }
  }

  for (let i = 0; i < letterMatrix.length; i++) {
    for (let j = 0; j < letterMatrix[i].length; j++) {
      //   console.log(letterMatrix[i][j]);
      process.stdout.write(`${letterMatrix[i][j]}`);
    }
    console.log('');
  }

  if (messageArray.length != keyArray.length) {
  }

  let letter;
  let encryptedMessage = '';
  for (let k = 0; k < messageArray.length; k++) {
    const i = messageArray[k].charCodeAt(0) - 65;
    const j = keyArray[k].charCodeAt(0) - 65;
    letter = letterMatrix[i][j];
    console.log(i);
    console.log(j);
    // process.stdout.write(`${i}  ${j}`);

    encryptedMessage += letter;
  }
  console.log('');
  console.log(encryptedMessage);
}
// console.log(letterMatrix);
encrypt('HELLO', 'HOUSE');
