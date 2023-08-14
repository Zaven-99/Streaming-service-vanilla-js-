function showVolumeAndChangePlayIcon() {
  let play = document.querySelector(".play-button"),
    pause = document.querySelector(".pause-button"),
    playMusic = document.querySelectorAll(".playMusic"),
    volume = document.getElementById("volume-icon"),
    modalVolume = document.getElementById("volume-slider");

  play.addEventListener("click", () => {
    play.style.display = "none";
    pause.style.display = "block";
  });
  pause.addEventListener("click", () => {
    play.style.display = "block";
    pause.style.display = "none";
  });

  playMusic.forEach((item) => {
    let currentImagePath = item.src; // Сохраняем исходный путь к изображению
    item.addEventListener("click", (e) => {
      if (item.src === currentImagePath) {
        // Проверяем текущий путь к изображению
        item.src = "/img/icon/pause-button.png";
      } else {
        item.src = currentImagePath;
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
  const currentValue = document.getElementById("current-value");
  const volumeIcon = document.getElementById("volume-icon");

  volumeSlider.addEventListener("input", (event) => {
    const value = event.target.valueAsNumber;
    // currentValue.textContent = `${value}`;

    if (value <= 35) {
      volumeIcon.src = "/img/icon/low-volume.png";
    } else if (value <= 70) {
      volumeIcon.src = "/img/icon/medium-volume.png";
    } else {
      volumeIcon.src = "/img/icon/volume.png";
    }
  });
}

volumeChangeImg();
