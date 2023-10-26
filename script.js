console.log('🟥 🟦 🟩 🟨');

function redClick() {
    console.log("more red");
    let counter = document.getElementById("red-count").textContent
    let moreRed = document.getElementById("blocks");
    
    moreRed.innerHTML += `<p onclick="remove(event)" class = "block red-fill"></p>`


counter++;
console.log(counter);
document.getElementById("red-count").textContent = counter;



};

function blueClick() {
    console.log("more blue");
    let counter = document.getElementById("blue-count").textContent
    let moreBlue = document.getElementById("blocks");

    moreBlue.innerHTML += `<p onclick="remove(event)" class = "block blue-fill"></p>`

    
    counter++;
console.log(counter);
document.getElementById("blue-count").textContent = counter;



}

function greenClick() {
    console.log("more green");
    let counter = document.getElementById("green-count").textContent
    let moreGreen = document.getElementById("blocks");

    moreGreen.innerHTML += `<p onclick="remove(event)" class = "block green-fill"></p>`

    
    counter++;
    document.getElementById("green-count").textContent = counter;
}

function yellowClick() {
    console.log("more yellow");
    let counter = document.getElementById("yellow-count").textContent
    let moreYellow = document.getElementById("blocks");

    moreYellow.innerHTML += `<p onclick="remove(event)" class = "block yellow-fill"></p>`

    
    counter++;
    document.getElementById("yellow-count").textContent = counter
}

function remove(event) {
    event.target.remove();
        counter--;
       
}