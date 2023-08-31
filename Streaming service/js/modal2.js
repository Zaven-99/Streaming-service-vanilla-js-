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
