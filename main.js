// Enter player one name: Sarah
// Enter player two name: Mady
// Let's War!
// Press q to quit. Press any key to play:
// Sarah drew 8 of clubs. Mady drew Queen of clubs



////////////////////////////////////////////////
//promt user 1 to say their name
//then promt user 2
//store their names in a object
//promt LET'S WAR
//Press q to quit. Press any key to play:
//*****of if you quit alret (you quit!)
//promt this after every move

//
//make an object for the deck of cards
//store number of cards
//

//create objects

//WAR TIME flip 3 at once by the last one to flip
//will be winner of the

//Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King
//if order is important

//have a function called deal
//function / constructor called war
//function quit
//
//constructor called deck
//constructor user 1 and 2
//trying to make the card set a random suit to it
// var suit = ["Clubs", "Spades", "Hearts", "Diamonds"];
// var randomSuit = suit[Math.floor(Math.random()*suit.length)];
// console.log(randomSuit);
// Card.prototype.symbol = function(symbol) {
//   symbol.suit = randomSuit;
// };


//////////////TESTING IF RANDOM WOULD WORK ON ARRAY OF OBJECTS////
//// let oneOfClubs = new Card({
////   value: 1,
////   suit: "HHH",
////   symbol: "1",
//// });
////
//// let twoOfClubs = new Card({
////   suit: 'Club',
////   symbol: 1,
////   value: 2,
//// });
//// let threeOfClubs = new Card({
////   suit: 'Hearts',
////   symbol: 5,
////   value: 5,
//// });
//// var p1Cards = [oneOfClubs, twoOfClubs, threeOfClubs];
//// var randomSuit = p1Cards[Math.floor(Math.random()*p1Cards.length)];
//// console.log(randomSuit);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/////////////PLAYERS ARE SET TO EMPTY//////
function Player({name = "Computer", hand}){
  this.name = name,
  this.hand = hand;
};

let player1 = new Player({
});

