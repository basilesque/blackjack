//this is an array     
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//this is an object
let player = {
    name: "Per",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
        //if (confirm ("Want to play again?")) {
        //    location.reload()
        //}           
        // this is commented out because it doesnt update the game score before showing the alert, so the user doesnt see that theyve lost on the score          
    }

    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum

    // this is gonna count from 0 until the number of elements on the cards array one by one, because "++" means increase it by one each time
    // for (starting place; stopping place; step count) {} basic structure
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
}

function getRandomCard() {
    // return function returns the value you get to the variable/let
    // math floor basically rounds the number down and math random gives a random number between 0 and 1, if you mutiply it by 10 and floor it, it gives you numbers between 0 and 9, so you and 1 to all of them so that they become 1 to 10
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber > 10) {
        return randomNumber = 10
    } else if (randomNumber === 1) {
        return randomNumber = 11
    } else {
        return randomNumber
    }
}

function newCard() {
    //works only when the user hasnt won and can draw cards
    // "===" means "strictly equal", "&&"" means "and"
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        // push() adds a new irem to the array, to the bottom to be specific, and pop() would remove the last item
        // shift() would add to the start of the array while unshift() would remove the first item                    
        cards.push(card)
        renderGame()
    }
}       