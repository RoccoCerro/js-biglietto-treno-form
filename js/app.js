// Descrizione:
// Scrivere un programma che chieda all'utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Creo due variabili per selezionarmi le caselle di input da cui riceverò i dati
const distanzaElement = document.getElementById("distanza");
console.log(distanzaElement);

const selectAnniElement = document.getElementById("anni");
console.log(selectAnniElement);

// Creo una variabile per selezionare il bottone
const submitElement = document.getElementById("submit");
console.log(submitElement);

// utilizzero la funzione ascolta il click sul bottone per prendere i dati in input e restituire il risultato
submitElement.addEventListener('click', function(){
    let anni = selectAnniElement.selectedOptions;
    console.log("Anni", anni);

    const distanza = distanzaElement.value;
    console.log("Distanza", distanza);

    let prezzoBase, sconto, prezzoFinale;

    prezzoBase = (distanza * 0.21);
    console.log("Prezzo base ", prezzoBase);

    if((!isNaN(distanza)) && (distanza > 0)){
        // SE il cliente ha meno di 18 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 20%
        if(anni = "minorenne"){
            sconto = ((prezzoBase/100) * 20);
        }
        // SE il cliente ha più di 65 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 40%
        else if(anni = "over65"){
            sconto = ((prezzoBase/100) * 40);
        }
        // ALTRIMENTI moltiplico i km per inseriti dal cliente per 0,21€
        else{
            sconto = 0;
        }

        prezzoFinale = (prezzoBase - sconto)
        console.log("Prezzo Finale", prezzoFinale.toFixed(2));
    }
    else{
        alert("ATTENZIONE! C'è un errore!")
    }
}
)



