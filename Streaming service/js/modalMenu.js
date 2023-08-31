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
