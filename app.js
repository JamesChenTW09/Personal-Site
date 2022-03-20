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

var typed = new Typed("#typed", {
  strings: ["front-end engineer", "beer lover", "cat lover"],
  backSpeed: 40,
  typeSpeed: 70,
  startDelay: 1000,
  backDelay: 900,
  loop: true,
});
window.onload = () => {
  let skillset = document.querySelector(".skill_title").children;
  let content = document.querySelectorAll(".skill_content p");
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
};
