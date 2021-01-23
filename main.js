// Enter player one name: Sarah
// Enter player two name: Mady
// Let's War!
// Press q to quit. Press any key to play:
// Sarah drew 8 of clubs. Mady drew Queen of clubs


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
const p1Name = prompt('Player 1, enter your name.')
player1.name = p1Name;
// player1.name = "Computer";
const p2Name = prompt('Okay, now Player 2!')
player2.name = p2Name;
// player2.name = "Sarah";
alert('✸ YOU HAVE ENTERED THE GAME OF WAR! ✸');
console.log('War time Begins');
console.log('Press Q to quit at anytime');
////////////////////////////////////////
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
// console.log(player1.hand.length);
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



function playGameDisplay() {
  let p1PlayCard = dealCard(player1);
  let p2PlayCard = dealCard(player2);

  console.log(`${player1.name} drew ${p1PlayCard.symbol} of ${p1PlayCard.suit}. ${player2.name} drew ${p2PlayCard.symbol} of ${p2PlayCard.suit}.`);
  //   console.log(player1.hand.length, player2.hand.length);
  // console.log(player1.hand.length + player2.hand.length);

   if (p1PlayCard.value > p2PlayCard.value) {
    // player1Wins();
    player1.hand.unshift(p1PlayCard, p2PlayCard);
    console.log(`${player1.name} wins!`);
    console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);

  }
  else if (p1PlayCard.value === p2PlayCard.value)
   { console.log(" %c!!!!!!!✸!IT'S WAR TIME!✸!!!!!!!!!", 'color:red;');
   // console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
   return true;
   console.log(player1.hand.length, player2.hand.length);
 console.log(player1.hand.length + player2.hand.length);
   let spliceP1 = player1.hand.splice(-4); // array of 4 cards
   let spliceP2 = player2.hand.splice(-4); // array of 4 cards
   let p1WarCard = spliceP1.pop(); // pop 1 card off splice 4 cards
   let p2WarCard = spliceP2.pop(); // pop 1 card off splice 4 cards
     // warTime();
     alert('It\'s WAR!');
     if (p1WarCard.value > p2WarCard.value) {
       //player 1 war car is GREATER than player 2 war card.
       console.log(`${player1.name} drew ${p1WarCard.symbol} of ${p1WarCard.suit}. ${player2.name} drew ${p2WarCard.symbol} of ${p2WarCard.suit}.`);
       //////whats really happening in this//////////////
       let player1wins = [p1PlayCard, p2PlayCard, p1WarCard, p2WarCard];
       let splices = [...player1wins, ...spliceP1, ...spliceP2, ...player1.hand];
       player1.hand = splices;

       ////////////////////////////////////////////
       // console.log(splices);
       // console.log(player1.hand);
       console.log(`${player1.name} wins!`);
       console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
     //   console.log(player1.hand.length, player2.hand.length);
     // console.log(player1.hand.length + player2.hand.length);;

     } else if (p1WarCard.value < p2WarCard.value) {
       //player 1 war car is LESS than player 2 war card.
       //player 2 wins
       console.log(`${player1.name} drew ${p1WarCard.symbol} of ${p1WarCard.suit}. ${player2.name} drew ${p2WarCard.symbol} of ${p2WarCard.suit}.`);
       ////////////////////////////////////////////
       let player2wins = [p1PlayCard, p2PlayCard, p1WarCard, p2WarCard];
       let splices = [...player2wins, ...spliceP1, ...spliceP2, ...player2.hand];
       player2.hand = splices;
       ////////////////////////////////////////////
       // console.log(splices);
       // console.log(player2.hand);
       console.log(`${player2.name} wins!`);
       console.log(`${player2.name} has ${player2.hand.length}. ${player1.name} has ${player1.hand.length}.`);
     //   console.log(player1.hand.length, player2.hand.length);
     // console.log(player1.hand.length + player2.hand.length);
     }
     else {
       playGameDisplay ();
     }
   }//this ends the war
   else {
   // player2Wins();
   player2.hand.unshift(p2PlayCard, p1PlayCard);
   console.log(`${player2.name} wins!`);
   console.log(`${player1.name} has ${player1.hand.length}. ${player2.name} has ${player2.hand.length}.`);
   }
};



console.log(playGameDisplay());

while (!(player1.hand.length < 5) && !(player2.hand.length < 5)) {
  playGameDisplay();
};

function endGameDisplay() {
  if (player1.hand.length < 5) {
    console.log("%c GAME OVER", "color:red");
    console.log(`${player1.name} has lost. ${player2.name} has won!`);
    return console.log("To play again refresh page");

  } else if (player2.hand.length < 5) {
    console.log("%c GAME OVER", "color:red");
    console.log(`${player2.name} has lost. ${player1.name} has won!`);
    return console.log("%c To play again refresh page" , "color:green");
  }
};
endGameDisplay();


// let u = 100;
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
