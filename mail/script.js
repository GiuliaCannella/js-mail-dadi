// Inventiamo una lista di email a nostro piacimento
// Chiediamo all'utente una mail (con un prompt)
// controlliamo che la mail inserita sia presente nella lista
// se è presente, gli diamo il benvenuto. (in console)
// altrimenti gli diciamo che non può accedere (in console)



// inventiamo una lista di mail
const mails = ["giucanni99@gmail.com", "manu@gmail.com", "pippo@gmail.com"];

//  Chiediamo all'utente una mail 
let input = document.getElementById("inputEmail");
let button = document.getElementById("btn");
let isPresente = false;

 button.addEventListener("click", function(){
    let mailInput = input.value
    console.log(mailInput);
    // controlliamo che la mail inserita sia presente nella lista
    for (let i = 0; i < mails.length; i++) {
        const mail = mails[i];
        // se è presente, gli diamo il benvenuto. (in console)
        if (mail == mailInput){
            isPresente = true;
        }
    }

    if (isPresente) {
        console.log("benvenuto")
    } else{
        console.log("non puoi accedere")
    }

    isPresente = false;
 })

 

 

