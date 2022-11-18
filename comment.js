// const asciiValue = charArray[i].charCodeAt(0);
// const modifiedAsciiValue = eval(
//   asciiValue.toString() + randomOperation + key.toString()
// );
// console.log(modifiedAsciiValue);
// const asciiValueWithinRange =
//   modifiedAsciiValue < 0
//     ? (modifiedAsciiValue * -1) % ASCII_LETTERS_LENGTH
//     : modifiedAsciiValue % ASCII_LETTERS_LENGTH;
// const letterFromAscii = String.fromCharCode(
//   (asciiValue + randomOperation) % ASCII_LETTERS_LENGTH
// );
// const letterFromAscii = String.fromCharCode(asciiValueWithinRange);

// let randomOperation = getRandomOperation();
// console.log(randomOperation);

//   }

// const basicOperations = ['*', '/'];

function getRandomOperation() {
  const randomNum = Math.floor(Math.random() * ASCII_LETTERS_LENGTH);
  //   return basicOperations[randomNum];
  return randomNum;
}
