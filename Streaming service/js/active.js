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

function active(selector) {
  let menuNav = document.querySelectorAll(selector);
  menuNav.forEach((item) => {
    item.addEventListener("click", (e) => {
       
      menuNav.forEach((item) => {
        item.classList.remove("active1");
      });

     
      item.classList.add("active1");
    });
  });
}
active(".menu-nav");
active(".about-music_navigation");
