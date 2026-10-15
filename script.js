/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(3, 4));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}
console.log(crazySum(2, 3));
console.log(crazySum(4, 4));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function distanceFrom19(n) {
  if (n > 19) {
    return Math.abs(n - 19) * 3;
  }
  return Math.abs(n - 19);
}

console.log(distanceFrom19(5));
console.log(distanceFrom19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function intoInterval(n) {
  let intoInterval;
  if ((n > 20 && n < 100) || (n === 20 && n === 100)) {
    return (intoInterval = true);
  } else if (n === 400) {
    return (intoInterval = true);
  } else {
    return (intoInterval = false);
  }
}

console.log(intoInterval(20));
console.log(intoInterval(101));
console.log(intoInterval(400));

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(text = "") {
  if (text.startsWith("EPICODE")) {
    return text;
  } else {
    return "EPICODE" + "" + text; //da controllare perché non prende lo spazio //
  }
}

console.log(epify("EPICODE"));
console.log(epify("Federico"));

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function divisibile(n) {
  if ((n % 2 === 0 && n % 3 === 0) || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisibile(42));
console.log(divisibile(15));

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function invertistringa(testo = " ") {
  let reverseText = "";
  let splittedText = testo.split("");
  for (let i = splittedText.length - 1; i >= 0; i--) {
    reverseText += splittedText[i];
  }
  return reverseText;
}

console.log(invertistringa("federico"));
/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function inizialiMaiuscole(frase =' '){
   let textsplitted = frase.split(' ')
   let capitalLetters =''
   let restodellaParola =''
   
   for(let i =0; i < textsplitted.length;i++){
      capitalLetters = textsplitted[i].slice(0,1).toUpperCase()
      restodellaParola =textsplitted[i].slice(1)
      textsplitted[i] = capitalLetters + restodellaParola
   }
   return textsplitted.join('')
}


console.log(inizialiMaiuscole("federico è qui"));
/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function removeItems(text = "") {
  let textCompleted = text.slice(1, -1);

  return textCompleted;
}

console.log(removeItems("Epicode"));

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function casualNumbers(n) {
  let arrayNumb = [];
  for (let i = 0; i < n; i++) {
    let casualNumb = Math.floor(Math.random() * 11);
    arrayNumb.push(casualNumb);
  }
  return arrayNumb;
}

console.log(casualNumbers(10));
console.log(casualNumbers(10).length);

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
