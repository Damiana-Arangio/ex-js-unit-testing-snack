/************
    IMPORT
*************/
const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack.js");

/***************
    STRINGHE
****************/
describe("Manipolazione di stringhe", () => {

    /* 
        🏆 Snack 1
        Creare un test che verifichi la seguente descrizione:
        "La funzione getInitials restituisce le iniziali di un nome completo."
    */

    test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
        expect(getInitials("Damiana Arangio")).toBe("DA");
        expect(getInitials("damiana arangio")).toBe("DA");
        expect(getInitials("Damiana Maria Arangio")).toBe("DMA");
        expect(getInitials("Damiana   Arangio")).toBe("DA");
        expect(getInitials("   Damiana   Arangio   ")).toBe("DA");
    })

    /* 
        🏆 Snack 5
        Creare un test che verifichi la seguente descrizione:
        👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
    */

    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("anna")).toBe(true)
        expect(isPalindrome("damiana")).toBe(false)
        expect(isPalindrome("i topi non avevano nipoti")).toBe(true)
    })
});

/************
    ARRAY
************/
describe("Operazioni sugli array", () => {

    /* 
        🏆 Snack 3
        Creare un test che verifichi la seguente descrizione:
        👉 "La funzione average calcola la media aritmetica di un array di numeri."
    */

    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([5, 1, 3])).toBe(3);
        expect(average([10, 20])).toBe(15);
        expect(average([2])).toBe(2);
        expect(() => average([5, "ciao"])).toThrow();
    })

    /* 
        🏆 Snack 7
        Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
        Creare un test che verifichi le seguenti descrizioni:
        👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
        Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
    */

    const posts = [
        { id: 1, title: "Primo Post", slug: "primo-post" },
        { id: 2, title: "Secondo Post", slug: "secondo-post" },
        { id: 3, title: "Terzo Post", slug: "terzo-post" }
    ];

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Terzo Post", slug: "terzo-post" });
        expect(findPostById(posts, 99)).toBe(null);
        expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id valido");
        expect(() => findPostById([34, 67])).toThrow("L'array posts non è nel formato corretto.");
    });
});

/************
    SLUG
************/
describe("Generazione di slug", () => {
    
    /* 
        🏆 Snack 2 
        Creare un test che verifichi la seguente descrizione:
        👉 "La funzione createSlug restituisce una stringa in lowercase."
    */

    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("Fare Colazione")).toBe("fare-colazione");
    })

    /* 
        🏆 Snack 4
        Creare un test che verifichi la seguente descrizione:
        👉 "La funzione createSlug sostituisce gli spazi con -."
        
        Esempi:
        createSlug("Questo è un test") → "questo-e-un-test"
     */

    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
    })


    /* 
        🏆 Snack 6
        Creare un test che verifichi la seguente descrizione:
        👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
    */

    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("Stringa non valida!");
        expect(() => createSlug(null)).toThrow("Stringa non valida!");
    });
});



