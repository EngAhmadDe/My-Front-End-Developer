let buttons = document.querySelectorAll(".card-buttons button");
let sections = document.querySelectorAll(".card-section");
let card = document.querySelector(".mycv");

let handleButtonClick = e => {
    let targetSection = e.target.getAttribute("data-section");
    let section = document.querySelector(targetSection);
    targetSection !== "#about" ?
    card.classList.add("active") :
    card.classList.remove("active");
    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    section.classList.add("active");
};

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});
