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

// Funzione utilizzata negli Snack 2-4-6
function createSlug(stringa) {

    if (!stringa) {
        throw new Error("Stringa non valida!");
    }

    const stringaMiniscolo = stringa.toLowerCase();
    return stringaMiniscolo.replaceAll(" ", "-");
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

// Funzione utilizzata nello Snack 5
function isPalindrome(stringa) {

    // Elimino tutti gli spazi;
    const stringaSenzaSpazi = stringa.replaceAll(" ", "");
    
    // Inverto la stringa
    const stringaInvertita = stringaSenzaSpazi.split("").reverse().join("");

    return stringaSenzaSpazi === stringaInvertita;
}

// Funzione utilizzata nello Snack 7
function findPostById(posts, id) {

    // Controllo struttura array
    posts.forEach(post => {
        if (post.id === undefined || post.title === undefined || post.slug === undefined) {
            throw new Error("L'array posts non è nel formato corretto.");
        }
    });

    // Controllo se l'id è valido
    if (typeof id !== "number") {
        throw new Error(id + " non è un id valido");
    }

    // Ricerca post
    const postTrovato = posts.find(post => post.id === id);

    return postTrovato || null;
}

/************
    EXPORT
************/
module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}

