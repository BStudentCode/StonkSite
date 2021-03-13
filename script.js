var count = 0;
const text = document.getElementById("yourValue")
const text2 = document.getElementById("stonkValue")

function onBtnClick() {
    count++;
    text = "You have clicked " + count + " times";
}

function genRandom(bounds) {
    return Math.floor(Math.random() * Math.floor(bounds));
}

function changeStonkValue() {
    text.innerHTML = "-" + genRandom(1000).toString()
    text2.innerHTML = "+" + genRandom(1000).toString()
}

setInterval(changeStonkValue, 1000)