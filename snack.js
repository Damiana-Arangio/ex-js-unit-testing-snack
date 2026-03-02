
// Funzione utilizzata nello Snack 1
function getInitials(nomeCompleto) {

    // Divido la stringa in un array usando lo spazio come separatore
    const parti = nomeCompleto.split(" ");

    // Variabile che conterrà le iniziali
    let result = "";

    for (let i = 0; i < parti.length; i++) {

        // Se la parola non è vuota (gestione spazi multipli)
        // recupero la prima lettera e la aggiungo al risultato in maiuscolo
        if (parti[i] !== "") {
            let iniziale = parti[i][0];
            result += iniziale.toUpperCase();
        }
    }
    return result;
}

// Funzione utilizzata nello Snack 2
function createSlug(stringa) {
    return stringa.toLowerCase();
}

// Funzione utilizzata nello Snack 3
function average(arrayNumeri) {

    // Controllo se tutti i valori sono numeri
    const tuttiNumeri = arrayNumeri.every(numero => typeof numero === "number");
    if (!tuttiNumeri) {
        throw new Error("Average vuole solo numeri!");
    }

    const somma = arrayNumeri.reduce((somma, numero) => {
        return somma + numero;
    }, 0);

    return somma / arrayNumeri.length;
}

/************
    EXPORT
************/
module.exports = {
    getInitials,
    createSlug,
    average
}

