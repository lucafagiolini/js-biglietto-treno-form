// BIGLIETTO TRENO

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let kmAmmount = prompt('inserisci qui i KM da percorrere')
console.log(kmAmmount + " kmAmmount")

// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
let age = prompt('inserisci qui la tua età')
console.log(age + " age")

// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = kmAmmount * 0.21
console.log(price + " price")

// // va applicato uno sconto del 20% per i minorenni
let discount20 = price - (price * 0.2)
console.log(discount20 + " discount20")

// // va applicato uno sconto del 40% per gli over 65.
let discount40 = price - (price * 0.4)
console.log(discount40 + " discount40")

// // SE è minorenne, va applicato uno sconto del 20%.
if (age < 18) {
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + discount20.toFixed(2) + '€'
    console.log(discount20 + " discount20")
}

// SE è over 65, va applicato uno sconto del 40%.
else if (age > 65) {
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + discount40.toFixed(2) + '€'
    console.log(discount40)
}

else {
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + price.toFixed(2) + '€'
    console.log(price + " price")
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.