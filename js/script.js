// BIGLIETTO TRENO

// il programma dovrà raccogliere nome cognome dell'utente e km da percorrere
const nameElement = document.querySelector("#name")
console.log(nameElement)

const surnameElement = document.querySelector("#surname")
console.log(surnameElement)

const kmNumberElement = document.getElementById("km-number")
console.log(kmNumberElement)

const userAgeElement = document.querySelector("#user-age")
console.log(userAgeElement)


const buttonElement = document.querySelector("#calc-button")
console.log(buttonElement)

const printPriceElement = document.querySelector("#print-price")
console.log(printPriceElement)

const printNameElement = document.querySelector("#print-name")
console.log(printNameElement)

const printPromo = document.querySelector("#print-promo")
console.log(printPromo)

let basePrice

let FinalPrice

let Name

let Surname


buttonElement.addEventListener("click",
    function () {
        Name = nameElement.value
        console.log(Name)

        Surname = surnameElement.value
        console.log(Surname)

        basePrice = kmNumberElement.value * 0.21


        if (userAgeElement.value < 18) {
            FinalPrice = basePrice - (basePrice * 0.2)
            console.log(FinalPrice)
            printPromo.innerHTML = "Under 18 Promo"
        }

        else if (userAgeElement.value >= 65) {
            FinalPrice = basePrice - (basePrice * 0.4)
            console.log(FinalPrice)
            printPromo.innerHTML = "Over 65 Promo"
        }

        else {
            FinalPrice = basePrice
            console.log(FinalPrice)
            printPromo.innerHTML = "Standard"
        }

        FinalPrice = FinalPrice.toFixed(2)

        printPriceElement.innerHTML = "Your ticket price is: " + FinalPrice + " €"
        console.log(printPriceElement)

        printNameElement.innerHTML = Name + " " + Surname
        console.log(printNameElement)


    }
)




// Il programma dovrà selezionare la categoria del passeggero (minorenne, maggiorenne, over65)
// GenerateElement.addEventListener('click',
//     function () {
//         document.getElementById('#generate').innerHTML = 'Categoria: ' + UnderAge.value

//     }
// )


// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// let age = prompt('inserisci qui la tua età')
// console.log(age + " age")

// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// let price = inputKmElement * 0.21
// console.log(price + " price")

// // va applicato uno sconto del 20% per i minorenni
// let discount20 = price - (price * 0.2)
// console.log(discount20 + " discount20")

// // va applicato uno sconto del 40% per gli over 65.
// let discount40 = price - (price * 0.4)
// console.log(discount40 + " discount40")

// // SE è minorenne, va applicato uno sconto del 20%.
// if (age < 18) {
//     document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + discount20.toFixed(2) + '€'
//     console.log(discount20 + " discount20")
// }

// SE è over 65, va applicato uno sconto del 40%.
// else if (age > 65) {
//     document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + discount40.toFixed(2) + '€'
//     console.log(discount40)
// }

// else {
//     document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è di: ' + price.toFixed(2) + '€'
//     console.log(price + " price")
// }

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.