let player2 = new Player({
});
////////////////////////////////
//////opening of game/////////////////
// const playerName1 = prompt('Player 1, enter your name.')
player1.name = "Sally";
// const playerName2 = prompt('Okay, now Player 2!')
player2.name = "Chad";
// alert('WAR TIME BEGINS!');
// console.log('War time Begins');
// console.log('Press Q to quit at anytime');
////////////////////////////////////////
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
////////////////CARDS//////////////
function Card({suit, symbol, value, used = false, index}){
  this.suit = suit,
  this.symbol = symbol,
  this.value = value,
  this.used = used,
  this.index = index;
};
//////////Clubs//////////////
let twoOfClubs = new Card({
  suit:'clubs',
  symbol:'2',
  value:2,
  index:0,
});
let threeOfClubs = new Card({
  suit:'clubs',
  symbol:'3',
  value:3,
  index:1,
});
let fourOfClubs = new Card({
  suit:'clubs',
  symbol:'4',
  value:4,
  index:2,
});
let fiveOfClubs = new Card({
  suit:'clubs',
  symbol:'5',
  value:5,
  index:3,
});
let sixOfClubs = new Card({
  suit:'clubs',
  symbol:'6',
  value:6,
  index:4,
});
let sevenOfClubs = new Card({
  suit:'clubs',
  symbol:'7',
  value:7,
  index:5,
});
let eightOfClubs = new Card({
  suit:'clubs',
  symbol:'8',
  value:8,
  index:6,
});
let nineOfClubs = new Card({
  suit:'clubs',
  symbol:'9',
  value:9,
  index:7,
});
let tenOfClubs = new Card({
  suit:'clubs',
  symbol:'10',
  value:10,
  index:8,
});
let jackOfClubs = new Card({
  suit:'clubs',
  symbol:'Jack',
  value:11,
  index:9,
});
let queenOfClubs = new Card({
  suit:'clubs',
  symbol:'Queen',
  value:12,
  index:10,
});
let kingOfClubs = new Card({
  suit:'clubs',
  symbol:'King',
  value:13,
  index:11,
});
let aceOfClubs = new Card({
  suit:'clubs',
  symbol:'14',
  value:14,
  index:12,
});
//////////////////////////
//////////HEARTS///////////
let twoOfHearts = new Card({
  suit:'hearts',
  symbol:'2',
  value:2,
  index:13,
});
let threeOfHearts = new Card({
  suit:'hearts',
  symbol:'3',
  value:3,
  index:14,
});
let fourOfHearts = new Card({
  suit:'hearts',
  symbol:'4',
  value:4,
  index:15,
});
let fiveOfHearts = new Card({
  suit:'hearts',
  symbol:'5',
  value:5,
  index:16,
});
let sixOfHearts = new Card({
  suit:'hearts',
  symbol:'6',
  value:6,
  index:17,
});
let sevenOfHearts = new Card({
  suit:'hearts',
  symbol:'7',
  value:7,
  index:18,
});
let eightOfHearts = new Card({
  suit:'hearts',
  symbol:'8',
  value:8,
  index:19,
});
let nineOfHearts = new Card({
  suit:'hearts',
  symbol:'9',
  value:9,
  index:20,
});
let tenOfHearts = new Card({
  suit:'hearts',
  symbol:'10',
  value:10,
  index:21,
});
let jackOfHearts = new Card({
  suit:'hearts',
  symbol:'Jack',
  value:11,
  index:22,
});
let queenOfHearts = new Card({
  suit:'hearts',
  symbol:'Queen',
  value:12,
  index:23,
});
let kingOfHearts = new Card({
  suit:'hearts',
  symbol:'King',
  value:13,
  index:24,
});
let aceOfHearts = new Card({
  suit:'hearts',
  symbol:'14',
  value:14,
  index:25,
});
//////////////////////////
//////////SPADES///////////
let twoOfSpades = new Card({
  suit:'spades',
  symbol:'2',
  value:2,
  index:26,
});
let threeOfSpades = new Card({
  suit:'spades',
  symbol:'3',
  value:3,
  index:27,
});
let fourOfSpades = new Card({
  suit:'spades',
  symbol:'4',
  value:4,
  index:28,
});
let fiveOfSpades = new Card({
  suit:'spades',
  symbol:'5',
  value:5,
  index:29,
});
let sixOfSpades = new Card({
  suit:'spades',
  symbol:'6',
  value:6,
  index:30,
});
let sevenOfSpades = new Card({
  suit:'spades',
  symbol:'7',
  value:7,
  index:31,
});
let eightOfSpades = new Card({
  suit:'spades',
  symbol:'8',
  value:8,
  index:32,
});
let nineOfSpades = new Card({
  suit:'spades',
  symbol:'9',
  value:9,
  index:33,
});
let tenOfSpades = new Card({
  suit:'spades',
  symbol:'10',
  value:10,
  index:34,
});
let jackOfSpades = new Card({
  suit:'spades',
  symbol:'Jack',
  value:11,
  index:35,
});
let queenOfSpades = new Card({
  suit:'spades',
  symbol:'Queen',
  value:12,
  index:36,
});
let kingOfSpades = new Card({
  suit:'spades',
  symbol:'King',
  value:13,
  index:37,
});
let aceOfSpades = new Card({
  suit:'spades',
  symbol:'14',
  value:14,
  index:38,
});
//////////////////////////
//////////DIAMONDS///////////
let twoOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'2',
  value:2,
  index:39,
});
let threeOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'3',
  value:3,
  index:40,
});
let fourOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'4',
  value:4,
  index:41,
});
let fiveOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'5',
  value:5,
  index:42,
});
let sixOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'6',
  value:6,
  index:43,
});
let sevenOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'7',
  value:7,
  index:44,
});
let eightOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'8',
  value:8,
  index:45,
});
let nineOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'9',
  value:9,
  index:46,
});
let tenOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'10',
  value:10,
  index:47,
});
let jackOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'Jack',
  value:11,
  index:48,
});
let queenOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'Queen',
  value:12,
  index:49,
});
let kingOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'King',
  value:13,
  index:50,
});
let aceOfDiamonds = new Card({
  suit:'diamonds',
  symbol:'14',
  value:14,
  index:51,
});


/////////CARD ARRAY////////////
const cardArray = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs,twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades,twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds, aceOfDiamonds];

// console.log(shuffle(cardArray));
// console.log(cardArray.length);
///////////////////////////////////////////////
//////////SHUFFLING A DECK///////////////

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
console.log(player1.hand.length);
//run while this thing is true
//keep running this function til someone has a empty deck
/////////////PLAYERS HAVE DIFF CARDS ABOVE///////////
////////////////////////////////////////////
///////////// PLAYING PLAYERS HAND////////////////
// to play this game, I need to pop off a card from player1 deck ....pop takes off the last one ..unshift will add to the 1st spot
// let p1PlayCard = player1.hand.pop();
// let p2PlayCard = player2.hand.pop();


//instead of one card drawing I need a function to draw a card.
//keeping using pop
//because pop will pop the card off the player's deck, aka the
//card will never be the same.


// let unshiftP1Deck = player1.hand.unshift();
// let unshiftP2Deck = player2.hand.unshift();



