document.addEventListener("DOMContentLoaded", () => {
  let langBtnUp = document.getElementById("up"),
    langBtnDown = document.getElementById("down"),
    arm = document.getElementById("arm"),
    ru = document.getElementById("ru"),
    eng = document.getElementById("eng"),
    parent = document.querySelector(".flag-block"),
    childElem = parent.children;

  function cahngeLang() {
    let data = {
      russian: {
        main: "Главная",
        podcastsAndBook: "Подкасты и книги",
        forChild: "Для детей",
        streams: "Стримы",
        collection: "Коллекции",
        activatedpromo: "Активируйте промокод",
        support: "Поддержка",
        setting: "Параметры",
        logOut: "Выйти",
      },
    };

    function arrowDown() {
      langBtnUp.style.display = "none";
      langBtnDown.style.display = "block";
    }
    function arrowUp() {
      langBtnUp.style.display = "block";
      langBtnDown.style.display = "none";
    }
    function menuShow() {
      arm.style.display = "block";
      ru.style.display = "block";
      eng.style.display = "block";
    }
    function chooseArm() {
      ru.style.display = "none";
      eng.style.display = "none";
    }
    function chooseRu() {
      arm.style.display = "none";
      eng.style.display = "none";
    }
    function chooseEng() {
      ru.style.display = "none";
      arm.style.display = "none";
    }
    /////////////////////////////////////////////////////////////
    langBtnUp.addEventListener("click", () => {
      arrowDown();
      for (let i = 0; i < childElem.length; i++) {
        if (i >= 1 && i <= 2) {
          childElem[i].style.display = "none";
        }
      }

      // ru.style.display = 'none'
      // eng.style.display = 'none'
    });
    /////////////////////////////////////////////////////////////
    langBtnDown.addEventListener("click", () => {
      arrowUp();
      menuShow();
    });
    /////////////////////////////////////////////////////////////
    arm.addEventListener("click", (e) => {
      console.log("arm");
      parent.prepend(arm);
      chooseArm();
      arrowDown();
    });
    ru.addEventListener("click", () => {
      console.log("ru");
      parent.prepend(ru);
      chooseRu();
      arrowDown();
    });
    eng.addEventListener("click", () => {
      console.log("eng");
      parent.prepend(eng);
      chooseEng();
      arrowDown();
    });
  }
  cahngeLang();

  function socialModal() {
    let langBtnUp2 = document.getElementById("up2"),
      langBtnDown2 = document.getElementById("down2"),
      modal = document.querySelector(".subscribe-modal"),
      parentBlock = document.querySelector(".footer-block");

    function arrowDown() {
      langBtnUp2.style.display = "none";
      langBtnDown2.style.display = "block";
    }
    function arrowUp() {
      langBtnUp2.style.display = "block";
      langBtnDown2.style.display = "none";
    }

    langBtnDown2.addEventListener("click", (e) => {
      arrowUp();
      modal.style.display = "none";
    });

    langBtnUp2.addEventListener("click", () => {
      arrowDown();
      modal.style.display = "block";
    });

    document.addEventListener("mousedown", (event) => {
      const modal = document.querySelector(".subscribe-modal");
      if (!modal.contains(event.target)) {
        modal.style.display = "none";
        arrowUp();
      }
    });
  }
  socialModal();
});
