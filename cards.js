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
  suit:'♣',
  symbol:'2',
  value:2,
  index:0,
});
let threeOfClubs = new Card({
  suit:'♣',
  symbol:'3',
  value:3,
  index:1,
});
let fourOfClubs = new Card({
  suit:'♣',
  symbol:'4',
  value:4,
  index:2,
});
let fiveOfClubs = new Card({
  suit:'♣',
  symbol:'5',
  value:5,
  index:3,
});
let sixOfClubs = new Card({
  suit:'♣',
  symbol:'6',
  value:6,
  index:4,
});
let sevenOfClubs = new Card({
  suit:'♣',
  symbol:'7',
  value:7,
  index:5,
});
let eightOfClubs = new Card({
  suit:'♣',
  symbol:'8',
  value:8,
  index:6,
});
let nineOfClubs = new Card({
  suit:'♣',
  symbol:'9',
  value:9,
  index:7,
});
let tenOfClubs = new Card({
  suit:'♣',
  symbol:'10',
  value:10,
  index:8,
});
let jackOfClubs = new Card({
  suit:'♣',
  symbol:'Jack',
  value:11,
  index:9,
});
let queenOfClubs = new Card({
  suit:'♣',
  symbol:'Queen',
  value:12,
  index:10,
});
let kingOfClubs = new Card({
  suit:'♣',
  symbol:'King',
  value:13,
  index:11,
});
let aceOfClubs = new Card({
  suit:'♣',
  symbol:'Ace',
  value:14,
  index:12,
});
//////////////////////////
//////////HEARTS///////////
let twoOfHearts = new Card({
  suit:'♡',
  symbol:'2',
  value:2,
  index:13,
});
let threeOfHearts = new Card({
  suit:'♡',
  symbol:'3',
  value:3,
  index:14,
});
let fourOfHearts = new Card({
  suit:'♡',
  symbol:'4',
  value:4,
  index:15,
});
let fiveOfHearts = new Card({
  suit:'♡',
  symbol:'5',
  value:5,
  index:16,
});
let sixOfHearts = new Card({
  suit:'♡',
  symbol:'6',
  value:6,
  index:17,
});
let sevenOfHearts = new Card({
  suit:'♡',
  symbol:'7',
  value:7,
  index:18,
});
let eightOfHearts = new Card({
  suit:'♡',
  symbol:'8',
  value:8,
  index:19,
});
let nineOfHearts = new Card({
  suit:'♡',
  symbol:'9',
  value:9,
  index:20,
});
let tenOfHearts = new Card({
  suit:'♡',
  symbol:'10',
  value:10,
  index:21,
});
let jackOfHearts = new Card({
  suit:'♡',
  symbol:'Jack',
  value:11,
  index:22,
});
let queenOfHearts = new Card({
  suit:'♡',
  symbol:'Queen',
  value:12,
  index:23,
});
let kingOfHearts = new Card({
  suit:'♡',
  symbol:'King',
  value:13,
  index:24,
});
let aceOfHearts = new Card({
  suit:'♡',
  symbol:'Ace',
  value:14,
  index:25,
});
//////////////////////////
//////////SPADES///////////
let twoOfSpades = new Card({
  suit:'♠️',
  symbol:'2',
  value:2,
  index:26,
});
let threeOfSpades = new Card({
  suit:'♠️',
  symbol:'3',
  value:3,
  index:27,
});
let fourOfSpades = new Card({
  suit:'♠️',
  symbol:'4',
  value:4,
  index:28,
});
let fiveOfSpades = new Card({
  suit:'♠️',
  symbol:'5',
  value:5,
  index:29,
});
let sixOfSpades = new Card({
  suit:'♠️',
  symbol:'6',
  value:6,
  index:30,
});
let sevenOfSpades = new Card({
  suit:'♠️',
  symbol:'7',
  value:7,
  index:31,
});
let eightOfSpades = new Card({
  suit:'♠️',
  symbol:'8',
  value:8,
  index:32,
});
let nineOfSpades = new Card({
  suit:'♠️',
  symbol:'9',
  value:9,
  index:33,
});
let tenOfSpades = new Card({
  suit:'♠️',
  symbol:'10',
  value:10,
  index:34,
});
let jackOfSpades = new Card({
  suit:'♠️',
  symbol:'Jack',
  value:11,
  index:35,
});
let queenOfSpades = new Card({
  suit:'♠️',
  symbol:'Queen',
  value:12,
  index:36,
});
let kingOfSpades = new Card({
  suit:'♠️',
  symbol:'King',
  value:13,
  index:37,
});
let aceOfSpades = new Card({
  suit:'♠️',
  symbol:'Ace',
  value:14,
  index:38,
});
//////////////////////////
//////////DIAMONDS///////////
let twoOfDiamonds = new Card({
  suit:'♢',
  symbol:'2',
  value:2,
  index:39,
});
let threeOfDiamonds = new Card({
  suit:'♢',
  symbol:'3',
  value:3,
  index:40,
});
let fourOfDiamonds = new Card({
  suit:'♢',
  symbol:'4',
  value:4,
  index:41,
});
let fiveOfDiamonds = new Card({
  suit:'♢',
  symbol:'5',
  value:5,
  index:42,
});
let sixOfDiamonds = new Card({
  suit:'♢',
  symbol:'6',
  value:6,
  index:43,
});
let sevenOfDiamonds = new Card({
  suit:'♢',
  symbol:'7',
  value:7,
  index:44,
});
let eightOfDiamonds = new Card({
  suit:'♢',
  symbol:'8',
  value:8,
  index:45,
});
let nineOfDiamonds = new Card({
  suit:'♢',
  symbol:'9',
  value:9,
  index:46,
});
let tenOfDiamonds = new Card({
  suit:'♢',
  symbol:'10',
  value:10,
  index:47,
});
let jackOfDiamonds = new Card({
  suit:'♢',
  symbol:'Jack',
  value:11,
  index:48,
});
let queenOfDiamonds = new Card({
  suit:'♢',
  symbol:'Queen',
  value:12,
  index:49,
});
let kingOfDiamonds = new Card({
  suit:'♢',
  symbol:'King',
  value:13,
  index:50,
});
let aceOfDiamonds = new Card({
  suit:'♢',
  symbol:'Ace',
  value:14,
  index:51,
});


/////////CARD ARRAY////////////
const cardArray = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, sixOfClubs, sevenOfClubs, eightOfClubs, nineOfClubs, tenOfClubs, jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs,twoOfHearts, threeOfHearts, fourOfHearts, fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts, twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades, sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades, jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades,twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds, kingOfDiamonds, aceOfDiamonds];

// console.log(shuffle(cardArray));
// console.log(cardArray.length);
///////////////////////////////////////////////
