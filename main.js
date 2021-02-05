
const image = document.querySelector('img');
const imageCheck = setInterval(function () {
  if(image.complete);
  clearInterval(imageCheck)
  start()
}, 100);


function start() {
/////////////////LOGIC////OUTLINE///////////////////
//1. Build cards into a deck with constructors
//1a. Set a suit, symbol, value and index number to each (index 0-51)
//2. Build Players with constructors
//3. Shuffle deack
////3a. split shuffled deck into 2 players.
//4. Deal just one card, that will be different each time
////4a. let this value be comparable.
//5. Compare card values and let a function give the correct player the winning cards
////5a. Make a way to store winning cards.
//6. Make a function itself of within the play function to do War
////6a. Access the cards that have been played, the players hand and take 3 cards and 1 more to the compare.
////6b. compare the winning war cards and set the function play to run again.
//7. Make a while loop to keep the game running until a player is no longer able to play.
//8. Let the players know the game is over and to refresh.
////////////////QUESTIONS FOR MADY////////////////////////
//how to make cards a function instead of typing them all out
//////use a nested for loop
//how would I make the game function into protypes?
//homebrew
//logging into guthub repeating
/////////SETTING PLAYERS OBJECTS UP////////////////////
// document.querySelector('.winner').style.background =
function Player({name = "Computer", hand}){
  this.name = name,
  this.hand = hand;
};
///Player constructor
let player1 = new Player({
});
let player2 = new Player({
});

///////////////////////////////////////////////////////
// player1.name = document.getElementById('p1Name').value;
// player2.name = document.getElementById('p2Name').value;
/////////////SETTING PLAYERS NAMES/////////////////////
function name(player, prompt) {
  if (prompt ===  "") {
    player.name = 'Computer';
  } else if (prompt === null) {
    alert("No name was enter, Computer will play.")
  }
  else {
    player.name = prompt;
  }
};
/////////////OPEN PROMTS///////////////////////////////
const p1Name = prompt('Player 1, enter your name.')
name(player1, p1Name);
// player1.name = p1Name;
// player1.name = "Computer";
const p2Name = prompt('Okay, now Player 2!')
name(player2, p2Name);
// player2.name = p2Name;
// player2.name = "Sarah";
alert('✸ YOU HAVE ENTERED THE GAME OF WAR! ✸');
console.log('%cLet the game begin', 'color:red');
///////////////////////////////////////////////////////
//////////SHUFFLING A DECK////////////////////////////
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Game.prototype.shuffle = function() {
//   let deck = this.deck.cards, i = deck.length, j, temp;
//   while(--i) {
//     j = Math.floor(Math.random() * (i + 1));
//     temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
//   }
//   this.deck.cards = deck;
// }



function shuffle(deck) {
  let sDeck = [];
  for(let i = 0; i < deck.length; i++){
    // the for loop runs a specific number of times
    let r = getRandomArbitrary(0, 52);
    // what if you get the same random number more than once
    if(!sDeck.includes(deck[r])){
      sDeck.push(deck[r]);
    }
  }
  return sDeck;
};

let shuffledDeck = shuffle(cardArray);
///////////SETTING PLAYERS HANDS/////////////////////
player1.hand = shuffledDeck.splice(0, 26);
player2.hand = shuffledDeck;
////////////////////////////////////////////////////
///////////////CARDS WON ARRAY/////////////////////
let cardsWon = [];
///////////////////////////////////////////////////
////CARDS THAT WILL ACTUALLY BE PLAYED//////////////
function dealCard(player) {
  return player.hand.pop();
};
 //pulling playing cards for each player from the BOTTOM of their deck
///////////////////////////////////////////////////
///////////// GAME PLAY////////////////////////////
function gamePlay() {
  let p1PlayCard = dealCard(player1);
  let p2PlayCard = dealCard(player2);//giving the card to each player.
  cardsWon.push(p1PlayCard, p2PlayCard);//setting up the pot of card to be won.
  console.log(`${player1.name} drew ${p1PlayCard.symbol} of ${p1PlayCard.suit}. ${player2.name} drew ${p2PlayCard.symbol} of ${p2PlayCard.suit}.`);//telling the players what card they drew.
  // ///helpful info for debugging vvvvv
  //console.log(player1.hand.length, player2.hand.length);
  //console.log(player1.hand.length + player2.hand.length); //should equal 50, does not include the 2 cards being played
   if (p1PlayCard.value > p2PlayCard.value) {// if player1 wins;
    player1.hand.unshift(...cardsWon);//the actual action...adding the winning cards to the TOP of the player1 deck
      definingHands(player1);//Tell player they won and what cards each players has now
    cardsWon = [];
  }
  else if (p2PlayCard.value > p1PlayCard.value){ // player2 wins
  player2.hand.unshift(...cardsWon);//the actual action...adding the winning cards to the TOP of the player2 deck
  definingHands(player2);
  cardsWon = [];
  }
  else if (p1PlayCard.value === p2PlayCard.value){
    console.log(" %c!!!!!!!✸!IT'S WAR TIME!✸!!!!!!!!!", 'color:red;');
    if (player1.hand.length < 5) {
      return player1.hand.length === 0;
    }
    else if (player2.hand.length < 5) {
      return player2.hand.length === 0;
    } else {
        doWar();
    }
  }
};
/////////////DO WAR function////////////////////////////
function doWar() {
  // console.log(player1.hand.length, player2.hand.length);
    alert('WAR HAS BEGUN! Press enter to continue!');
      cardsWon.push(...player1.hand.splice(-4), ...player2.hand.splice(-4)); //pushing the 3 cards for war plus the orginal card that started war. Then when I set the function below to run again it will pop another card off the players deck.
      console.log(`${player1.name} and ${player2.name} have each laid 3 cards down. Now to flip the war cards...` );
      gamePlay();
};
/////What to console.log after each play////////////
///////////////////////////////////////////////////
function definingHands(player) {
  console.log(`${player.name} wins!`)
  console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`)
};
///////////////////////////////////////////////////
////////////////////WHILE LOOP////////////////////
//setting thie function to fire
// let stop4EverLoop = 4000;
while (!(player1.hand.length === 0) && !(player2.hand.length === 0)) {
  gamePlay();
};
//keeping the game playing til one of the user's don't have enough cards to play war anymore.
///////////////////////////////////////////////
/////////////END GAME DISPLAY//////////////////
function endGameDisplay() {
  if (player1.hand.length === 0) {
    //append this
    document.querySelector(".winner").innerText = `${player2.name} has WON!`;
    console.log(`${player1.name} has lost. ${player2.name} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  } else if (player2.hand.length === 0) {
    document.querySelector(".winner").innerText = `${player1.name} has WON!`;
    console.log("%c GAME OVER", "color:red");
    console.log(`${player2.name} has lost. ${player1.name} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  }
};
endGameDisplay();
//////////////////////////////////////////
};
