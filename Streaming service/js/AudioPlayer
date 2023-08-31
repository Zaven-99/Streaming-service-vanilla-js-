function showVolumeAndChangePlayIcon() {
  let play = document.querySelector(".play-button"),
    pause = document.querySelector(".pause-button"),
    playMusic = document.querySelectorAll(".playMusic"),
    volume = document.getElementById("volume-icon"),
    modalVolume = document.getElementById("volume-slider"),
    pauseButtons = document.querySelectorAll(".play3");

  play.addEventListener("click", () => {
    play.style.display = "none";
    pause.style.display = "block";
    // pauseButtons.forEach((item , i) => {
    //   item.src = "/img/icon/pause-orange.png";
    // })
  });
  pause.addEventListener("click", () => {
    play.style.display = "block";
    pause.style.display = "none";
  });

  let currentActiveButton = null;

  playMusic.forEach((item) => {
    item.addEventListener("click", () => {
      if (currentActiveButton !== item) {
        // Сбрасываем активное состояние у предыдущей активной кнопки
        if (currentActiveButton) {
          currentActiveButton.src = currentActiveButton.defaultSrc;
        }

        // Устанавливаем активное состояние для текущей кнопки
        currentActiveButton = item;
        item.defaultSrc = item.src;
        item.src = "/img/icon/pause-button.png";
      } else {
        // Если текущая кнопка уже активна, сбрасываем ее состояние
        item.src = item.defaultSrc;
        currentActiveButton = null;
      }
    });
  });

  pauseButtons.forEach((item) => {
    item.addEventListener("click", () => {
      if (currentActiveButton !== item) {
        // Сбрасываем активное состояние у предыдущей активной кнопки
        if (currentActiveButton) {
          currentActiveButton.src = currentActiveButton.defaultSrc;
        }

        // Устанавливаем активное состояние для текущей кнопки
        currentActiveButton = item;
        item.defaultSrc = item.src;
        item.src = "/img/icon/pause-orange.png";
        play.style.display = "none";
        pause.style.display = "block";
      } else {
        // Если текущая кнопка уже активна, сбрасываем ее состояние
        item.src = item.defaultSrc;
        currentActiveButton = null;
        play.style.display = "block";
        pause.style.display = "none";
      }
    });
  });

  volume.addEventListener("mouseover", () => {
    modalVolume.style.display = "block";
  });
  modalVolume.addEventListener("mouseover", () => {
    modalVolume.style.display = "block";
  });

  modalVolume.addEventListener("mouseout", () => {
    modalVolume.style.display = "none";
  });
}

showVolumeAndChangePlayIcon();

function volumeChangeImg() {
  const volumeSlider = document.getElementById("volume-slider");
  const volumeIcon = document.getElementById("volume-icon");
  let originalIconSrc = volumeIcon.src;
  let isMuted = false;

  volumeSlider.addEventListener("input", (event) => {
    const value = event.target.valueAsNumber;
    if (value === 0) {
      volumeIcon.src = "/img/icon/mute.png";
      isMuted = true;
    } else if (value <= 35) {
      volumeIcon.src = "/img/icon/low-volume.png";
      isMuted = false;
    } else if (value <= 70) {
      volumeIcon.src = "/img/icon/medium-volume.png";
      isMuted = false;
    } else if (value <= 100) {
      volumeIcon.src = "/img/icon/volume.png";
      isMuted = false;
    }
  });

  volumeIcon.addEventListener("click", () => {
    if (!isMuted) {
      originalIconSrc = volumeIcon.src; // Сохраняем изначальное состояние перед переключением в "mute"
      volumeIcon.src = "/img/icon/mute.png";
    } else {
      volumeIcon.src = originalIconSrc; // Восстанавливаем изначальное состояние
    }
    isMuted = !isMuted;
  });
}

volumeChangeImg();

function iconsColor() {
  let shuffle = document.querySelector(".shuffle_image"),
    repeat = document.querySelector(".repeat_image");

  let currentImagePath = shuffle.src;
  shuffle.addEventListener("click", () => {
    if (shuffle.src === currentImagePath) {
      shuffle.src = "/img/icon/shuffle2.png";
      repeat.src = currentImagePath1;
    } else {
      shuffle.src = currentImagePath;
    }
  });

  let currentImagePath1 = repeat.src;
  repeat.addEventListener("click", () => {
    if (repeat.src === currentImagePath1) {
      repeat.src = "/img/icon/repeat2.png";
      shuffle.src = currentImagePath;
    } else {
      repeat.src = currentImagePath1;
    }
  });
}
iconsColor();

let share2 = document.querySelector("[data-share2]"),
  modalShare2 = document.querySelector(".shareModal2"),
  adds = document.getElementById("adds"),
  addModal = document.querySelector(".addModal");

share2.addEventListener("click", () => {
  if (modalShare2.style.display === "block") {
    modalShare2.style.display = "none";
    share2.classList.remove("active");
    share2.classList.remove("show");
  } else {
    modalShare2.style.display = "block";
    share2.classList.add("active");
  }

  if (modalShare2.style.display === "block") {
    addModal.style.display = "none";
    adds.classList.remove("active");
    adds.classList.remove("show");
  }
});

adds.addEventListener("click", () => {
  if (addModal.style.display === "block") {
    addModal.style.display = "none";
    adds.classList.remove("active");
    adds.classList.remove("show");
  } else {
    addModal.style.display = "block";
    adds.classList.add("active");
  }

  if (addModal.style.display === "block") {
    modalShare2.style.display = "none";
    share2.classList.remove("active");
    share2.classList.remove("show");
  }
});

let forwardBtn = document.querySelector(".forward-button"),
  backBtn = document.querySelector(".back-button");

forwardBtn.addEventListener("click", () => {
  forwardBtn.style.width = "25px";

  setTimeout(function () {
    forwardBtn.style.width = "30px";
  }, 300);
});

backBtn.addEventListener("click", () => {
  backBtn.style.width = "25px";

  setTimeout(function () {
    backBtn.style.width = "30px";
  }, 300);
});
