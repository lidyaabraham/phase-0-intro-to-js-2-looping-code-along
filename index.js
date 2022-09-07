// Code your solutions in this file
let name = ["Charlie", "Samip", "Ali"];
let event = ["birthday"];

function writeCards(name, events) {
    const message = [];
    for (let i = 0; i < name.length; i++) {
            message.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
    }
    return message;
}
console.log(writeCards(name, event));
//
// function countDown(count) {
//     let number = count;
    // console.log(number);
//     while (number >= 0){
//         return number++;
//     }

// }

function countDown (n){
    let countDown = n;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(20);