function dealCard(player) {
  return player.hand.pop();
}
console.log(dealCard(player1));
console.log(dealCard(player1));


function playGameDisplay() {
  let p1PlayCard = dealCard(player1);
  let p2PlayCard = dealCard(player2);
  console.log(`${player1.name} drew ${p1PlayCard.symbol} of ${p1PlayCard.suit}. ${player2.name} drew ${p2PlayCard.symbol} of ${p2PlayCard.suit}.`);
  if (p1PlayCard.value > p2PlayCard.value) {
    // player1Wins();
    player1.hand.unshift(p1PlayCard, p2PlayCard);
    console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
    console.log(`${player1.name} wins!`);
  } else if (p1PlayCard.value === p2PlayCard.value)
   { console.log("IT'S WAR TIME!!!!!!");
     // warTime();
     alert('It\'s WAR!');
     playGameDisplay()
     // // console.log('player 1 hand when war hits', player1.hand.length);
     // // console.log('player 2 hand when war hits', player2.hand.length);
     // let spliceP1 = player1.hand.splice(-4); // array of 4 cards
     // let spliceP2 = player2.hand.splice(-4); // array of 4 cards
     // let p1WarCard = spliceP1.pop(); // card
     // let p2WarCard = spliceP2.pop(); // card
     // // console.log(p1WarCard, p2WarCard);
     // if (p1WarCard.value > p2WarCard.value) {
     //   console.log(p1WarCard.value);
     //   console.log(p2WarCard.value);
     //   player1.hand = [p1PlayCard, p2PlayCard, ...spliceP1, ...spliceP2, p1WarCard, p2WarCard, ...player1.hand];
     //   console.log(`${player1.name} has won! ${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
     // } else if (p1WarCard.value === p2WarCard.value) {
     //   warTime();
     // }  else if (player1.hand.length = 0) {
     //   console.log(GAMEOVER);
     // }
     // else if (player2.hand.length = 0) {
     //   console.log(GAMEOVER);
     }
     // else {
     //   player2.hand = [p1PlayCard, p2PlayCard, ...spliceP1, ...spliceP2, p1WarCard, p2WarCard, ...player2.hand];
     //   console.log(`${player2.name} has won! ${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
     // }
     else {
   // player2Wins();
   player2.hand.unshift(p2PlayCard, p1PlayCard);
   console.log(`${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
   console.log(`${player2.name} wins!`);
 }
};


function warTime() {
  let p1PlayCard = dealCard(player1);
  let p2PlayCard = dealCard(player2);
  alert('It\'s WAR TIME 2!');
  // console.log('player 1 hand when war hits', player1.hand.length);
  // console.log('player 2 hand when war hits', player2.hand.length);
  console.log("you hit war again");
  let spliceP1 = player1.hand.splice(-4); // array of 4 cards
  let spliceP2 = player2.hand.splice(-4); // array of 4 cards
  let p1WarCard = spliceP1.pop(); // card
  let p2WarCard = spliceP2.pop(); // card
  // console.log(p1WarCard, p2WarCard);
  if (p1WarCard.value > p2WarCard.value) {
    player1.hand = [p1PlayCard, p2PlayCard, ...spliceP1, ...spliceP2, p1WarCard, p2WarCard, ...player1.hand];
    console.log(`${player1.name} has won! ${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
  } else if (p1WarCard.value === p2WarCard.value) {
    warTime();
  }
  else {
    player2.hand = [p1PlayCard, p2PlayCard, ...spliceP1, ...spliceP2, p1WarCard, p2WarCard, ...player2.hand];
    console.log(`${player2.name} has won! ${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
  }
};

// function player1Wins() {
//   let p1PlayCard = dealCard(player1);
//   let p2PlayCard = dealCard(player2);
//   player1.hand.unshift(p2PlayCard, p1PlayCard);
//   console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
// };

// function player2Wins() {
//   let p1PlayCard = dealCard(player1);
//   let p2PlayCard = dealCard(player2);
//   player2.hand.unshift(p2PlayCard, p1PlayCard);
//   console.log(`${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
// };

console.log(playGameDisplay());

while (player1.hand.length !== 0 && player2.hand.length !== 0) {
  playGameDisplay();
};

// let u = 50;
// while (--u) {
//   playGameDisplay();
// };








// function playGameDisplay() {
//   if (popP1Deck.value > popP2Deck.value) {
//     player1.hand.unshift(popP2Deck);
//     player1.hand.unshift(popP1Deck);
//     // player1.hand = unshiftp1;
//     console.log(`${player1.name} drew ${popP1Deck.symbol} of ${popP1Deck.suit}. ${player2.name} drew ${popP2Deck.symbol} of ${popP2Deck.suit}. ${player1.name} wins ${player2.name} cards! ${player1.name} has ${player1.hand.length} and ${player2.name} has ${player2.hand.length}!`);
//     // Sarah drew 8 of clubs. Mady drew Queen of clubs
//   }
//   else if(popP1Deck.value < popP2Deck.value)
//   { player2.hand.unshift(popP1Deck);
//     player2.hand.unshift(popP2Deck);
//     console.log(`${player2.name} drew ${popP2Deck.symbol} of ${popP2Deck.suit}. ${player1.name} drew ${popP1Deck.symbol} of ${popP1Deck.suit}. ${player2.name} wins ${player1.name} cards! ${player1.name} has ${player1.hand.length} and ${player2.name} has ${player2.hand.length}! `);
//
//   }
//   else(popP1Deck.value = popP2Deck.value)
//   { alert('It\'s WAR!');
//     console.log(`${player1.name} and ${player2.name} cards match! IT'S WAR TIME!!! ${player1.name} has ${player1.hand.length} and ${player2.name} has ${player2.hand.length}!`);
//     let spliceP1 = player1.hand.splice(-4);
//     let spliceP2 = player2.hand.splice(-4);
//     let splicePopP1 = spliceP1.pop()
//     let splicePopP2 = spliceP2.pop()
//         if (spliceP1.value > spliceP2.value) {
//         player1.hand.unshift(spliceP1, spliceP2, splicePopP1, splicePopP2, popP1Deck, popP2Deck);
//         console.log(`${player1.name} drew ${splicePopP1.symbol} of ${splicePopP1.suit}. ${player2.name} drew ${splicePopP2.symbol} of ${splicePopP2.suit}. ${player1.name} wins ${player2.name} cards! ${player1.name} has ${player1.hand.length} and ${player2.name} has ${player2.hand.length}!`);
//     }else {
//       player1.hand.unshift(spliceP1, spliceP2, splicePopP1, splicePopP2, popP1Deck, popP2Deck);
//       console.log(player1.hand);
//       console.log(`${player1.name} drew ${splicePopP1.symbol} of ${splicePopP1.suit}. ${player2.name} drew ${splicePopP2.symbol} of ${splicePopP2.suit}. ${player1.name} wins ${player2.name} cards! ${player1.name} has ${player1.hand.length} and ${player2.name} has ${player2.hand.length}!`);
//     }
//     //pop 3 times then store in array
//     //splice(-3) will take 3 off player deck then
//     //what is my return value
//     // if(){
//     // }
//   }
// };
// console.log(playGameDisplay());

















//
// let newArr = [];
// for (var i = 0; i < cardArray.length; i++) {
//   if (newArr.length !== 52) {
//     newArr.push());
//   }
// };

// const randomCard = cardArray[Math.floor(Math.random()*cardArray.length)];
//
// console.log(randomCard);
//
// function dealCards(card) {
//   let newArr = [];
//   for (var i = 0; i < card.length; i++) {
//     if (newArr.length !== 52) {
//       newArr.push((card[Math.floor(Math.random()*cardArray.length)]));
//     }
//   //do you need to keep the orignal
//   //index splice
//   //remove duplicate
//   }
//   return newArr;
// };
// console.log(dealCards(cardArray));
// //randomCard splice out
//
// if (!newArr.includes(cardArray.name))
//
// ///make the cards deal


/////////////this function  will return me 26 random cards
// const p1cards = dealCards(cardArray);
// // console.log(p1cards[12].value);
// //I can drill down into this list like its a object but its an array.
// for (var i = 0; i < p1cards.length; i++) {
//  p1cards[i].used = true;
// }
// const p2cards = cardArray.filter(function(card) {
//   return card.used === false;
// });

///random it 52
//
// console.log(p1cards);
// console.log(p2cards);


// function User({name, hand}){
//   this.name = name,
//   this.hand = hand;
// };
//
// let player1 = new User({
// });
// let player2 = new User({
// });


// const secArr = cardArray.filter(function(cards) {
//   return cards.includes(newCards);
// });
// const findWood = item.filter(function(material) {
//   return material.materials.includes("wood");
// });


//whatever cards newArr has stored, give me back the oppsite in


// console.log(`${player1.name} has ${oneOfClubs.value} cards
//   & ${player2.name} has ${twoOfClubs.value} cards`);
// // player1.name 'has' arr.length 'cards'.
//
// console.log(oneOfClubs);
// function getCard(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// //until .length is 26
// // console.log(getCard(52));
// i = 100
// while (--i) {
//
// }
