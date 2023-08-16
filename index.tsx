
let player ={
  name : "Charles Mwangi",
  chips : 200
}
let cards = [] // Array - ordered list of items
let sum = 0
let hasBlackJack = false;
let isStarted = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Create a function, getRandomCard()
function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;
  if (randomNo === 1){
    return 11
  }
  else if (randomNo > 10){
    return 10
  }else{
    return randomNo;
  }
  
}

function startGame() {
  isAlive = true;
  if (isStarted === false){
    isStarted = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
  
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let a = 0; a < cards.length; a++) {
    cardsEl.textContent += cards[a] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    sum += newCard;
  // add the new card to the "cards" array
    cards.push(newCard);
    renderGame();
  } 
}
