
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

module.exports = {
    getInitials,
}

