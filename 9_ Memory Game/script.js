const memoryCards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    // Agar board lock hai ya same card par double click kiya hai, toh ruk jao
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    // Pehla click
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Dusra click
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    // Check karte hain match hue ya nahi
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // Ternary operator: Agar isMatch true hai toh disableCards() chalao, warna unflipCards() chalao
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    // Match hone par click event hata do
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    // Match na hone par thodi der baad wapas ulta kar do
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    // Har turn ke baad variables ko reset kar do
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

// Ye function khud-ba-khud (Immediately) chal jayega aur cards ko mix kar dega
(function shuffle() {
    memoryCards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16); // 0 se 15 ke beech random number
        card.style.order = randomPos; // CSS grid mein order set karega
    });
})();

// Saare cards par click event lagana
memoryCards.forEach(card => card.addEventListener('click', flipCard));