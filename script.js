function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    document.getElementById('random-number').innerText = randomNumber;
}