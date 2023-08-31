function modalWindow(selector) {
  let user = document.querySelector(".user-img"),
    modal = document.querySelector(selector),
    div = document.querySelector(".main");

  user.addEventListener("click", () => {
    modal.style.display = "block";
    modal.classList.add("show");
    modal.classList.remove("hide");
  });

  document.addEventListener("mousedown", (event) => {
    if (!modal.contains(event.target)) {
      modal.style.display = "none";
    }
  });
}
modalWindow(".modal-user");

function modalPodcast() {
  let x = document.querySelector(".x"),
    blockAudioBook = document.querySelector(".block_audio-book"),
    play = document.querySelectorAll(".playOpen");
  main = document.querySelector(".main");

  let isModalOpen = false;
  play.forEach((item) => {
    item.addEventListener("click", () => {
      if (isModalOpen) {
        blockAudioBook.style.display = "none";
        blockAudioBook.classList.add("show");
        blockAudioBook.classList.remove("hide");
      } else {
        blockAudioBook.style.display = "block";
        blockAudioBook.classList.add("show");
        blockAudioBook.classList.remove("hide");
      }
      isModalOpen = !isModalOpen;
    });
  });

  function closeModalAudioBook() {
    blockAudioBook.style.display = "none";
    blockAudioBook.classList.add("hide");
    // blockAudioBook.style.remove("show");
  }

  // document.addEventListener("mousedown", (event) => {
  //   if (!blockAudioBook.contains(event.target)) {
  //     blockAudioBook.style.display = "none";
  //   }
  // });

  x.addEventListener("click", closeModalAudioBook);
}
modalPodcast();

function share() {
  let share = document.querySelector("[data-share]"),
    modalShare = document.querySelector(".shareModal");

  share.addEventListener("click", () => {
    if (modalShare.style.display === "block") {
      modalShare.style.display = "none";
      share.classList.remove("active");
      share.classList.remove("show");
    } else {
      modalShare.style.display = "block";
      share.classList.add("active");
    }
  });
}
share();

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

function share4Modal() {
  let share4 = document.querySelectorAll(".share4"),
    wrapper = document.querySelectorAll(".tracks"),
    track = document.querySelectorAll(".track");

  const newModal2 = document.createElement("div");
  newModal2.innerHTML = `<div class=" modal-share">
  <div class="modal-block-podcast menu-navigation ">
      <div class="modal-icon-inner  iconInPod-block">
          <img src="/img/icon/adds.png " alt="">
      </div>
      <div class="addQueue ">Ավելացնել հերթում</div>
  </div>
  <div class="modal-block-podcast menu-navigation">
      <div class="modal-icon-inner iconInPod-block">
          <img src="/img/icon/plus.jpg" alt="">
      </div>
      <div class="addQueue ">Ավելացնել երգացանկին</div>
  </div>
  <div class="modal-block-podcast menu-navigation">
      <div class="modal-icon-inner iconInPod-block share3">
          <img src="/img/icon/share.png" alt="">
      </div>
      <div class="addQueue ">Կիսվել</div>
  </div>
  <div class="modal-block-podcast menu-navigation">
      <div class="modal-icon-inner iconInPod-block ">
          <img class='heart' src="img/icon/heart.png" alt="">
      </div>
      <div class="addQueue ">Բաժանորդագրվել պոդկաստին</div>
  </div>
</div>`;

  wrapper.forEach((parentBlock) => {
    parentBlock.appendChild(newModal2.cloneNode(true));
  });

  share4.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.forEach((parentBlock, i) => {
        const modal2 = parentBlock.querySelector(".modal-share");
        if (i === index) {
          modal2.classList.toggle("active-tab");
          modal2.classList.toggle("show");
          modal2.style.width = "320px";
        } else {
          modal2.classList.remove("active-tab");
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".modal-share") &&
      !event.target.closest(".share4")
    ) {
      wrapper.forEach((block) => {
        const modal2 = block.querySelector(".modal-share");
        modal2.classList.remove("active-tab");
      });
    }
  });
}
share4Modal();

let play3 = document.querySelectorAll(".play3"),
  chartImg = document.querySelectorAll(".chart_img");

play3.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    chartImg.forEach((img, i) => {
      if (i === index) {
        img.classList.toggle("active");
      }
    });
  });
  item.addEventListener("mouseout", () => {
    chartImg.forEach((img) => {
      img.classList.remove("active");
    });
  });
});
