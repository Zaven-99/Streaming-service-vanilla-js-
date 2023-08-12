const mouseOverAndOut = (selector) => {
  let menuNav = document.querySelectorAll(selector);
  menuNav.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
      item.style.transition = "1s";
    });
    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
      item.style.transition = "1s";
    });
  });
};

mouseOverAndOut(".menu-navigation");
