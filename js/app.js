/*
    ZADATAK
    Dohvatiti vrijednost koja se unese u input element i napraviti funkciju koja će povećavati
    i prikazivati vrijednost onoliko puta koliko je bilo uneseno u input elementu
 */
/* 
    help
    document.getElementById("inputCounter").value --> dohvaća vrijednost elementa
    document.getElementById("printCounter") --> dohvaća element koji ćemo puniti
    setInterval(() => {}, 1000) --> kreira ponavljajući interval koji se događa svaku sekundu
    clearInterval(myInterval) --> poništava interval kada nam više ne treba
*/

let count = 0;

function startCount() {
    let counterNbr = document.getElementById("inputCounter").value;
    let printCounter = document.getElementById("printCounter");
    printCounter.innerHTML = "";
    count = 0;
    counter(counterNbr);
}

function counter(counterNbr) {
    let interval = setInterval(() => {
        if (count < counterNbr) {
            count += 1;
        }
        printCounter.innerHTML = count;
        console.log(count);
        if (count == counterNbr) {
            clearInterval(interval);
        }
    }, 1000);
}




// or

// let clearInterval = clearInterval(interval);
// let element = document.getElementById("inputCounter").value;
// let printCounter = document.getElementById("printCounter");

// let countNumber = 0;

// function startCount() {
//     let counterNumber = document.getElementById("inputCounter").value;
//     countNumber = 0;
//     console.log(printCounter);
//     counter(counterNumber);
// }

// function counter(counterNumber) {
//     printCounter.innerHTML = "";
//     let myInterval = setInterval(() => {
//         if (countNumber < counterNumber) {
//             countNumber += 1;
//         }
//         print(printCounter, countNumber);
//         if (countNumber == counterNumber) {
//             clearInterval(myInterval);
//         }
//     }, 1000);
// }
        

// let print = (element, c) => {
//    element.innerHTML = c;
// }

// setTimeout(() => {
//     print(document.getElementById("ispisProba"), "odbrojavanje!")
// }, 1000);










