let icon = document.querySelectorAll(".icon"),
  noRecomend = document.querySelectorAll(".no");

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
