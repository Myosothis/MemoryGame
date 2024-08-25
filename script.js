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
function isPair() {
    if (check1 === check2 && check1 !== '' && check2 !== '') {
        console.log("PAIR");
        check1 = '';
        check2 = '';
        validCards += 2;
        for (let i in deck) {
            if (deck[i].shownCard = true) {
                shownCard = false;
                lockCard = true;
                deck.splice;
            } else {
            deck[i].src = "img/Card.jpg";
            deck[i].flipped = true;
            flippedCard = 0;
            }
        };
        winCondition();
    } else if (check1 !== '' && check2 !== '') {
        console.log("NOT PAIR");
        check1 = '';
        check2 = '';
        for (let i in deck) {
            deck[i].src = "img/Card.jpg";
            deck[i].flipped = true;
            }
    }
};

// Sélectionne les cartes et invoque isPair.
function clickImg(e) {
    for (let i in deck) {
        if (shownCard = true) {
           removeEventListener("click", clickImg);
        }
    }
    if (e.target.flipped = true && flippedCard <= 1) {
        e.target.flipped = false;
        e.target.src = "img/" + e.target.id + ".jpg";
        flippedCard += 1;
        console.log(e.target.id);
            if (check1 === '') {
                check1 = e.target.src;
                e.target.shownCard = true;
            } else if (check1 !== '' && check2 === '') {
                check2 = e.target.src;
                e.target.shownCard = true;
                isPair();
                flippedCard = 0;  
            };
            
    }
};

// Recommencer le jeu.
function resetGame(){
    for (let i in deck) {

        deck[i].src = "img/Card.jpg";
        deck[i].flipped = true;
        flippedCard = 0;

    }
flippedCard = 0;
check1 = '';
check2 = '';
validCards = 0;

document.getElementById('victoire').classList.remove('show');

}
document.querySelector('.start').addEventListener('click', resetGame);
