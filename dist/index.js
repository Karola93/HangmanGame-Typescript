const getClue = document.getElementById('clue');
const clue = document.getElementsByClassName('clue')[0];
const letterBtns = document.getElementsByClassName('letterButton');
const mistakes = document.getElementsByClassName("mistakes")[0];
const image = document.getElementsByClassName('image')[0];
const playAgainBtn = document.getElementById('reset');
const upperCase = document.querySelector('.upperCase');
const kindsOfSports = ['Aerobics', 'Bowling', 'Rowing', 'Curling', 'Wrestling'];

let answer = '';
let maxWrongNumber = 10;
let wrongAnswers = 0;
let wordStatusFirst = null;
const aerobicsClue = 'Gym and music';
const bowlingClue = 'Strike';
const rowingClue = 'Race on river';
const curlingClue = 'Rectangular ice sheet';
const wrestlingClue = 'Grabs and throws';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

const randomWord = () => {
    answer = kindsOfSports[Math.floor(Math.random() * kindsOfSports.length)];
    console.log(typeof answer);
};

const answerFunction = () => {
    if (answer === kindsOfSports[0]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = aerobicsClue;
        });
    }
    else if (answer === kindsOfSports[1]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = bowlingClue;
        });
    }
    else if (answer === kindsOfSports[2]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = rowingClue;
        });
    }
    else if (answer === kindsOfSports[3]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = curlingClue;
        });
    }
    else if (answer === kindsOfSports[4]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = wrestlingClue;
        });
    }
    const wordArr = answer.toUpperCase().split('');
    const answerArr = wordArr.map(letter => letter.replace(letter, `_`)).join('');
    const emptyArr = answerArr.split('');
    const newAnswer = Array(wordArr.length);
    for (const btn of letterBtns) {
        btn.addEventListener('click', () => {
            for (let i = 0; i < newAnswer.length; i++) {
                if (wordArr[i] === btn.innerText) {
                    emptyArr[wordArr.indexOf(btn.innerText)] = btn.innerText;
                    document.getElementsByClassName('word')[0].innerHTML = emptyArr.map(l => l.replace(l, `<p>${l}</p>`)).join('');
                }
            }
            if (!wordArr.includes(btn.innerText)) {
                wrongAnswers += 1;
                let numberToString = wrongAnswers.toString();
                if (wrongAnswers <= 10) {
                    mistakes.innerText = numberToString;
                    image.innerHTML = `<img src=./images/${numberToString}.png alt="Hang Man Image">`;
                }
                else {
                    mistakes.innerText = '10';
                    image.innerHTML = `<img src=./images/over.png alt="Game over">`;
                }
            }
            if (!document.getElementsByClassName('word')[0].innerHTML.split('').includes(`_`)) {
                image.innerHTML = `<img src=./images/winner.png alt="Winner">`;
            }
        });
    }
};

const maxWrong = document.getElementsByClassName("maxWrong")[0];
maxWrong.innerHTML = `${maxWrongNumber}`;
const guessWord = () => {
    wordStatusFirst = answer.toUpperCase().split('').map(letter => letter.replace(letter, `<p>_</p>`)).join('');
    document.getElementsByClassName('word')[0].innerHTML = wordStatusFirst;
};

const createAlphabetUi = () => {
    const myButtons = document.getElementsByClassName('buttons');
    for (const letter of alphabet) {
        const p = document.createElement('p');
        p.innerHTML = `<button class="letterButton btn btn-default L"> ${letter.toUpperCase()} </button>`;
        myButtons[0].appendChild(p);
    }
};

const toUpperCase = () => {
    const upper = upperCase.innerText.toUpperCase();
    upperCase.innerHTML = `<strong> ${upper} </strong>`;
};

const reset = () => {
    playAgainBtn.addEventListener('click', () => {
        image.innerHTML = `<img src=./images/letsgo.png alt="Start the game">`;
        mistakes.innerText = '0';
        guessWord();
    });
};

randomWord();
guessWord();
createAlphabetUi();
answerFunction();
toUpperCase();
reset();
//# sourceMappingURL=index.js.map