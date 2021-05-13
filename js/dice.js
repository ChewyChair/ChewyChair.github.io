var i, num, dicesizestate, dicevalue, diesize, total;


init();

function init() {
    num = 1;
    dicesizestate = 1;
    diesize = "d4";
    dicevalue = 4;
}

document.querySelector('.btn-numdice').addEventListener("mousedown", numdice);
document.querySelector('.btn-sizedice').addEventListener("mousedown", sizedice, false);
document.querySelector('.btn-roll').addEventListener("click", roll);
//document.addEventListener('contextmenu', event => event.preventDefault());

function numdice() {
    switch(window.event.which) {
        case 1:
            num += 1;
            break;
        case 2:
            break;
        case 3:
            num -= 1;
            break;
    }
    num = (num == 0) ? 1 : num;
    document.getElementById("N").innerHTML = num;
}

function sizedice() {
    switch(window.event.which) {
        case 1:
            dicesizestate += 1;
            break;
        case 2:
            break;
        case 3:
            dicesizestate -= 1;
            break;
    }
    dicesizestate = (dicesizestate == 8) ? 1 : (dicesizestate == 0) ? 7 : dicesizestate;
    switch(dicesizestate) {
        case 1:
            diesize = "d4";
            dicevalue = 4;
            break;
        case 2:
            diesize = "d6";
            dicevalue = 6;
            break;
        case 3:
            diesize = "d8";
            dicevalue = 8;
            break;
        case 4:
            diesize = "d10";
            dicevalue = 10;
            break;
        case 5:
            diesize = "d12";
            dicevalue = 12;
            break;
        case 6:
            diesize = "d20";
            dicevalue = 20;
            break;
        case 7:
            diesize = "d100";
            dicevalue = 100;
            break;
    }
    document.getElementById("SD").innerHTML = diesize;
    return false;
}

function roll() {
    total = 0;
    for (i = 0; i < num; i++) {
        total += Math.floor(Math.random() * (dicevalue) + 1);
    }
    document.getElementById("RES").innerHTML = total;
}