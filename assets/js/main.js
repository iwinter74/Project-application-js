function howPlus() {
    console.log("how +")
    document.getElementById("how").classList.add("show")
    document.getElementById("how-plus").classList.remove("show-button")
    document.getElementById("how-plus").classList.add("hide")
    document.getElementById("how-minus").classList.add("show-button")
}
function howMinus() {
    console.log("how -")
    document.getElementById("how").classList.remove("show")
    document.getElementById("how-plus").classList.remove("hide")
    document.getElementById("how-minus").classList.remove("show-button")
}

function whatPlus() {
    console.log("what +")
    document.getElementById("what").classList.add("show")
    document.getElementById("what-plus").classList.remove("show-button")
    document.getElementById("what-plus").classList.add("hide")
    document.getElementById("what-minus").classList.add("show-button")
}
function whatMinus() {
    console.log("what -")
    document.getElementById("what").classList.remove("show")
    document.getElementById("what-plus").classList.remove("hide")
    document.getElementById("what-minus").classList.remove("show-button")
}
function addNav() {
    console.log("nav+")
    document.getElementById("menu").classList.toggle("show")
    document.getElementById("hamburger").style.opacity = "0"
}
function removeNav() {
    console.log("nav-")
    document.getElementById("menu").classList.toggle("show")
    document.getElementById("hamburger").style.opacity = "1"
}
function blackWhite() {
    console.log("black-white")
    document.getElementById("color").style.background = "white"
    document.getElementById("color").style.color = "black"
}
function whiteBlack() {
    console.log("white-black")
    document.getElementById("color").style.background = "black"
    document.getElementById("color").style.color = "white"
}
function pinkGray() {
    console.log("pink-gray")
    document.getElementById("color").style.background = "#282B29"
    document.getElementById("color").style.color = "#f4c4c4"
}