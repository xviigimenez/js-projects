function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceIcons = document.getElementById("diceIcons");
    const values = [];
    const icons = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        icons.push(`<i class="icon" data-lucide="dice-${value}"></i>`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceIcons.innerHTML = icons.join('');
    lucide.createIcons();
}