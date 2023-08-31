function burger() {
  let shareTab = document.querySelectorAll(".share2");
  let allTabContents = document.querySelectorAll(".tabInPodcats");

  // Закрываем все окна вкладок
  function closeAllTabs() {
    allTabContents.forEach((content) => {
      content.classList.remove("active-tab");
    });

    shareTab.forEach((icon) => {
      icon.classList.remove("active");
    });
  }

  shareTab.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let t = e.currentTarget;
      let drop = t.closest(".podcast-item").querySelector(".tabInPodcats");

      // Если текущий share уже активен, то просто закрываем его
      if (t.classList.contains("active")) {
        drop.classList.remove("active-tab");
        t.classList.remove("active");
      } else {
        // Закрываем все окна вкладок перед открытием новой
        closeAllTabs();

        // Открываем текущую вкладку
        drop.classList.add("active-tab");
        t.classList.add("active");
        drop.classList.add("show");
      }
    });
  });

  // Закрываем вкладку по клику на подложку
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".tabInPodcats") && !e.target.closest(".share2")) {
      closeAllTabs();
    }
  });
}

burger();
