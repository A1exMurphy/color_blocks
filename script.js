console.log('🟥 🟦 🟩 🟨');

function redClick() {
    console.log("more red");

    let moreRed = document.getElementById("blocks");

    moreRed.innerHTML += `<p onclick="remove(event)" class = "block red-fill"></p>`
console.log(moreRed);
}

function blueClick() {
    console.log("more blue");

    let moreBlue = document.getElementById("blocks");

    moreBlue.innerHTML += `<p onclick="remove(event)" class = "block blue-fill"></p>`
console.log(moreBlue);
}

function greenClick() {
    console.log("more green");

    let moreGreen = document.getElementById("blocks");

    moreGreen.innerHTML += `<p onclick="remove(event)" class = "block green-fill"></p>`
console.log(moreGreen);
}

function yellowClick() {
    console.log("more yellow");

    let moreYellow = document.getElementById("blocks");

    moreYellow.innerHTML += `<p onclick="remove(event)" class = "block yellow-fill"></p>`
console.log(moreYellow);
}

function remove(event) {
    event.target.remove();
}