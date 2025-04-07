$(document).ready(function() {
    const logo = document.querySelector("#logo")
    logo.addEventListener("click", () => firstPage())
    function firstPage() {
        window.location.assign("http://127.0.0.1:5500/index.html")
    }
    
})