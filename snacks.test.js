/************
    IMPORT
*************/
const { getInitials } = require("./snack.js");
const { createSlug } = require("./snack.js");

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
    getInitials("Damiana   Arangio")
    getInitials("   Damiana   Arangio   ")
})



