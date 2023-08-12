function modalWindow(selector) {
  let user = document.querySelector(".user-img"),
    modal = document.querySelector(selector),
    div = document.querySelector(".main");

  user.addEventListener("mouseover", () => {
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
    play = document.querySelectorAll(".play");
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

  document.addEventListener("mousedown", (event) => {
    if (!blockAudioBook.contains(event.target)) {
      blockAudioBook.style.display = "none";
    }
  });

  x.addEventListener("click", closeModalAudioBook);
}
modalPodcast();
