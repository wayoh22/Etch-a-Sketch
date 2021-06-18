const container = document.querySelector("#container");
makeDivs(256);

//Make Grid Function
function makeDivs(numberOfDivs) {
    for (i = 0; i < numberOfDivs; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}

//Set Variables to be Used
const box = document.querySelectorAll(".box");
const blackButton = document.querySelector(".button1");
const RGBbutton = document.querySelector(".button2");
const resetButton = document.querySelector(".button3");
blackButton.addEventListener("click", blackTrail);
RGBbutton.addEventListener("click", RBGTrail);
resetButton.addEventListener("click", reset);

//Black Button Function
function blackTrail() {
    box.forEach((box) => {
        box.onmouseover = (e) => {
            e.target.style["background-color"] = "black";
        };
    })
}

//Random Color Button Function
function RBGTrail() {
    box.forEach((box) => {
        box.onmouseover = (e) => {
            e.target.style["background-color"] = randomColor();
        };
    })
}

//Reset Button Function
function reset () {
    location.reload();
}

function randomColor() {
    var r  = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var RGB = "rgb(" + r + "," + g + "," + b + ")";
    return RGB;
}


