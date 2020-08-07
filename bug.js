let button = document.getElementById("buttonBegin");
let mainPage = document.getElementById("main");

let lightLevel = document.querySelector(".light");
let mediumLevel = document.querySelectorAll(".medium");
let hardLevel = document.querySelectorAll(".hard");
let cards = document.querySelectorAll(".card");

let elements = document.querySelectorAll(".list");

const chooseLevel = (elem) => {
  elements.forEach((item) => item.classList.remove("marker"));
  elem.target.classList.add("marker");
};
elements.forEach((item) => item.addEventListener("click", chooseLevel));

let numberOfCards;
button.onclick = function () {
  mainPage.hidden = true;
  lightLevel.classList.remove("light");
  let currentLevel = document.querySelector(".marker").getAttribute("id");
  lightLevel.classList.remove("newGrid");
  switch (currentLevel) {
    case "light":
  	  mediumLevel.forEach((element) => {
        element.classList.add("medium");
        });
      hardLevel.forEach((element) => {
        element.classList.add("hard");
	    });
	  numberOfCards = 3;
  	  break;
	case "medium":
	  mediumLevel.forEach((element) => {
        element.classList.remove("medium");
        });
      hardLevel.forEach((element) => {
      element.classList.add("hard");
	    });
      numberOfCards = 6;
	  break;
	case "hard":
	  mediumLevel.forEach((element) => {
        element.classList.remove("medium");
        });
	  hardLevel.forEach((element) => {
        element.classList.remove("hard");
	    });
	  lightLevel.classList.add('newGrid');
	  numberOfCards = 10;
	  break;
  }
};

let hasFlippedCard = false;
cards.forEach((card) => {
  card.addEventListener ("click", (event) => {
    event.stopPropagation();
    if(hasFlippedCard) {
	  mainPage.hidden = false;
	  lightLevel.classList.add("light");
	  cards.forEach((item) => item.classList.remove("flip"));
	  cards.forEach((item) => item.lastElementChild.src = "img/finish.png");
	  hasFlippedCard = false;
 	} else {
	  card.classList.add("flip");
	  (function mixCards() {
        let randomCard = Math.floor(Math.random() * numberOfCards);
        for (let i = 0; i < numberOfCards; i++ ) {
          if (i === randomCard) {
            cards[i].lastElementChild.src = "img/bug.png";
           };
        };	
      })();
	  hasFlippedCard = true;
	}
	});
	});

lightLevel.addEventListener ("click", (event) => {
    if(hasFlippedCard) {
    mainPage.hidden = false;
    lightLevel.classList.add("light");
    cards.forEach((item) => item.classList.remove("flip"));
    cards.forEach((item) => item.lastElementChild.src = "img/finish.png");
    hasFlippedCard = false;
  } else {
    card.classList.add("flip");
    (function mixCards() {
        let randomCard = Math.floor(Math.random() * numberOfCards);
        for (let i = 0; i < numberOfCards; i++ ) {
          if (i === randomCard) {
            cards[i].lastElementChild.src = "img/bug.png";
           };
        };  
      })();
    hasFlippedCard = true;
  }
  });