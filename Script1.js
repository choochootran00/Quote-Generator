
function rollDice(variable) {
    return Math.floor(Math.random() * variable);
}


const generatorBtn = document.getElementById("generator");
const whoSaidThis = document.getElementById("who-said-this");
const quote = document.getElementById("quote");
const enames = document.getElementById("names");

generatorBtn.addEventListener('click', e => {
    quote.innerHTML = quotes[rollDice(quotes.length)];
});

    


var quotes = ["So basically what you're saying is to NOT pick up the phone later?", "Look like you're geoSCREWED"]
