//Coding Challenge - Design set of classes and interfaces for generic card game
//Please Note: Game is incomplete as no concrete implementations were required. 

//Create input to figure out current card
var game;
var Card = function(suit, number) {
	var card_suit = suit,
			card_number = number;

	this.getCardSuit = function() {
		return card_suit;
	};

	this.getCardNum = function() {
		return card_number;
	};

	//returns suit of card
	this.getSuit = function() {
		switch (card_suit) {
			case 1: return "clubs";
			case 2: return "diamonds";
			case 3: return "hearts";
			case 4: return "spades";
			default: return "ERROR: invalid suit: " + card_suit;
		}
	};

	//returns value of suited cards
	this.getValue = function() {
		switch (card_number) {
			case 1: return "Ace";
			case 11: return "Jack";
			case 12: return "Queen";
			case 13: return "King";
			default: return card_number;
		}
	};

	//determines actual card value
	this.cardValue = function() {
		//need to add option to choose 1 or 11
		//for now, will assume higher number is desired
		if (card_number === 1) {
			return 11;
		} else if (card_number >= 10) {
			return 10;
		} else {
			return card_number;
		}
	};

};

//create deck of 52 cards
var deck = function() {
	var gameDeck = [];
	for (var i = 1; i <= 52; i++) {
		gameDeck.push(i);
	}

	//shuffle the deck
	this.shuffleDeck = function() {
		//need to make sure it is random and not repeated
		var j, k, temp;

		for (var i = gameDeck.length; i > 0; i--) {
			k = Math.floor(Math.random()*i);
			temp = gameDeck[j];
			gameDeck[j] = gameDeck[k];
			gameDeck[k] = temp;
		}
	};

	//call card function to create new card
	this.newCard = function() {
		var card_num = gameDeck.pop(),
				value = card_num % 13 + 1,
				//chooses from 1-4 suits and is determined in getSuit function
				suit = Math.ceil(card_num / 13);
		return new Card(suit, value);
	};
};

//deal game 
function dealCards() {
	return game.newCard();
}

//hand for both user and dealer
var userHand = function() {
	var userCards = [];
	//player starts with two cards
	userCards.push(dealCards());
	userCards.push(dealCards());

	this.getHand = function () {
		return userCards;
	};

	//calculate the total of user's hand
	this.userScore = function() {
		//iterate through the user's hand
		//check if there are any aces
		//determine if 1 or 11
		//calculate score
		//return sum
	};

	//if value < 21 and user wants another card
	this.hitMe = function() {
		userCards.push(dealCards());
	};

	//if value > 21
	this.bust = function() {
		return (this.userScore() > 21);
	};

};

function dealer() { 
	var dealersCards = new userHand();
	//Assuming the casino believes 17 is a good stopping point
	while (dealersCards.userScore() < 17) {
		dealersCards.hitMe();
	}
}

function player() {
	var playersCards = new userHand();
	//figure out whether to hit or continue
	var playerContinue = true;
	while (playerContinue && !playersCards.bust()) {
		//ask player if they would like to continue
		//if so, call hitMe function
		if (playerContinue) {
			playersCards.hitMe();
		}
		return playersCards;
	}
}

//declare Winner functon 
function getWinner() {
	//create messages depending on the result
	var result = {
			"win": "You win!",
			"lose": "You lose!",
			"tie": "Tie!"
		},
		dealerTotal = dealersCards.userScore(),
		playerTotal = playersCards.usrScore();

	//if playerTotal is over 21, determine if dealer wins
	if (playerTotal > 21) {
		if (dealerTotal > 21) {
			return result.tie;
		}
		else {
			return result.lose;
		}
	} else if (dealerTotal > 21) {
		return result.win;
	} else if (dealerTotal > playerTotal) {
		return result.lose;
	} else if (dealerTotal < playerTotal) {
		return result.win;
	} else {
		return result.tie;
	}

}

function startGame() {
	game = new deck(); 
	deck.shuffleDeck();

	//grab cards for both player and dealer
	var userPlayer = player(),
			userDealer = dealer(),
			gameWinner;
	//add function to check if dealer or player busted
	//add function to calculate scores
	alert('winner is ' + gameWinner);
}

startGame();

