console.log("BlackJack")

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

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        } )
    })
}

const deck = new Deck ()
deck.shuffle()
console.log(deck.cards)


function deal() {
    let hand = []
    while(hand.length < 2) {
        let cards = deck.cards.pop()
        hand.push(cards)
    }
    return hand
}
let dealHand = deal()
console.log(dealHand[0].suit + dealHand[0].value)


const startGame = document.querySelector("#deal")
console.log(startGame)

const houseHand = document.querySelector(".houseHand")
const playerHand = document.querySelector(".playersHand")

startGame.addEventListener("click", function () {
    houseHand.innerHTML = dealHand[0].suit + dealHand[0].value
    playerHand.innerHTML = dealHand[1].suit + dealHand[1].value
} )



//dealerHand


//playerHand


//deal function needs to reveal the card and its value and place it in the div of the player / house


