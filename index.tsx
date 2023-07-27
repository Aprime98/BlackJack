let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; // Array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a function, getRandomCard()
function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;
  return randomNo;
}

function startGame() {
  renderGame();
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
  let newCard = getRandomCard();
  sum += newCard;
  // add the new card to the "cards" array
  cards.push(newCard);

  renderGame();
}
