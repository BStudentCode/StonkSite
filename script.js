const text = document.getElementById("yourValue")
const text2 = document.getElementById("stonkValue")
const stockIncrement = document.getElementById("userAddStockCounter")
const btn = document.getElementById("addBtn")
const modal_container = document.getElementById("modal-container")
const close = document.getElementById("btnCloseModal")
const userCashDisplay = document.getElementById("userCash")
const currentCostDisplay = document.getElementById("currentCost")
const companyNameDisplay = document.getElementById("companyNameDisplay")
let userQuantity = 0;
let userCash = 100;
let currentCost = 0;
let currentStockCost = 50;
let userOwnedStocks = 0;
let companyName = "Stonks Incorporated"

function genRandom(bounds) {
    return Math.floor(Math.random() * Math.floor(bounds));
}

function findStockCost() {
    var stringValue = text.innerHTML
    var intValue = stringValue.replace("-", "")
    var trueInt = parseInt(intValue)
    return trueInt;
}

function changeStonkValue(stonkCode) {
    text.innerHTML = "-" + genRandom(50).toString()
    text2.innerHTML = "+" + genRandom(50).toString()
}

function btnIncrementOne() {
    if (userCash > 0) {
        userQuantity++;
        currentCost = userQuantity * currentStockCost
        if (currentCost > userCash) { alert("You cannot buy more than you can afford!"); return; }
        currentCostDisplay.innerHTML = "This will cost: $" + currentCost
        stockIncrement.innerHTML = userQuantity.toString();
    }
}

function btnDecrementOne() {
    if (userQuantity <= 0) { userQuantity = 0; return; }
    userQuantity--;
    currentCost = currentStockCost / userQuantity
    if (currentCost = Infinity) { currentCost = 0 }
    currentCostDisplay.innerHTML = "This will cost: $" + currentCost
    stockIncrement.innerHTML = userQuantity.toString();
}

function btnOpenModal() {
    userCashDisplay.innerHTML = "You have: $" + userCash
    modal_container.classList.add("show")
}

function btnConfirm() {
    modal_container.classList.remove("show")
    userCash -= currentCost
    currentCost = 0
    currentCostDisplay.innerHTML = "This will cost: $0"

    userOwnedStocks += userQuantity
    userQuantity = 0

    stockIncrement.innerHTML = 0
    companyNameDisplay.innerHTML = companyName + " (" + userOwnedStocks + ")"
}

setInterval(changeStonkValue, 1000)