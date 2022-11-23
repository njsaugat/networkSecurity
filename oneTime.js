function oneTime(message, key) {
  const messageArray = Array.from(message);
  const keyArray = Array.from(key);
  let letter = '';
  let encrypted = '';
  for (let i = 0; i < messageArray.length; i++) {
    const xor = messageArray[i].charCodeAt(0) ^ keyArray[i].charCodeAt(0);
    letter = String.fromCharCode(xor + 65);
    console.log(xor, letter);
    encrypted += letter;
  }
  return encrypted;
}

console.log(oneTime('hello', 'defsd'));
