let cardsValue = [1, 2, 3]; // Valeurs prédéfinies des cartes pour assigner les images.
let flipped; // État de la carte.
let flippedCard = 0; // Compteur de cartes retournées.
let check1 = ''; // Vérification des pairs dans la fonction isPair.
let check2 = '';

// Récupération des images via leur class name depuis le HTML.
let deck = document.getElementsByClassName("card");
console.log(deck);

// Cartes dans le HTML rendues réceptives à la fonction clickImg.
for(let card of deck) {
    card.addEventListener("click", clickImg);
}

// Assemblage des images avec leurs valeurs prédéfinies + variable flipped.
/*for (let i in deck) {
    deck[i].src = "img/Card" + cardsValue[i] + ".jpg";
    deck[i].flipped = true;
}

// Flip les cartes via le click.
function clickImg(e) {
    console.log("Source :", e.target.src);
    console.log("ID :", e.target.id);
    console.log("BorderRadius :", e.target.style.borderRadius);
    console.log("flipped :", e.target.flipped);

    if (e.target.flipped = false) {
        e.target.src = "img/" + e.target.id + ".jpg";
        console.log("Flipped a été réglé sur True.");
        e.target.flipped = true;
        console.log("Flipped a été réglé sur True.");
        return;
    } else {
        e.target.src = "img/Card.jpg";
        e.target.style.border = "3px solid blue"
        e.target.style.borderRadius = "15px";
        console.log("Flipped a été réglé sur False.");
        e.target.flipped = false;
        console.log("Flipped status : " + e.target.flipped);
        return;
    };
}*/

for (let i in deck) {
    deck[i].src = "img/Card.jpg";
    deck[i].flipped = true;
};

function isPair() {
    if (check1 === check2) {

    }
};

function clickImg(e) {
    if (e.target.flipped = true && flippedCard < 2) {
        e.target.flipped = false;
        e.target.src = "img/" + e.target.id + ".jpg";
        flippedCard += 1;
        console.log(e.target.id);
    } else {
        for (let i in deck) {
            
            deck[i].src = "img/Card.jpg";
            deck[i].flipped = true;
            flippedCard = 0;
            
        }
    }
}


console.log("Flipped status : " + deck[0].flipped);

