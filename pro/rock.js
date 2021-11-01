const game = {
    playerHand: "",
    computerHand: ""
}
const results = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const hands = [...document.querySelectorAll("img")];
const warning = document.querySelector('.hidden');
const name = document.querySelector('input');



// pierwsza funkcja - wybór ręki
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 2px 3px black';
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    warning.classList.remove('active')
    // console.log(`player ${game.playerHand}`);

}

// const handSelection = (e) => {
//     const picture = e.target;
//     game.playerHand = picture.dataset.option;
// }




// druga funkcja - ustawienie przeciwnika - komputera(losowość !!!)

function computerChoice() {

    return hands[Math.floor(Math.random() * 3)].dataset.option;;


}
// funcka piąta - reset gry{
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.computerHand = "";
}

// funkcja szósta - ustawienie inputa
// function putYourName(e) {
//     name.textContent = e.target.value;
//     document.querySelector('[data-summary="who-win"]').textContent = " Wygrałeś !!!";
//     console.log(e.target.value);

// }


// czwarta funkcja - ustalająca zasady gry
function gameResult(player, computer) {
    if (player === computer) {
        console.log('Remis !!!');
        return "draw";
    } else if ((player === "Papier" && computer === "Kamień") || (player === "Kamień" && computer === "Nożyce") || (player === "Nożyce" && computer === "Papier")) {
        console.log('Wygrana !!!');
        return "win";

    } else {
        console.log('Przegrana !!!');
        return "loss"

    }

}
// piąta funkcja - wyniki gry
function publishResult(player, computer, res) {
    const name = document.querySelector('input');
    const value = name.value;
    // name.value="";

    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="computer-choice"]').textContent = computer;
    document.querySelector('p.numbers span').textContent = ++results.numbers;
    if (res === "win") {
        document.querySelector('p.wins span').textContent = ++results.wins;
        document.querySelector('[data-summary="who-win"]').textContent = `${value} !!!`;
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (res === "loss") {
        document.querySelector('p.losses span').textContent = ++results.losses;
        document.querySelector('[data-summary="who-win"]').textContent = " Przeciwnik !!!";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++results.draws;
        document.querySelector('[data-summary="who-win"]').textContent = " Remis !!!";
        document.querySelector('[data-summary="who-win"]').style.color = "yellow";
    }



}


// trzecia funkcja - funkcja sterująca(uruchamiająca grę)

function startGame() {
    if (!game.playerHand) {
        return warning.classList.add('active')
    }

    game.computerHand = computerChoice();
    console.log(`komp ${game.computerHand}`);

    const result = gameResult(game.playerHand, game.computerHand);
    // console.log(result);
    publishResult(game.playerHand, game.computerHand, result);
    endGame();


}

document.querySelector('button').addEventListener('click', startGame);
hands.forEach(hand => hand.addEventListener('click', handSelection));
// name.addEventListener('change', putYourName);