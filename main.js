console.log("BlackJack")

//**DECK**//

const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]


class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i --) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

//**THIS IS GIVING MY CARDS VALUE**//

class Card {
    constructor(suit, value, points) {
        this.suit = suit
        this.value = value
        this.points = points
    }
}


function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            if (value === "J" || value === "Q" || value === "K" || value === "10") {
                return new Card (suit, value, 10)
            } else if (value === "A" || value === "1") {
                return new Card (suit, value, 1)
            } else if (value === "2") {
                return new Card (suit, value, 2)
            } else if (value ==="3") {
                return new Card (suit, value, 3)
            } else if (value === "4") {
                return new Card (suit, value, 4)
            } else if (value === "5") {
                return new Card (suit, value, 5)
            } else if (value === "6") {
                return new Card (suit, value, 6)
            } else if (value === "7") {
                return new Card (suit, value, 7)
            } else if (value === "8") {
                return new Card (suit, value, 8) 
            } else if (value === "9") {
                return new Card (suit, value, 9)
            } 
            return new Card (suit, value)
        })
    })
}


const deck = new Deck ()
deck.shuffle()
console.log(deck.cards)


//**THIS IS MY DEAL FUNCTION**//

 
function deal() {
    let hand = []
    while(hand.length < 2) {
        let cards = deck.cards.pop()
        hand.push(cards)
    }
    return hand
}

const startGame = document.querySelector("#deal")
console.log(startGame)

const houseCards = document.querySelector(".houseHand")
const playerCards = document.querySelector(".playersHand")
const pHand = document.querySelector(".pHand")
const dHand = document.querySelector(".dHand")

let dealerHand = deal()
let playerHand = deal()

startGame.addEventListener("click", function () {
    for (let j = 0; j < dealerHand.length; j++)
    dHand.children[j].innerHTML = dealerHand[j].value + dealerHand[j].suit

    for (let i = 0; i < playerHand.length; i++) 
    pHand.children[i].innerHTML = playerHand[i].value + playerHand[i].suit

    console.log(playerHand)
    calculateScore(playerHand)
    console.log(dealerHand)
    houseScore(dealerHand)
})


//**THIS IS MY HIT FUNCTION**//

let x = 0 
function hit () {
        if ( x >= 0) {
            playerCards.append(deck.cards[x].value + deck.cards[x].suit)
            playerHand.push(deck.cards[x])
            x += 1
        } else if (x == 52) {
            x = 0
        }
        console.log(playerHand)
        calculateScore(playerHand)
        winnerCheck()
    } 


const hitButton = document.querySelector("#hit")
hitButton.addEventListener("click", hit)


//**THIS IS MY STAY FUNCTION**//

function stay () {
    if ( x >= 0 ) {
        houseCards.append(deck.cards[x].value + deck.cards[x].suit)
        dealerHand.push(deck.cards[x])
        x +=1
    } else if (x == 52) {
        x = 0
    }
    console.log(dealerHand)
    houseScore(dealerHand)
    winnerCheck()
}

const stayButton = document.querySelector("#stay")
stayButton.addEventListener("click", stay)


//**THIS IS MY SCORE FUNCTION**//

let playerScore = 0
function calculateScore (banana) {
    let sum = 0 
    for (let i = 0; i < banana.length; i++) {
        sum += banana[i].points
    }
    playerScore = sum
    score.innerHTML = playerScore
    console.log(playerScore)
}

const score = document.querySelector(".score")



// **THIS IS THE DEALER SCORE FUNCTION**//

let dealerScore = 0
function houseScore (apple) {
    let sum = 0
    for (let j = 0; j < apple.length; j++) {
        sum += apple[j].points
    }
    dealerScore = sum
    console.log(dealerScore)
}


// //**THIS IS MY WIN CONDITION FUNCTION**//
const winner = document.querySelector(".winner")
function winnerCheck () {
    let pScore = playerScore
    let dScore = dealerScore
    console.log(pScore)
    console.log(dScore)
     if (pScore > 21) {
        console.log ("Bust!")
         winner.innerText = "Bust!"
    } else if (dScore === 21) {
        console.log ("The Dealer got BlackJack")
        winner.innerText = "The Dealer got BlackJack!"
    } else if (dScore > 21) {
        console.log ("The Dealer busted, Player One wins!")
        winner.innerText = "The Dealer busted, Player One wins!"
    } else if (pScore === 21) {
        console.log ("BlackJack! Player One wins!")
        winner.innerText = "BlackJack! Player One wins!"
    } else if (pScore === 21 && dScore === 21) {
        console.log ("push")
        winner.innerText = "push"
    } else if (pScore > dScore && pScore <= 21) {
        console.log ("Player One wins!")
        winner.innerText = "Player One wins!"
    } else if (dScore > pScore && dScore <= 21) {
        console.log ("Dealer wins!")
        winner.innerText = "Dealer wins!"
    } 
}  
    winnerCheck()
   
















//psuedocode//
//things i will need
// dealer or house (computer/ AI?? or just another player?? - depends on time and difficulty)
    
// deck of 52 cards
//     SPADES
//     HEARTS
//     CLUBS
//     DIAMONDS    
//     2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

//     set face cards to = 10
//     Ace = 11 

// "shuffle" function
// "hit" function necessary if player wants another card
// "stay" function necessary if player is happy with their cards
// "push" (tie) (restart game??)
// "deal" function
// player wins
// dealer/house wins

// ***if time allows and is able - split cards ex: two Aces are drawn***

// goal is to reach 21- BLACKJACK!

// ________________________________________________________
// outline of game

// create deck of 52 cards

// create the deal button
//     two cards are dealt at random to player 1
//     create function that adds the two cards sum total

// add function that automatically draws two cards for the house
//     create function that adds the two cards sum total

// create hit button 
//     adds another card to player 1
//     run function sum total

// create stay button to signal no more cards for player 1 and to add a card to house
//     run function sum total

// add function player >= 21 player 1 wins
// add function house >= 21 dealer wins
// **highest/closest to 21 wins

// add function "push" in the event of a tie. 

// create shuffle button that restarts the game.



// ![PROJECT-1-BLACKJACK-WIREFRAME](https://user-images.githubusercontent.com/95602124/147981272-2b5b7f87-62a9-4e31-8703-9b73147949ce.png)

