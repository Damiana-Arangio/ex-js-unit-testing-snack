/************
    IMPORT
*************/
const { getInitials, createSlug, average } = require("./snack.js");


/************
    SNACKS
*************/
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
    🏆 Snack 2
    Creare un test che verifichi la seguente descrizione:
    👉 "La funzione createSlug restituisce una stringa in lowercase."
 */

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Fare Colazione")).toBe("fare colazione");
})

/* 
    🏆 Snack 3
    Creare un test che verifichi la seguente descrizione:
    👉 "La funzione average calcola la media aritmetica di un array di numeri."
 */

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 1, 3])).toBe(3);
    expect(average([10, 20])).toBe(15);
    expect(average([2])).toBe(2);
    expect(average([5, "ciao"])).toThrow();
})



