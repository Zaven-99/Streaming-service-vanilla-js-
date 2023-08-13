let heart = document.querySelectorAll(".heart");

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

function count(selector) {
  const likeCountElements = document.querySelectorAll(selector);

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

count(".likes");
count(".likeCount");
