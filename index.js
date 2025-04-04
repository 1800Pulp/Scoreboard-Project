homeScoreEl = document.getElementById('homeScore-el');
guestScoreEl = document.getElementById('guestScore-el');
whosBallEl = document.getElementById('whosBall-el');
periodButtonEl = document.getElementById('period-button-el');
let total1 = 0
let total2 = 0
let periodEl = 0

function add1Home() {
    total1 += 1
    homeScoreEl.textContent = total1
}

function add2Home() {
    total1 += 2
    homeScoreEl.textContent = total1
}

function add3Home() {
    total1 += 3
    homeScoreEl.textContent = total1
}

function resetHome() {
    total1 = 0
    homeScoreEl.textContent = total1
}



function add1Guest() {
    total2 += 1
    guestScoreEl.textContent = total2
}

function add2Guest() {
    total2 += 2
    guestScoreEl.textContent = total2
}


function add3Guest() {
    total2 += 3
    guestScoreEl.textContent = total2
}

function resetGuest() {
    total2 = 0
    guestScoreEl.textContent = total2
}
function homesBall() {
    whosBallEl.textContent = "<"
}
function guestsBall() {
    whosBallEl.textContent = ">"
}
function period() {
    if (periodEl > 3) {
        periodEl = 0;
        periodButtonEl.textContent = periodEl
    } else {
        periodEl = periodEl + 1;  // or periodEl += 1
        periodButtonEl.textContent = periodEl
    }}