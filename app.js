//utilities
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
//global variable
const about = select(".about");
const portfolioItem = select(".portfolioItem", true);
const portfolioContainer = select(".portfolioLink", true);
const portfolioArrowRight = select(".fa-arrow-right", true);

//event handler
//hidden nav icon
on("click", ".fa-linkedin", () => {
  window.open("https://www.linkedin.com/in/james-chen-867491216/", "_blank");
});
on("click", ".fa-instagram", () => {
  window.open("https://www.instagram.com/james1562454/", "_blank");
});
on("click", ".fa-github", () => {
  window.open("https://github.com/JamesChenTW09?tab=repositories", "_blank");
});

//portfolio link show up when hover
portfolioItem[0].addEventListener("mouseenter", () => {
  portfolioArrowRight[0].style.opacity = "1";
  portfolioContainer[0].style.height = "55px";
});
portfolioItem[0].addEventListener("mouseleave", () => {
  portfolioArrowRight[0].style.opacity = "0";
  portfolioContainer[0].style.height = "0px";
});
portfolioItem[1].addEventListener("mouseenter", () => {
  portfolioArrowRight[1].style.opacity = "1";
  portfolioContainer[1].style.height = "55px";
});
portfolioItem[1].addEventListener("mouseleave", () => {
  portfolioArrowRight[1].style.opacity = "0";
  portfolioContainer[1].style.height = "0px";
});
//portfolio link event
portfolioArrowRight[0].addEventListener("click", () => {
  window.open("https://drinkgether.com", "_blank");
});
portfolioArrowRight[1].addEventListener("click", () => {
  window.open("http://34.200.206.129:3000/", "_blank");
});
//about part rwd size
window.onresize = function () {
  if (window.innerWidth > 885) {
    about.style.gridTemplateRows = "60px 20px 100px 20px 301px";
  } else {
    about.style.gridTemplateRows = "repeat(11, 50px)";
  }
};

//nav part
(function () {
  const navLinks = select(".navLinks li", true);
  const main = select(".main");
  const resume = select(".resume");
  const portfolio = select(".portfolio");
  const contact = select(".contact");
  const hiddenNav = select(".hiddenNav");

  on("click", ".navBurger", function (e) {
    hiddenNav.classList.toggle("showHiddenNav");
    this.classList.toggle("burgerTransform");
  });
  const scrollEleArray = [main, about, resume, portfolio, contact];
  for (let i = 0; i < scrollEleArray.length; i++) {
    navLinks[i].addEventListener("click", (e) => {
      scrollEleArray[i].scrollIntoView();
    });
  }
})();

//main page typing animation
var typed = new Typed("#typed", {
  strings: ["Front-End engineer", "Beer Lover", "Travel Addict"],
  backSpeed: 40,
  typeSpeed: 70,
  startDelay: 1000,
  backDelay: 900,
  loop: true,
});

//skill arrow width changing
(function () {
  const allSkillTitle = select(".skillTitle div", true);
  const skillContent = select(".skillContent p", true);
  for (let i = 0; i < allSkillTitle.length; i++) {
    allSkillTitle[i].style.width = "80%";
    allSkillTitle[i].addEventListener("click", (e) => {
      const skillTitle = e.target;
      if (skillTitle.style.width == "100%") {
        skillTitle.style.width = "80%";
      } else {
        for (let i = 0; i < allSkillTitle.length; i++) {
          allSkillTitle[i].style.width = "80%";
          skillContent[i].style.display = "none";
        }
        skillTitle.style.width = "100%";
        skillContent[i].style.display = "block";
      }
    });
  }
  allSkillTitle[0].style.width = "100%";
  skillContent[0].style.display = "block";
})();

// rwd skill transform
(function () {
  const skillContent = select(".skillListRWD p", true);
  const allSkillTitle = select(".skillListRWD div", true);
  const skillListRWD = select(".skillListRWD");
  for (let i = 0; i < allSkillTitle.length; i++) {
    allSkillTitle[i].addEventListener("click", (e) => {
      if (skillContent[i].style.height === "210px") {
        about.style.gridTemplateRows = "repeat(11, 50px)";
        skillListRWD.style.gridRow = "6/12";
        skillContent[i].style.height = "0";
      } else {
        for (let i = 0; i < allSkillTitle.length; i++) {
          skillContent[i].style.height = "0";
        }
        about.style.gridTemplateRows = "repeat(15,50px)";
        skillListRWD.style.gridRow = "6/16";
        skillContent[i].style.height = "210px";
      }
    });
  }
})();
