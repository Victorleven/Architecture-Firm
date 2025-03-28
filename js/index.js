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
        document.getElementById("heroimg").style.backgroundImage = "url(/img/r-architecture-2gDwlIim3Uw-unsplash.jpg)"
        //heroImg.style.backgroundImage = "url(/img/r-architecture-2gDwlIim3Uw-unsplash.jpg)"
    }
}

const firstButton = document.querySelector("#firstButton")
const secondButton = document.querySelector("#secondButton")

firstButton.addEventListener("click", () => imageSlide(1))
secondButton.addEventListener("click", () => imageSlide(2))


    //document.getElementById("firstButton").addEventlistener("click", () => imageSlide(1))
    //document.getElementById("secondButton").addEventlistener("click", () => imageSlide(2))
    
})
