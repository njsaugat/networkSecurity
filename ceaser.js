// function encrypt(nessage="KNOWYOURWORTH", key=11){
//     const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lettersArray=Array.from(letters);
//     const messageArray=Array.from(message);
//     const letter;
//     for(let i=0;i<messageArray.length;i++){
//         messageArray[i]=messageArray[i]+key

//     }
// }

const ROWS = 5;
const COLS = 5;
let matrix = [[], [], [], [], []];
function playFair(message, key) {
  const messageArray = Array.from(message);
  const keyArray = Array.from(key);
  const keyArrayLength = keyArray.length;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettersArray = Array.from(letters);
  let keyMap = 0;
  const lettersMap = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (keyMap < keyArrayLength) {
        matrix[i][j] = keyArray[keyMap++];
      } else {
        while (keyMap < lettersArray.length) {
          for (let l = 0; l < keyArray.length; l++) {
            if (lettersArray[keyMap] === keyArray[l]) {
              keyMap++;
              break;
            } else {
              matrix[i][j] = lettersArray[keyMap++];
            }
          }
        }
      }
      console.log(matrix[i][j]);
    }
  }
}

playFair('NOIRA', 'MONARCHY');
