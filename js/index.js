$(document).ready(function() {
    /*function secondImg() {
        document.getElementById("heroimg").style.backgroundImage = "url(/img/r-architecture-2gDwlIim3Uw-unsplash.jpg)"
    }

    document.getElementById("firstButton").addEventListener("click", () => secondImg())

*/

function imageSlide(slideNumber) {
    if (slideNumber == 1) {
        document.getElementById("heroimg").style.backgroundImage = "url(/img/r-architecture-rOk4VSMS3Ck-unsplash.jpg)"
    } 
    if (slideNumber == 2) {
        document.getElementById("heroimg").style.backgroundImage = "url(/img/r-architecture-wJAOeXvxudM-unsplash.jpg)"
        //heroImg.style.backgroundImage = "url(/img/r-architecture-2gDwlIim3Uw-unsplash.jpg)"
    }
    if (slideNumber == 3) {
        document.getElementById("heroimg").style.backgroundImage = "url(/img/r-architecture-khpWE85ge38-unsplash.jpg)"
        //heroImg.style.backgroundImage = "url(/img/r-architecture-2gDwlIim3Uw-unsplash.jpg)"
    }
}

const firstButton = document.querySelector("#firstButton")
const secondButton = document.querySelector("#secondButton")
const thirdButton = document.querySelector("#thirdButton")
const logo = document.querySelector("#logo")

firstButton.addEventListener("click", () => imageSlide(1))
secondButton.addEventListener("click", () => imageSlide(2))
thirdButton.addEventListener("click", () => imageSlide(3))
logo.addEventListener("click", () => firstPage())

function firstPage() {
    window.location.assign("http://127.0.0.1:5500/index.html")
}

    //document.getElementById("firstButton").addEventlistener("click", () => imageSlide(1))
    //document.getElementById("secondButton").addEventlistener("click", () => imageSlide(2))
    
})
