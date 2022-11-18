// const key = { a: 'b', c: 'd' };
const letters = 'abcdefghijklmnopqrstuvwxyz';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function createKeys() {
  const letterArray = Array.from(letters);
  const lettersArr = [...letterArray];
  const shuffledArray = shuffle(letterArray);
  let keys = {};

  keys = Object.assign(
    ...lettersArr.map((k, i) => ({ [k]: shuffledArray[i] }))
  );

  return keys;

  // for(let i=1;i<=letterArray.length;i++){
  // }
}

function encryption(message, keys) {
  let messageArray = Array.from(message);
  let encryptedMessage = '';
  for (let i = 0; i < messageArray.length; i++) {
    const letter = keys[messageArray[i]];
    encryptedMessage += letter;
    // Object.keys(keys).find(key => keys[key] === value);
    // messageArray[i];
  }
  return encryptedMessage;
}

function decryption(encryptedMessage, keys) {
  let messageArray = Array.from(encryptedMessage);
  let decryptedMessage = '';
  for (let i = 0; i < messageArray.length; i++) {
    const letter = keys[messageArray[i]];
    decryptedMessage += letter;
    // Object.keys(keys).find(key => keys[key] === value);
    // messageArray[i];
  }
  return decryptedMessage;
}

function objectFlip(obj) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ((acc[value] = key), acc),
    {}
  );
}
const keys = createKeys();
const reversedKeys = objectFlip(keys);
// console.log(reversedKeys);
const encryptedMessage = encryption('hello', keys);
console.log(encryptedMessage);
console.log(decryption(encryptedMessage, reversedKeys));
// console.log();
