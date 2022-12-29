const fs = require('fs');

const message = 'A';
const messageArray = message.charCodeAt(0).toString(2);
let pointer = 0;
// fs.readFile('d','utf-8',``)
let bufferArray = [];
fs.readFile('key.jpg', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const buf = Buffer.from(data);

  //   console.log(data);

  let counter = 0;
  for (const item of buf) {
    let binaryString = item.toString(2);
    let buffer;
    if (counter >= 10000) {
      console.log(item);
      const binaryStringArray = Array.from(binaryString);
      binaryStringArray[binaryStringArray.length - 1] = messageArray[pointer++];
      binaryString = binaryStringArray.join('');

      binaryString = Number(binaryString);
      binaryString = parseInt(binaryString, 2);
      // console.log(binaryString);
      buffer = Buffer.from(new Uint8Array(binaryString));
    } else {
      buffer = Buffer.from(new Uint8Array(item));
    }
    bufferArray.push(buffer);
    // console.log(buffer);
    // fs.writeFileSync('key1.jpg', buffer, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });
    fs.writeFileSync('key1.jpg', buffer, { encoding: 'utf8', flag: 'w' });
    counter++;
    // console.log(item.toString())
  }
  // console.log(bufferArray);
});
