"use strict";


const container = document.querySelector(".container");
container.style.width = "500px";
container.style.margin = "0 auto";
container.style.flexWrap = "wrap";
container.style.display = "flex";

const black = [11, 13, 15, 17, 22, 24, 26, 28, 31, 33, 35, 37, 42, 44, 46, 48, 51, 53, 55, 57, 62, 64, 66, 68, 71, 73, 75, 77, 82, 84, 86, 88];

function getSettings() {
    const cell = document.createElement("div");
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.style.margin = "0px";
    cell.style.padding = "0px";
    cell.style.fontSize = "30px";
    cell.style.textAlign = "center";
    cell.style.color = "orange";
    cell.className = "cell";
    cont.append(cell);
}
window.onload = getSettings;

for (let n = 0; (n < 100); n++) {
    window.onload = getSettings();
};

const allCell = document.querySelectorAll(".cell");

for (let i = 0; (i < allCell.length); i++) {
    let c;
    if (black.includes(i) === true) {
        c = "black";
    }
    else {
        c = "LightGrey";
    }
    allCell[i].style.background = c;
    if ((i > 20) && (i < 29)) {
        allCell[i].innerText = "♟";
    };
    if ((i > 70) && (i < 79)) {
        allCell[i].innerText = "♙";
    };

    allCell[1].innerText = "A";
    allCell[2].innerText = "B";
    allCell[3].innerText = "C";
    allCell[4].innerText = "D";
    allCell[5].innerText = "E";
    allCell[6].innerText = "F";
    allCell[7].innerText = "G";
    allCell[8].innerText = "H";
    allCell[91].innerText = "A";
    allCell[92].innerText = "B";
    allCell[93].innerText = "C";
    allCell[94].innerText = "D";
    allCell[95].innerText = "E";
    allCell[96].innerText = "F";
    allCell[97].innerText = "G";
    allCell[98].innerText = "H";

    allCell[80].innerText = "1";
    allCell[70].innerText = "2";
    allCell[60].innerText = "3";
    allCell[50].innerText = "4";
    allCell[40].innerText = "5";
    allCell[30].innerText = "6";
    allCell[20].innerText = "7";
    allCell[10].innerText = "8";
    allCell[89].innerText = "1";
    allCell[79].innerText = "2";
    allCell[69].innerText = "3";
    allCell[59].innerText = "4";
    allCell[49].innerText = "5";
    allCell[39].innerText = "6";
    allCell[29].innerText = "7";
    allCell[19].innerText = "8";

    allCell[11].innerText = "♜";
    allCell[12].innerText = "♞";
    allCell[13].innerText = "♝";
    allCell[14].innerText = "♛";
    allCell[15].innerText = "♚";
    allCell[16].innerText = "♝";
    allCell[17].innerText = "♞";
    allCell[18].innerText = "♜";

    allCell[81].innerText = "♖";
    allCell[82].innerText = "♘";
    allCell[83].innerText = "♗";
    allCell[84].innerText = "♕";
    allCell[85].innerText = "♔";
    allCell[86].innerText = "♗";
    allCell[87].innerText = "♘";
    allCell[88].innerText = "♖";

}

