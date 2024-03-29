/**
 * Generare array di colori a piacere con almeno 4 colori
 * Far scrivere all'utente un colore con input con btn
 * AL click del btn verificare se il colore inserito da utente è presente nell'array:
 * - Se non presente lo inserisce nell'array e stampa elementin lista in html
 * - Se presente stampa in html 'ATTENZIONE ELEMENTO PRESENTE'
 */

// * Generare array di colori a piacere con almeno 4 colori
let colori = ["giallo", "blu", "Verde", "rosa"];

// * Far scrivere all'utente un colore con input con btn
const coloreInput = document.getElementById("coloreid");
const btn = document.getElementById("btn");
const p = document.getElementById("errore");
const lista = document.querySelector(".lista");

//Variabili d'appoggio
let isPresente = false;
let listaItems = "";

// * AL click del btn verificare se il colore è presente nell'array:
btn.addEventListener("click", function () {
  listaItems = "";

  const coloreUtente = coloreInput.value.trim();

  if (coloreUtente != "" && coloreInput != null) {
    for (let i = 0; i < colori.length; i++) {
      const colore = colori[i];

      if (coloreUtente == colore) {
        isPresente = true;
      }
    }

    if (isPresente) {
      p.innerText = "ATTENZIONE ELEMENTO PRESENTE";
    } else {
      console.log("PRE push", colori);
      colori.push(coloreUtente);
      console.log("POST push", colori);
      for (let i = 0; i < colori.length; i++) {
        const colore = colori[i];
        listaItems += `<li>${colore}</li>`;
        p.innerText = `Risultati trovati: ${colori.length}`;
      }
    }

    isPresente = false;
    lista.innerHTML = listaItems;
  } else {
    p.innerText = "ERRORE DI VALIDAZIONE";
  }
});
