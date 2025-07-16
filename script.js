const quotes = [
  "The best way to predict the future is to invent it.",
  "Believe you can and you're halfway there.",
  "Stay hungry, stay foolish.",
  "Success is not in what you have, but who you are.",
  "You miss 100% of the shots you don’t take.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Everything you can imagine is real."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
