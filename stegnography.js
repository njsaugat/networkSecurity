const fs = require('fs');

const message = 'a';
const messageArray = message.charCodeAt(0).toString(2);
let pointer = 0;
// fs.readFile('d','utf-8',``)
fs.readFile('key.jpg', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const buf = Buffer.from(data);

  //   console.log(data);
  let counter = 0;
  for (const item of buf) {
    if (counter <= 100) {
      let binaryString = item.toString(2);
      const binaryStringArray = Array.from(binaryString);
      binaryStringArray[binaryStringArray.length - 1] = messageArray[pointer++];
      binaryString = binaryStringArray.join('');
      console.log(binaryString);
      //   console.log(bin)
    }
    counter++;
    // console.log(item.toString())
  }
});
