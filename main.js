
/////////SETTING PLAYERS OBJECTS UP/////
function Player({name = "Computer", hand}){
  this.name = name,
  this.hand = hand;
};
///Player constructor
let player1 = new Player({
});

let player2 = new Player({
});
/////////////////////////////////////
/////////OPEN PROMTS/////////////////
// const p1Name = prompt('Player 1, enter your name.')
// player1.name = p1Name;
player1.name = "Computer";
// const p2Name = prompt('Okay, now Player 2!')
// player2.name = p2Name;
player2.name = "Sarah";
alert('✸ YOU HAVE ENTERED THE GAME OF WAR! ✸');
console.log('War time Begins');
// console.log('Press Q to quit at anytime');
////////////////////////////////////////
//////////SHUFFLING A DECK///////////////
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(deck) {
  let sDeck = [];
    for( i = 1; i <= 52;){
    let r = getRandomArbitrary(0, 52);
    if (!sDeck.includes(deck[r])){
      sDeck.push(deck[r]);
      i++;
    }
  } return sDeck;
};

let shuffledDeck = shuffle(cardArray);

///////////SETTING PLAYERS HANDS//////////////
let p1hand = shuffledDeck.splice(0, 26);
let p2hand = shuffledDeck;

player1.hand = p1hand;
player2.hand = p2hand;
/////////////PLAYERS HAVE DIFF CARDS ABOVE///////////
///////////////CARDS WON ARRAY/////////
let cardsWon = [];
////////////////////////////////////////////
///////////// PLAYING PLAYERS HAND////////////////

function dealCard(player) {
  return player.hand.pop();
}; //pulling playing cards for each player from the BOTTOM of their deck

function playGameDisplay() {
  let p1PlayCard = dealCard(player1);
  let p2PlayCard = dealCard(player2);
  cardsWon.push(p1PlayCard, p2PlayCard);
  //giving the card to each player
  console.log(`${player1.name} drew ${p1PlayCard.symbol} of ${p1PlayCard.suit}. ${player2.name} drew ${p2PlayCard.symbol} of ${p2PlayCard.suit}.`);//telling the players what card they drew.
  ///helpful info for debugging vvvvv
    console.log(player1.hand.length, player2.hand.length);
  console.log(player1.hand.length + player2.hand.length); //should equal 50, does not include the 2 cards being played

   if (p1PlayCard.value > p2PlayCard.value) {
    // if player1 wins;
    player1.hand.unshift(...cardsWon);//the actual action...adding the winning cards to the TOP of the player1 deck
    console.log(`${player1.name} wins!`);
    console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`); //Tell player they won and what cards each players has now
    cardsWon = [];
  }
  else if (p2PlayCard.value > p1PlayCard.value){
  // player2 wins
  player2.hand.unshift(...cardsWon);//the actual action...adding the winning cards to the TOP of the player2 deck
  console.log(`${player2.name} wins!`);
  console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
  cardsWon = [];
  }
  else if (p1PlayCard.value === p2PlayCard.value){
    console.log(" %c!!!!!!!✸!IT'S WAR TIME!✸!!!!!!!!!", 'color:red;');
    doWar();

  }
};

console.log(playGameDisplay());
function doWar() {

    cardsWon.push(...player1.hand.splice(-3), ...player2.hand.splice(-3));
    console.log(`The players each lay three cards on the table, then play a fourth...`);
    playGameDisplay();
};

// function doWar() {
//   {
//     let spliceP1 = player1.hand.splice(-4); // array of 4 cards
//     let spliceP2 = player2.hand.splice(-4); // array of 4 cards
//     let p1WarCard = spliceP1.pop(); // pop 1 card off splice 4 cards (splicep1 is now 3 cards)
//     let p2WarCard = spliceP2.pop(); // pop 1 card off splice 4 cards (splicep2 is now 3 cards)
//     // playerScore1.push(playerCard1);
//     // playerScore2.push(playerCard2);
//   // alert('It\'s WAR!'); //turn on to stop at every war
//  ///helpful info for debugging vvvvv
// console.log(player1.hand.length, player2.hand.length);
// console.log(player1.hand.length + player2.hand.length);
// ///////////////////////////////////////////
//
//     if (p1WarCard.value > p2WarCard.value) {}
//       //player 1 war car is GREATER than player 2 war card.
//       //plyer1 wins
//       console.log(`${player1.name} drew ${p1WarCard.symbol} of ${p1WarCard.suit}. ${player2.name} drew ${p2WarCard.symbol} of ${p2WarCard.suit}.`);
//       //////whats really happening in this//////////////
//       let player1wins = [p1PlayCard, p2PlayCard, p1WarCard, p2WarCard]; //had a diffcult time with the ... and the signle arrays working together.
//       let splices = [...player1wins, ...spliceP1, ...spliceP2, ...player1.hand];
//       //they seem to work this way, to return 5 new cards to player1 and player1 orginal 5
//       player1.hand = splices;
//
//       ////////////////////////////////////////////
//       // console.log(splices);
//       // console.log(player1.hand);
//       console.log(`${player1.name} wins!`);
//       console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
//       ////////////
//     console.log(player1.hand.length, player2.hand.length);
//     console.log(player1.hand.length + player2.hand.length);;
//    ///////////
//     } else if (p1WarCard.value < p2WarCard.value) {
//       //player 1 war car is LESS than player 2 war card.
//       //player 2 wins
//       console.log(`${player1.name} drew ${p1WarCard.symbol} of ${p1WarCard.suit}. ${player2.name} drew ${p2WarCard.symbol} of ${p2WarCard.suit}.`);
//       ////////////////////////////////////////////
//       let player2wins = [p1PlayCard, p2PlayCard, p1WarCard, p2WarCard];
//       let splices = [...player2wins, ...spliceP1, ...spliceP2, ...player2.hand];
//       player2.hand = splices;
//       // to return 5 new cards to player2 and player2 orginal 5
//       ////////////////////////////////////////////
//       // console.log(splices);
//       // console.log(player2.hand);
//       console.log(`${player2.name} wins!`);
//       console.log(`${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
//       ///////////////
//       console.log(player1.hand.length, player2.hand.length);
//     console.log(player1.hand.length + player2.hand.length);
//     /////////////////
//     }
//   }//this ends the war.
// };
////////////////////WHILE LOOP////
//setting thie function to fire
while (!(player1.hand.length < 5) && !(player2.hand.length < 5)) {
  playGameDisplay();
};
// let u = 200;
// while (--u) {
//   playGameDisplay();
// }
//keeping the game playing til one of the user's don't have enough cards to play war anymore.
///////////////////////////////////////////////
/////////////END GAME DISPLAY//////////////////
function endGameDisplay() {
  if (player1.hand.length < 5) {
    console.log("%c GAME OVER", "color:red");
    console.log(`${player1.name} has lost. ${player2.name} has won!`);
    return console.log("%c To play again refresh page" , "color:green");

  } else if (player2.hand.length < 5) {
    console.log("%c GAME OVER", "color:red");
    console.log(`${player2.name} has lost. ${player1.name} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  }
};
endGameDisplay();
//////////////////////////////////////////
