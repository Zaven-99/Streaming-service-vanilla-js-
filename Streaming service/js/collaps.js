function collaps() {
  let shareTab = document.querySelectorAll(".share2");
  let tabInPodcats = document.querySelectorAll(".tabInPodcats");

  shareTab.forEach((share) => {
    share.addEventListener("click", (e) => {
      tabInPodcats.forEach((item) => {
        if (item.style.display == "block") {
          item.style.display = "none";
          item.classList.remove("show");
          item.classList.remove("active");
        } else {
          item.style.display = "block";
          item.classList.add("show");
          item.classList.add("active");
        }
      });
    });
  });
}

collaps();
