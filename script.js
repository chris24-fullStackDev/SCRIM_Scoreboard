const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const homePlus1Btn = document.getElementById("home-plus1-btn");
const homePlus2Btn = document.getElementById("home-plus2-btn");
const homePlus3Btn = document.getElementById("home-plus3-btn");

const guestPlus1Btn = document.getElementById("guest-plus1-btn");
const guestPlus2Btn = document.getElementById("guest-plus2-btn");
const guestPlus3Btn = document.getElementById("guest-plus3-btn");

const quarterBoard = document.getElementById("quarter-board");

const endQuarterBtn = document.getElementById("end-quarter-btn");
const nextQuarterBtn = document.getElementById("next-quarter-btn");
const resetBtn = document.getElementById("reset-btn");

const homeQuarterScore1 = document.getElementById("home-quarter-score1");
const homeQuarterScore2 = document.getElementById("home-quarter-score2");
const homeQuarterScore3 = document.getElementById("home-quarter-score3");
const homeQuarterScore4 = document.getElementById("home-quarter-score4");

const guestQuarterScore1 = document.getElementById("guest-quarter-score1");
const guestQuarterScore2 = document.getElementById("guest-quarter-score2");
const guestQuarterScore3 = document.getElementById("guest-quarter-score3");
const guestQuarterScore4 = document.getElementById("guest-quarter-score4");

let homeScoreMain = 0;
let guestScoreMain = 0;

let homeQuarterScore = [];
let guestQuarterScore = [];

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
    homeQuarterScore.push(homeScoreMain);
    guestQuarterScore.push(guestScoreMain);

  if (quarterValue === 1) {
    homeQuarterScore1.textContent = homeQuarterScore[0];
    guestQuarterScore1.textContent = guestQuarterScore[0];
  }


  if (quarterValue === 2) {
    homeQuarterScore2.textContent = homeScoreMain;
    guestQuarterScore2.textContent = guestScoreMain;
    homeQuarterScore2.textContent = homeQuarterScore[1];
    guestQuarterScore2.textContent = guestQuarterScore[1];
}
  if (quarterValue === 3) {
    homeQuarterScore3.textContent = homeScoreMain;
    guestQuarterScore3.textContent = guestScoreMain;
    homeQuarterScore3.textContent = homeQuarterScore[2];
    guestQuarterScore3.textContent = guestQuarterScore[2];
}
  if (quarterValue === 4) {
    homeQuarterScore4.textContent = homeScoreMain;
    guestQuarterScore4.textContent = guestScoreMain;
    homeQuarterScore4.textContent = homeQuarterScore[3];
    guestQuarterScore4.textContent = guestQuarterScore[3];
  }
}

function nextQuarter() {
  if (quarterValue < 4) {
    quarterValue += 1;
    quarterBoard.textContent = quarterValue;
  }
}

function reset() {
  homeScoreMain = 0;
  guestScoreMain = 0;
  homeScore.textContent = homeScoreMain;
  guestScore.textContent = guestScoreMain;
  quarterBoard.textContent = 1;
  homeQuarterScore1.textContent = "-";
  homeQuarterScore2.textContent = "-";
  homeQuarterScore3.textContent = "-";
  homeQuarterScore4.textContent = "-";
  guestQuarterScore1.textContent = "-";
  guestQuarterScore2.textContent = "-";
  guestQuarterScore3.textContent = "-";
  guestQuarterScore4.textContent = "-";
  quarterValue = 1;
  homeQuarterScore = [];
  guestQuarterScore = [];
}
