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

const anniElement = document.getElementById("anni");
console.log(anniElement);

// Creo una variabile per selezionare il bottone
const submitElement = document.getElementById("submit");
console.log(submitElement);

// utilizzero la funzione ascolta il click sul bottone per prendere i dati in input e restituire il risultato
submitElement.addEventListener('click', function(){
    const anni = anniElement.value;
    console.log("Anni", anni);

    const distanza = distanzaElement.value;
    console.log("Distanza", distanza);

    if((!isNaN(anni)) && (!isNaN(distanza)) && (anni > 0) && (distanza > 0)){
        // SE il cliente ha meno di 18 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 20%
        if(anni<18){
            let valore = (distanza * 0.21);
            let sconto = ((valore/100) * 20);
            prezzo = valore - sconto;
            console.log(prezzo.toFixed(2));
        }
        // SE il cliente ha più di 65 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 40%
        else if(anni>65){
            let valore = (distanza * 0.21);
            let sconto = ((valore/100) * 40);
            prezzo = valore - sconto;
            console.log(prezzo.toFixed(2));
        }
        // ALTRIMENTI moltiplico i km per inseriti dal cliente per 0,21€
        else{
            let valore = (distanza * 0.21);
            prezzo = valore
            console.log(prezzo.toFixed(2));
        }

    }
    else{
        alert("ATTENZIONE! C'è un errore!")
    }
}
)



