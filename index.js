var getClue = document.getElementById('clue');
var clue = document.getElementsByClassName('clue')[0];
var letterBtns = document.getElementsByClassName('letterButton');
var mistakes = document.getElementsByClassName("mistakes")[0];
var image = document.getElementsByClassName('image')[0];
var playAgainBtn = document.getElementById('reset');
var upperCase = document.querySelector('.upperCase');
var kindsOfSports = ['Aerobics', 'Bowling', 'Rowing', 'Curling', 'Wrestling'];
var answer = '';
var maxWrongNumber = 10;
var wrongAnswers = 0;
var wordStatusFirst = null;
var aerobicsClue = 'Gym and music';
var bowlingClue = 'Strike';
var rowingClue = 'Race on river';
var curlingClue = 'Rectangular ice sheet';
var wrestlingClue = 'Grabs and throws';
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomWord = function () {
    answer = kindsOfSports[Math.floor(Math.random() * kindsOfSports.length)];
    console.log(typeof answer);
};
var answerFunction = function () {
    if (answer === kindsOfSports[0]) {
        getClue.addEventListener('click', function () {
            clue.innerHTML = aerobicsClue;
        });
    }
    else if (answer === kindsOfSports[1]) {
        getClue.addEventListener('click', function () {
            clue.innerHTML = bowlingClue;
        });
    }
    else if (answer === kindsOfSports[2]) {
        getClue.addEventListener('click', function () {
            clue.innerHTML = rowingClue;
        });
    }
    else if (answer === kindsOfSports[3]) {
        getClue.addEventListener('click', function () {
            clue.innerHTML = curlingClue;
        });
    }
    else if (answer === kindsOfSports[4]) {
        getClue.addEventListener('click', function () {
            clue.innerHTML = wrestlingClue;
        });
    }
    var wordArr = answer.toUpperCase().split('');
    var answerArr = wordArr.map(function (letter) { return letter.replace(letter, "_"); }).join('');
    var emptyArr = answerArr.split('');
    var newAnswer = Array(wordArr.length);
    var _loop_1 = function (btn) {
        btn.addEventListener('click', function () {
            for (var i = 0; i < newAnswer.length; i++) {
                if (wordArr[i] === btn.innerText) {
                    emptyArr[wordArr.indexOf(btn.innerText)] = btn.innerText;
                    document.getElementsByClassName('word')[0].innerHTML = emptyArr.map(function (l) { return l.replace(l, "<p>".concat(l, "</p>")); }).join('');
                }
            }
            if (!wordArr.includes(btn.innerText)) {
                wrongAnswers += 1;
                var numberToString = wrongAnswers.toString();
                if (wrongAnswers <= 10) {
                    mistakes.innerText = numberToString;
                    image.innerHTML = "<img src=./images/".concat(numberToString, ".png alt=\"Hang Man Image\">");
                }
                else {
                    mistakes.innerText = '10';
                    image.innerHTML = "<img src=./images/over.png alt=\"Game over\">";
                }
            }
            if (!document.getElementsByClassName('word')[0].innerHTML.split('').includes("_")) {
                image.innerHTML = "<img src=./images/winner.png alt=\"Winner\">";
            }
        });
    };
    for (var _i = 0, letterBtns_1 = letterBtns; _i < letterBtns_1.length; _i++) {
        var btn = letterBtns_1[_i];
        _loop_1(btn);
    }
};
var maxWrong = document.getElementsByClassName("maxWrong")[0];
maxWrong.innerHTML = "".concat(maxWrongNumber);
var guessWord = function () {
    wordStatusFirst = answer.toUpperCase().split('').map(function (letter) { return letter.replace(letter, "<p>_</p>"); }).join('');
    document.getElementsByClassName('word')[0].innerHTML = wordStatusFirst;
};
var createAlphabetUi = function () {
    var myButtons = document.getElementsByClassName('buttons');
    for (var _i = 0, alphabet_1 = alphabet; _i < alphabet_1.length; _i++) {
        var letter = alphabet_1[_i];
        var p = document.createElement('p');
        p.innerHTML = "<button class=\"letterButton btn btn-default L\"> ".concat(letter.toUpperCase(), " </button>");
        myButtons[0].appendChild(p);
    }
};
var toUpperCase = function () {
    var upper = upperCase.innerText.toUpperCase();
    upperCase.innerHTML = "<strong> ".concat(upper, " </strong>");
};
var reset = function () {
    playAgainBtn.addEventListener('click', function () {
        image.innerHTML = "<img src=./images/letsgo.png alt=\"Start the game\">";
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
