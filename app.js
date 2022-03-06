(function () {
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
  on("click", ".nav_burger", function (e) {
    select(".hidden_nav").classList.toggle("nav_active");
    this.classList.toggle("toggle");
  });
})();

window.addEventListener("scroll", (e) => {
  let aboutPage = document.querySelector(".about");
  if (window.scrollY > 180) {
    aboutPage.style.opacity = "1";
  }
});
window.addEventListener("load", (e) => {
  let aboutPage = document.querySelector(".about");
  if (window.scrollY > 180) {
    aboutPage.style.opacity = "1";
  }
});

var typed = new Typed("#typed", {
  strings: ["front-end engineer", "beer lover", "cat lover"],
  backSpeed: 40,
  typeSpeed: 70,
  startDelay: 1000,
  backDelay: 900,
  loop: true,
});

let skillList = document.querySelector(".skill ul");
let skillContent = document.querySelector(".skill_content");
skillList.children[0].addEventListener("click", (e) => {
  skillContent.style.transform = "scale(1)";
  var typed = new Typed("#typed1", {
    strings: [
      "sjefrnreskjfnk jesnfjsenfjsenkfjnse skjefnksjefnkj sskejbfk jsebfkj sfrnreskjfnk jesnfjsenfjsenkfjnse skjefnksjeffrnreskjfnk jesnfjsenfjsenkfjnse skjefnksjefe",
    ],
    typeSpeed: 40,
    startDelay: 1000,
    loop: false,
  });
});

//navlink 自動滾動
let myLink = document.querySelector(".nav_links");
myLink.children[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
});
myLink.children[1].addEventListener("click", () => {
  window.scrollTo(0, 640);
});
myLink.children[2].addEventListener("click", () => {
  window.scrollTo(0, 1140);
});
myLink.children[3].addEventListener("click", () => {
  window.scrollTo(0, 2170);
});