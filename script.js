let cardsValue = [1, 2, 3];

let deck = document.getElementsByClassName("card");
console.log(deck);

deck[0].src = "img/Card1.jpg";

for(let card of deck) {
    card.addEventListener("click", clickImg);
}

for (let i in deck) {
    deck[i].src = "img/Card" + cardsValue[i] + ".jpg";
}

function clickImg(e) {
    console.log("Source :", e.target.src);
    console.log("Source :", e.target.id);
    console.log("Source :", e.target.style.borderRadius);
}