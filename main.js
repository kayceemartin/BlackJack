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
            } else if (value === "A" || value === "1"){
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
        } )
    })
}

const deck = new Deck ()
deck.shuffle()
console.log(deck.cards)

 let hand = []

function deal() {
    while(hand.length < 2) {
        let cards = deck.cards.pop()
        hand.push(cards)
    }
    return hand
}
let dealHand = deal()
console.log(dealHand[0].value + dealHand[0].suit)


const startGame = document.querySelector("#deal")
console.log(startGame)

const houseHand = document.querySelector(".houseHand")
const playerHand = document.querySelector(".playersHand")

startGame.addEventListener("click", function () {
    houseHand.innerHTML = dealHand[0].value + dealHand[0].suit
    playerHand.innerHTML = dealHand[1].value + dealHand[1].suit
} )

  let x = 0 
function hit () {
        if ( x >= 0) {
            playerHand.append(deck.cards[x].value + deck.cards[x].suit)
            x += 1
        }
        else if (x == 52) {
            x = 0
        }
    }

const hitButton = document.querySelector("#hit")
hitButton.addEventListener("click", hit)


function stay () {
    if ( x >= 0 ) {
        houseHand.append(deck.cards[x].value + deck.cards[x].suit)
        x +=1
    }
    else if (x == 52) {
        x = 0
    }
}

const stayButton = document.querySelector("#stay")
stayButton.addEventListener("click", stay)


//function score () {
    // this keeps score "Bust >= 22", "Push??" "BlackJack = 21"


