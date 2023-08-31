let dataBlock = document.querySelectorAll("[data-block]"),
  shareOpen = document.querySelectorAll(".shareOpen");

const newModal = document.createElement("div");
newModal.innerHTML = `
              <div class="shareModal3">
                <div class="shareModal3-inner">
                  <a href="#"><img class="vk" src="/img/icon/vk.png" alt=""></a>
                  <a href="#"><img class="telegramm" src="/img/icon/telegramm.png" alt=""></a>
                  <a href="#"><img class="TikTok" src="/img/icon/tiktok.png" alt=""></a>
                </div>
              </div>
            `;

dataBlock.forEach((block) => {
  block.appendChild(newModal.cloneNode(true));
});

shareOpen.forEach((item, index) => {
  item.addEventListener("click", () => {
    dataBlock.forEach((block, i) => {
      const modal = block.querySelector(".shareModal3");
      if (modal.classList.contains("active")) {
        modal.classList.remove("active");
      } else if (i === index) {
        modal.classList.add("active");
      } else {
        modal.classList.remove("active");
      }
    });
  });
});

// Добавляем обработчик событий на документ для закрытия модального окна при клике вне его
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".shareModal3") &&
    !event.target.closest(".shareOpen")
  ) {
    dataBlock.forEach((block) => {
      const modal = block.querySelector(".shareModal3");
      modal.classList.remove("active");
    });
  }
});
