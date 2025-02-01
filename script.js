const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');

const homePlus1Btn = document.getElementById('home-plus1-btn');
const homePlus2Btn = document.getElementById('home-plus2-btn');
const homePlus3Btn = document.getElementById('home-plus3-btn');

const guestPlus1Btn = document.getElementById('guest-plus1-btn');
const guestPlus2Btn = document.getElementById('guest-plus2-btn');
const guestPlus3Btn = document.getElementById('guest-plus3-btn');

const quarterBoard = document.getElementById('quarter-board');

const endQuarterBtn = document.getElementById('end-quarter-btn');
const nextQuarterBtn = document.getElementById('next-quarter-btn');
const resetBtn = document.getElementById('reset-btn');

const homeQuarterScore1 = document.getElementById('home-quarter-score1');
const homeQuarterScore2 = document.getElementById('home-quarter-score2');
const homeQuarterScore3 = document.getElementById('home-quarter-score3');
const homeQuarterScore4 = document.getElementById('home-quarter-score4');

const guestQuarterScore1 = document.getElementById('guest-quarter-score1');
const guestQuarterScore2 = document.getElementById('guest-quarter-score2');
const guestQuarterScore3 = document.getElementById('guest-quarter-score3');
const guestQuarterScore4 = document.getElementById('guest-quarter-score4');

let homeScoreMain = 0;
let guestScoreMain = 0;

let quarterScore = 0;
let quarterValue = 1;

function homePlus1() {
    homeScoreMain += 1;
    homeScore.textContent = homeScoreMain;
}
function homePlus2() {
    homeScoreMain += 2;
    homeScore.textContent = homeScoreMain;
}
function homePlus3() {
    homeScoreMain += 3;
    homeScore.textContent = homeScoreMain;
}

function guestPlus1() {
 guestScoreMain += 1;
    guestScore.textContent = guestScoreMain;
}

function guestPlus2() {
 guestScoreMain += 2;
    guestScore.textContent = guestScoreMain;
}

function guestPlus3() {
 guestScoreMain += 3;
    guestScore.textContent = guestScoreMain;
}

function endQuarter() {
    homeQuarterScore1.textContent = homeScoreMain;
    guestQuarterScore1.textContent = guestScoreMain;
}

function nextQuarter() {
    quarterValue += 1;
    quarterBoard.textContent = quarterValue;
}

function reset() {
    homeScoreMain = 0;
    guestScoreMain = 0;
    homeScore.textContent = homeScoreMain;
    guestScore.textContent = guestScoreMain;
    quarterBoard.textContent = 1;
}