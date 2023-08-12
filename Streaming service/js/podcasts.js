let iconBlock = document.querySelectorAll(".icon-block"),
  icon = document.querySelectorAll(".icon"),
  innerBlock = document.querySelectorAll(".p-b_block__inner"),
  block = document.querySelectorAll(".p-b_block"),
  heart = document.querySelectorAll(".heart"),
  play = document.querySelectorAll(".play"),
  share = document.querySelectorAll(".share"),
  counts = document.querySelectorAll(".count"),
  num = document.querySelectorAll(".num"),
  podcastItem = document.querySelectorAll(".podcast-item"),
  noRecomend = document.querySelectorAll(".no");
heart2 = document.querySelectorAll(".heart2");

function showIcon1(icon) {
  icon.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.width = "40px";
    });

    item.addEventListener("mouseout", (e) => {
      e.target.style.width = "35px";
    });
  });
}
showIcon1(icon);

heart.forEach((item) => {
  let currentImagePath = item.src; // Сохраняем исходный путь к изображению
  item.addEventListener("click", (e) => {
    if (item.src === currentImagePath) {
      // Проверяем текущий путь к изображению
      item.src = "/img/icon/heart2.png";
    } else {
      item.src = currentImagePath;
    }
  });
});
noRecomend.forEach((item) => {
  let currentImagePath = item.src; // Сохраняем исходный путь к изображению
  item.addEventListener("click", (e) => {
    if (item.src === currentImagePath) {
      // Проверяем текущий путь к изображению
      item.src = "/img/icon/noRecomend.png";
    } else {
      item.src = currentImagePath;
    }
  });
});

function count() {
  const likeCountElements = document.querySelectorAll(".likeCount");

  likeCountElements.forEach((likeCount) => {
    const heart = likeCount.querySelector(".heart");
    const countElement = likeCount.querySelector(".count");

    let count = parseInt(countElement.dataset.count) || 0;
    let isIncreasing = true;

    heart.addEventListener("click", () => {
      if (isIncreasing) {
        count++;
      } else {
        count--;
      }

      countElement.dataset.count = count;
      countElement.textContent = count;

      isIncreasing = !isIncreasing;
    });
  });
}

count();
