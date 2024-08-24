let cardsValue = [1, 2, 3]; // Valeurs prédéfinies des cartes pour assigner les images.
let flipped;

// Récupération des images via leur class name depuis le HTML.
let deck = document.getElementsByClassName("card");
console.log(deck);

// Cartes dans le HTML rendues réceptives à la fonction clickImg.
for(let card of deck) {
    card.addEventListener("click", clickImg);
}

// Assemblage des images avec leurs valeurs prédéfinies.
for (let i in deck) {
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
        console.log("WEEEEEEEEEEE");
        e.target.unflipped = true;
    } else {
        e.target.src = "img/Card.jpg";
        e.target.style.border = "3px solid blue"
        e.target.style.borderRadius = "15px";
        e.target.flipped = false;
    }
}

