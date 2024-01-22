// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// (Stampare in console)



// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numeroGiocatore = Math.floor(Math.random()*6)+1;
const numeroComputer = Math.floor(Math.random()*6)+1;

console.log(numeroGiocatore, numeroComputer);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numeroGiocatore>numeroComputer) {
    console.log("vince giocatore");

    
}

else if(numeroComputer>numeroGiocatore) {
    console.log("vince computer");

}

else{
    console.log("pari");
}

