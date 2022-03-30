const select = (ele, all = false) => {
  if (all) {
    return document.querySelectorAll(ele);
  } else {
    return document.querySelector(ele);
  }
};
const on = (type, ele, listener, all = false) => {
  let selectEle = select(ele, all);
  if (selectEle) {
    if (all) {
      selectEle.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEle.addEventListener(type, listener);
    }
  }
};

var typed = new Typed("#typed", {
  strings: ["front-end engineer", "beer lover", "cat lover"],
  backSpeed: 40,
  typeSpeed: 70,
  startDelay: 1000,
  backDelay: 900,
  loop: true,
});
//arrow style and animations
(function () {
  let skillset = document.querySelector(".skillTitle").children;
  let content = document.querySelectorAll(".skillContent p");
  if (window.innerWidth > 850) {
    for (let i = 0; i < skillset.length; i++) {
      skillset[i].style.width = "80%";
      skillset[i].style.position = "relative";
      skillset[i].addEventListener("click", (e) => {
        if (e.target.style.width == "100%") {
          e.target.style.width = "80%";
        } else {
          for (let i = 0; i < skillset.length; i++) {
            skillset[i].style.width = "80%";
            content[i].style.display = "none";
          }
          e.target.style.width = "100%";
          content[i].style.display = "block";
        }
      });
    }
    skillset[0].style.width = "100%";
    content[0].style.display = "block";
  }
})();

//nav click event
//footers.getBoundingClientRect().bottom <= window.innerHeight
(function () {
  const navLinks = select(".navLinks li", true);
  const main = select(".main");
  const about = select(".about");
  const resume = select(".resume");
  const portfolio = select(".portfolio");
  const contact = select(".contact");

  on("click", ".navBurger", function (e) {
    select(".hiddenNav").classList.toggle("navActive");
    this.classList.toggle("toggle");
  });

  const eleArray = [main, about, resume, portfolio, contact];
  for (let i = 0; i < eleArray.length; i++) {
    navLinks[i].addEventListener("click", (e) => {
      eleArray[i].scrollIntoView();
    });
  }
})();

// rwd skill list show
(function () {
  const skillDetail = document.querySelectorAll(".skillListRWD p");
  const skillList = document.querySelectorAll(".skillListRWD div");
  const about = document.querySelector(".about");
  const skillListRWD = document.querySelector(".skillListRWD");

  for (let i = 0; i < skillList.length; i++) {
    skillList[i].addEventListener("click", (e) => {
      if (skillDetail[i].style.display === "block") {
        about.style.gridTemplateRows = "repeat(10, 50px)";
        skillListRWD.style.gridRow = "7/11";
        skillDetail[i].style.display = "none";
      } else {
        for (let i = 0; i < skillList.length; i++) {
          skillDetail[i].style.display = "none";
        }
        about.style.gridTemplateRows = "repeat(14,50px)";
        skillListRWD.style.gridRow = "7/15";
        skillDetail[i].style.display = "block";
        skillDetail[i].classList.toggle("skillDetailUp");
      }
    });
  }
})();
