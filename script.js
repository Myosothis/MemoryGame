let cardsValue = [1, 2, 3]; // Valeurs prédéfinies des cartes pour assigner les images.
let flipped; // État de la carte.
let flippedCard = 0; // Compteur de cartes retournées.
let check1 = ''; // Vérification des pairs dans la fonction isPair.
let check2 = '';
let validCards = 0; // Vérifie le nombre de cartes "validées".
let shownCard; // Annonce que la carte est affichée.
let lockCard; // Annonce que la carte est verrouillée dans son état.

// Récupération des images via leur class name depuis le HTML.
let deck = document.getElementsByClassName("card");
console.log(deck);

// Cartes dans le HTML rendues réceptives à la fonction clickImg.
for(let card of deck) {
    card.addEventListener("click", clickImg);
};

// Distribue les images de dos de carte.
for (let i in deck) {
    deck[i].src = "img/Card.jpg";
    deck[i].flipped = true;
};

// Vérifie la condition de victoire lorsque la fonction est invoquée.
function winCondition() {
    if (validCards === deck.length) {
        console.log('Congratulations !')
        document.getElementById('victoire').classList.add('show');
    }
};

// Vérifie les paires lorsque la fonction est invoquée et invoque winCondition.
function isPair(){
    if (check1 === check2) {
        console.log("PAIR");
        validCards += 2;
        for (let i in deck) {
            if (deck[i].lockCard !== true) {
                if (deck[i].shownCard == true){
                    deck[i].shownCard = false;
                    deck[i].lockCard = true;
                } else {
                deck[i].src = "img/Card.jpg";
                deck[i].flipped = true;
                }
            }
        };
        winCondition();
    } else {
        console.log("NOT PAIR");
        setTimeout(() => {
        for (let i in deck) {
            if (deck[i].lockCard !== true){
            deck[i].src = "img/Card.jpg";
            deck[i].flipped = true;
            }
            }
        }, 1000);
    }
    check1 = '';
    check2 = '';
};

// Sélectionne les cartes et invoque isPair.
function clickImg(e) {
    for (let i in deck) {
        if (shownCard == true) {
           removeEventListener("click", clickImg);
        }
    }
    if (e.target.flipped == true && flippedCard <= 1) {
        flippedCard += 1;
        e.target.flipped = false;
        e.target.src = "img/" + e.target.id + ".jpg";
        e.target.shownCard = true;
        console.log(e.target.id);
            if (check1 === '') {
                check1 = e.target.src;
            } else if (check1 !== '' && check2 === '') {
                check2 = e.target.src;
                isPair();
                flippedCard = 0;  
            };
            
    }
};

// Mélanger les cartes.
function shuffle() {
      for(i=0; i < deck.length;++i){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i].id, deck[j].id] = [deck[j].id, deck[i].id];
      };
      return deck;
};

// Recommencer le jeu.
function resetGame(){
    for (let i in deck) {

        deck[i].src = "img/Card.jpg";
        deck[i].flipped = true;
        deck[i].lockCard = null;

    }
flippedCard = 0;
check1 = '';
check2 = '';
validCards = 0;

shuffle();

document.getElementById('victoire').classList.remove('show');

}
document.querySelector('.start').addEventListener('click', resetGame);
