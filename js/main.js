var cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];
var score = 0;

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			score++;
			document.getElementById("score").innerHTML = score;
		} else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	//console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();

}

var createBoard = function() {
	for(i=0; i<cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var resetGame = function() {
	cardsInPlay = [];
	var gameCard = document.getElementsByTagName("img");
	for(i=0; i<gameCard.length; i++){
		gameCard[i].setAttribute("src", "images/back.png");
	}
}

document.getElementById("reset").addEventListener("click", resetGame);

createBoard();
