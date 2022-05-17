//utilities
const select = (ele, all = false) => {
  if (all) {
    return document.querySelectorAll(ele);
  } else {
    return document.querySelector(ele);
  }
};
const on = (type, ele, listener) => {
  let selectEle = select(ele);
  if (selectEle) {
    selectEle.addEventListener(type, listener);
  }
};

//main type.js
var typed = new Typed("#typed", {
  strings: ["Front-End engineer", "Beer Lover", "Travel Addict"],
  backSpeed: 40,
  typeSpeed: 70,
  startDelay: 1000,
  backDelay: 900,
  loop: true,
});

//nav
// show hidden nav
on("click", ".navBurger", function (e) {
  const hiddenNav = select(".hiddenNav");
  hiddenNav.classList.toggle("showHiddenNav");
  this.classList.toggle("burgerTransform");
});
// scroll to view event
const about = select(".about");
const navLinks = select(".navLinks li", true);
const main = select(".main");
const resume = select(".resume");
const portfolio = select(".portfolio");
const contact = select(".contact");
const scrollEleArray = [main, about, resume, portfolio, contact];
const scrollLenght = scrollEleArray.length;
for (let i = 0; i < scrollLenght; i++) {
  navLinks[i].addEventListener("click", (e) => {
    scrollEleArray[i].scrollIntoView();
  });
}

//icon inside hidden nav
const linkedinUrl = "https://www.linkedin.com/in/james-chen-867491216/";
const igUrl = "https://www.instagram.com/james1562454/";
const githubUrl = "https://github.com/JamesChenTW09?tab=repositories";
on("click", ".fa-linkedin", () => window.open(linkedinUrl));
on("click", ".fa-instagram", () => window.open(igUrl));
on("click", ".fa-github", () => window.open(githubUrl));

//about
//about part rwd size

window.onresize = function () {
  if (window.innerWidth > 885) {
    about.style.gridTemplateRows = "60px 20px 100px 20px 301px";
  } else {
    about.style.gridTemplateRows = "repeat(8, 50px)";
  }
};

//about rotate ball
on("click", ".rotateBallContainer", function () {
  const rotateInside = this.children[0];
  rotateInside.classList.add("spinOneCircle");
  this.classList.add("transformRight");
  setTimeout(() => {
    this.classList.remove("transformRight");
    rotateInside.classList.remove("spinOneCircle");
  }, 2700);
});

//portfolio
//portfolio link event
const drinkgetherUrl = "https://drinkgether.com";
const taipeiTourUrl = "http://34.200.206.129:3000/";
const portfolioItem = select(".portfolioItem", true);
const portfolioContainer = select(".portfolioLink", true);
const portfolioArrowRight = select(".fa-arrow-right", true);

portfolioArrowRight[0].onclick = () => window.open(drinkgetherUrl);
portfolioArrowRight[1].onclick = () => window.open(taipeiTourUrl);

//portfolio link show up when hover
const portfolioItemLen = portfolioItem.length;
for (let i = 0; i < portfolioItemLen; i++) {
  portfolioItem[i].onmouseenter = () => {
    portfolioArrowRight[i].style.opacity = "1";
    portfolioContainer[i].style.height = "55px";
  };
  portfolioItem[i].onmouseleave = () => {
    portfolioArrowRight[i].style.opacity = "0";
    portfolioContainer[i].style.height = "0px";
  };
}

//skill arrow width changing
(function () {
  const allSkillTitle = select(".skillTitle div", true);
  const skillContent = select(".skillContent ul", true);
  let allSkillTitleLength = allSkillTitle.length;
  for (let i = 0; i < allSkillTitleLength; i++) {
    allSkillTitle[i].style.width = "80%";
    allSkillTitle[i].addEventListener("click", function () {
      if (this.style.width == "100%") {
        this.style.width = "80%";
      } else {
        for (let i = 0; i < allSkillTitleLength; i++) {
          allSkillTitle[i].style.width = "80%";
          skillContent[i].style.display = "none";
        }
        this.style.width = "100%";
        skillContent[i].style.display = "flex";
      }
    });
  }
  allSkillTitle[0].style.width = "100%";
  skillContent[0].style.display = "flex";
})();

// rwd skill transform
(function () {
  const skillContent = select(".skillListRWD ul", true);
  const allSkillTitle = select(".skillListRWD div", true);
  const skillListRWD = select(".skillListRWD");
  let allSkillTitleLength = allSkillTitle.length;
  for (let i = 0; i < allSkillTitleLength; i++) {
    allSkillTitle[i].addEventListener("click", (e) => {
      if (skillContent[i].style.height === "150px") {
        about.style.gridTemplateRows = "repeat(8, 50px)";
        skillListRWD.style.gridRow = "6/9";
        skillContent[i].style.height = "0";
      } else {
        for (let i = 0; i < allSkillTitleLength; i++) {
          skillContent[i].style.height = "0";
        }
        about.style.gridTemplateRows = "repeat(11,50px)";
        skillListRWD.style.gridRow = "6/12";
        skillContent[i].style.height = "150px";
      }
    });
  }
})();

//contact info handle
(function () {
  const address = "js1031222@gmail.com";
  const contactName = select(".contactName");
  const contactEmail = select(".contactEmail");
  const contactAdvice = select(".contactAdvice");
  const contactMessage = select(".contactMessage");
  on("click", ".contactButton", () => {
    let name = contactName.value;
    let email = contactEmail.value;
    let advice = contactAdvice.value;
    if (!name || !email || !advice) {
      contactMessage.innerText = "有欄位未填寫";
      return;
    }
    const subject = "Hello from " + name;
    const body = `Hello James,%0AThis is ${name}%0A${advice}%0A%0A${email}%0A${name}`;
    const mailTo = `mailto:${address}?subject=${subject}&body=${body}`;
    window.open(mailTo);
    contactName.value = "";
    contactEmail.value = "";
    contactAdvice.value = "";
    contactMessage.innerText = "";
  });
})();
