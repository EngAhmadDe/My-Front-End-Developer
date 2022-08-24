let buttons = document.querySelectorAll(".card-buttons button");
let sections = document.querySelectorAll(".card-section");
let card = document.querySelector(".mycv");

let handleButtonClick = e => {
    let targetSection = e.target.getAttribute("data-section");
    let section = document.querySelector(targetSection);
    targetSection !== "#about" ?
    card.classList.add("is-active") :
    card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});