// script.js
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards); // Check when the page loads

function checkCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    const triggerBottom = window.innerHeight * 0.9; // 90% of the viewport height

    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('show'); // Adds class when the card is visible
        } else {
            card.classList.remove('show'); // Removes class when it's not visible
        }
    });
}
