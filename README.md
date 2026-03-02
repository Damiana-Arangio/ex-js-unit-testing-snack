<p align="center">
  <img src="public/boolean-logo.png" alt="Boolean logo" width="35">
</p>

<h1 align="center">EX – Snack Unit Testing (Jest)</h1>

Snack sviluppato in **JavaScript + Jest** per esercitarsi con il **Unit Testing**.

L’obiettivo è consolidare i concetti fondamentali di testing come:

- Scrittura di test con `test()`
- Uso di `expect()` e matcher (`toBe`, `toEqual`, `toThrow`)
- Test di casi positivi e negativi
- Gestione degli errori
- Validazione dei parametri
- Organizzazione dei test con `describe()`
- Approccio TDD (Red → Green → Refactor)

---

## SNACK IMPLEMENTATI

### 🏆 Snack 1 – getInitials()
Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo."

---

### 🏆 Snack 2 – createSlug()
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase."

---

### 🏆 Snack 3 – average()
Creare un test che verifichi la seguente descrizione:
👉 "La funzione average calcola la media aritmetica di un array di numeri."

---

### 🏆 Snack 4 – createSlug()
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug sostituisce gli spazi con -."

📌 Esempi:
createSlug("Questo è un test") → "questo-è-un-test"

---

### 🏆 Snack 5 – isPalindrome()
Creare un test che verifichi la seguente descrizione:
👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

---

### 🏆 Snack 6 – Validazione Errori
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

---

### 🏆 Snack 7 – findPostById()
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug. Creare un test che verifichi le seguenti descrizioni:
👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

---

### 🏆 Challenge: describe() - Organizzazione dei Test
Organizza i test in describe() raggruppandoli per argomento.

---

## 🛠 Tecnologie Utilizzate
- JavaScript
- Node.js
- Jest
