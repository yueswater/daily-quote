const API_URL = "https://api.realinspire.live/v1/quotes/random"
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const facebookBtn = document.getElementById("facebook-btn");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    let quote_data = data[0];

    quoteEl.innerHTML = quote_data.content;
    authorEl.innerHTML = quote_data.author;
};

facebookBtn.addEventListener("click", () => {
    const quote = quoteEl.innerText;
    const author = authorEl.innerText;
    const textToShare = `"${quote}" - ${author}`;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(textToShare)}`;

    window.open(shareUrl, "_blank", "width=600, height=400");
})

document.addEventListener("DOMContentLoaded", () => {
    getQuote(API_URL);
});