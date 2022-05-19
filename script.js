const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
toggle.addEventListener("click", () => {
    body.classList.toggle("on");
    if (body.className === "on") {
        body.style.background = `radial-gradient(#fff, #111)`;
    } 
    else 
    {
        body.style.background = "#222";
    }
});