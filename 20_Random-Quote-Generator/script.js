const quoteText = document.querySelector("#quote-text");
const author = document.querySelector("#author-name");
const quoteBtn = document.querySelector("#new-quote-btn");

async function newQuote() {
  try {
    quoteText.innerText = "Loding...";
    author.innerText = "";
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteText.innerText = data.quote;
    author.innerText = data.author;
  } catch (error) {
    console.log("kuch error aa gya", error);
  }
}

quoteBtn.addEventListener("click", function () {
  newQuote();
});

newQuote();
