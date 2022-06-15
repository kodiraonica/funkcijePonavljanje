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
let counter = document.getElementById("printCounter");
let brojac = 0;

function ispisBroja(a) {
  setInterval(() => {
    if (brojac < a) {
      brojac++;
      counter.innerHTML = brojac;
      console.log(brojac);
    } else {
      clearInterval(ispisBroja);
    }
  }, 1000);
}

function startCount() {
  let input = document.getElementById("inputCounter").value;
  brojac = 0;
  ispisBroja(input);
}
