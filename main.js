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

let dealerHand = deal()
let playerHand = deal()

startGame.addEventListener("click", function () {
    houseCards.innerHTML = dealerHand[0].value + dealerHand[0].suit
    for (let i = 0; i < playerHand.length; i++) 
    pHand.children[i].innerHTML = playerHand[i].value + playerHand[i].suit
    console.log(playerHand)
    calculateScore(playerHand)
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
    } 


const hitButton = document.querySelector("#hit")
hitButton.addEventListener("click", hit)


//**THIS IS MY STAY FUNCTION**//

function stay () {
    if ( x >= 0 ) {
        houseCards.append(deck.cards[x].value + deck.cards[x].suit)
        x +=1
    } else if (x == 52) {
        x = 0
    }
}

const stayButton = document.querySelector("#stay")
stayButton.addEventListener("click", stay)


//**THIS IS MY SCORE FUNCTION**//

let tempScore = 0
function calculateScore (banana) {
    let sum = 0 
    for (let i = 0; i < banana.length; i++) {
        sum += banana[i].points
        //console.log(tempScore)
    }
    tempScore = sum
    score.innerHTML = tempScore
    console.log(tempScore)

}

const score = document.querySelector(".score")


function winnerCheck (playerTotal, dealerTotal) {
    if (playerTotal > 21) {
        return "Bust!"
    } if (dealerTotal === 21) {
        return "The Dealer got BlackJack"
    } if (dealerTotal > 21) {
        return "The Deal busted, Player One wins!"
    } if (playerTotal === 21) {
        return "BlackJack! Player One wins!"
    } if (playerTotal === 21 && dealerTotal === 21){
        return "push"
    } console.log(winnerCheck)
} 