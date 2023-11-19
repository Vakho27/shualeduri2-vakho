//  davaleba 1
// let numbersArray = [];
// for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * 6) + 15;
//     numbersArray.push(randomNumber);
// }

// let luwiArray = [];
// let kentiArray = [];

// for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0) {
     
//         luwiArray.push(numbersArray[i]);
//     } else {
      
//         kentiArray.push(numbersArray[i]);
//     }
// }
// console.log("შემთხვევით რიცხვები:", numbersArray);
// console.log("luwiArray:", luwiArray);
// console.log("kentiArray:", kentiArray);


// davaleba 2

let numbersArray = [];
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 15;
    numbersArray.push(randomNumber);
}

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log("შემთხვევით რიცხვები:", numbersArray);
console.log("საშუალო არითმეტიკული:", sum / numbersArray.length);
