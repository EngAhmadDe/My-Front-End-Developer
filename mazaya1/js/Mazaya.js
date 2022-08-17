// Counter
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// Counter

// percentage
let circleSection = document.querySelector(".steps");
let circles = document.querySelectorAll(".circle-progress");
let progressCircles = document.querySelectorAll(".progress");
let progressText = document.querySelectorAll(".circles-progress h1");
let bol = false;

window.addEventListener("scroll", function () {
  if (pageYOffset > circleSection.offsetTop - 800 && bol === false) {
    for (let i = 0; i < circles.length; i++) {
      let radius = progressCircles[i].r.baseVal.value;
      let circumference = radius * 2 * Math.PI;
      progressCircles[i].style.strokeDasharray = circumference;
      function setProgress(percent) {
        progressCircles[i].style.strokeDashoffset =
          circumference - (percent / 100) * circumference;
      }
      let progress = circles[i].dataset.prog;
      progressText[i].innerHTML = progress + "%";
      setProgress(progress);
      bol = true;
    }
  }
});
