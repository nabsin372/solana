var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

const quote = Quote.getRandomQuote();

console.log(
    cowsay.say({
    text : quote,
    e : "oO",
    T : "U"
}));

// or cowsay.think()