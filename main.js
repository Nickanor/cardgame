function Deck(){

  this.buildDeck();
}

Deck.prototype.buildDeck = function(){
  var suits = ['clubs', 'hearts', 'diamonds', 'hearts']
  var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
  var self = this;

  this.cards = [];

  suits.forEach(function(suit){
    values.forEach(function(value){
      self.cards.push(new Card(value, suit));
   });
 });
 return this;
}



Deck.prototype.shuffle = function(){

  var shuffle = this.cards.length,
      shufflecard,
      temp;

  while (shuffle > 0){
    shufflecard = Math.floor(Math.random() * shuffle);
    shuffle -= 1;

    temp = this.cards[shufflecard]
    this.cards[shufflecard] = this.cards[shuffle]
    this.cards[shuffle] = temp;
  }
  return this
}

Deck.prototype.reset = function(){
  this.buildDeck().shuffle();
}

Deck.prototype.RandomCard = function(){
  return (this.cards.length > 0) ? this.cards.pop(): null;
}

function Card(value, suit){
  this.value=value;
  this.suit=suit;
}

function Player(name){
  this.name=name;
  this.hand=[];
}

Player.prototype.takeCard = function(deck){
  this.hand.push(deck.RandomCard());
  return this;
}

Player.prototype.discard = function(cardIdx){
  if (this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}

var Nicholas = new Player('Nicholas');
var deck = new Deck();
