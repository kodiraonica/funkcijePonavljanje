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



let element = document.getElementById("printCounter");    
// let clearInterval = clearInterval(interval);
let brojac = 0;


function addingParameter(a){
    let interval = setInterval(() => {
        if(brojac < a){
            brojac ++;
            //element.innerHTML = brojac;
            //console.log(brojac);
            noviParametar(brojac);
        }else{
            clearInterval(interval);
        }
    }, 1000);

        

     
}

function startCount() {

    let input = document.getElementById("inputCounter").value;
   // console.log(input);
    brojac = 0;
    console.log(brojac)
    addingParameter(input);
    //noviParametar(input)
}


function noviParametar(b){
        element.innerHTML = b;
}






// arrow
function print(element,c){
    element.innerHTML =c;
}

setTimeout(() =>{
    print(document.getElementById("IspisProba"),"something");
},1000);





