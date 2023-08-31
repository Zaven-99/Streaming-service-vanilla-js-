//прежде чем начать нужно завернуть блок со слайдами еще в один блок , главная обертка будет как окошко через которое мы будем видеть определенный слайд
//1 шаг) находим слайды slides
//2 шаг) находим кнопку назад prev
//3 шаг) находим кнопку вперед next
//4 шаг) находим общее количество слайдов total
//5 шаг) находим определенное количество слайдов current
//6 шаг) находим главную обертку
//7 шаг) находим внутренную обертку
//8 шаг) находим ширину главной обертки (window.getComputedStyle(главная обертка)).width

//----РАБОТА С ИНДЕКСОМ И ОТСТУПОМ ----

//9 шаг) пишием индекс слайдов index = 1
//10 шаг) пишем отступ для слайдов offset = 0

//----РАБОТА С СТИЛЯМИ----

//11 шаг) установить ширину внутренной обертки присвоить выражение длина слайдов умноженно на 100 и плюс '%'
//12 шаг) установить display = 'flex' внутренной обертке
//13 шаг) установить transition = '0.5 all' внутренной обертке
//14 шаг) перебираем слайды и устанавливаем ширину = ширина
//15 шаг) установить главной обертке overflow = 'hidden'

//----РАБОТА С КЛИКАМИ----
//16 шаг) вешаем клики на next

//17 шаг) если отступ равен(offset) = (+ширине одного слайда.replace(/\D/g , '')  * (кол.слайдов - 1)) , то отступ offset = 0
//Если нет , то отступ (offset) +=  (ширине одного слайда.replace(/\D/g , '')
//18 шаг) установить transform = `translate(-{offset}px)` внутренной обертке
//19 шаг) если индекс равен длине слайдов то индекс равен 1 иначе индекс увеличиваем на 1
//20 шаг) если длина слайдов меньше чем 10 , то current.textContent = `0${index}` , иначе current.textContent = index

//21 шаг) делаем то же самое для prev. Если отступ (offset) равен 0 то к отступу присваивается(offset) = (+ширине одного слайда.replace(/\D/g , '')  * (кол.слайдов - 1))
//Если нет , то отступ (offset) -=  (ширине одного слайда.replace(/\D/g , '')
//22 шаг) установить transform = `translate(-{offset}px)` внутренной обертке
//23 шаг) если индекс равен 1 то индекс равен длине слайдов, иначе индекс уменьшаем на 1
//24 шаг) если длина слайдов меньше чем 10 , то current.textContent = `0${index}` , иначе current.textContent = index

//----РАБОТА С НУМЕРАЦИЕЙ----

// 25 шаг) если длина слайдов меньше чем 10 берем общее количество и добавляем 0 иначе добавляем общую длину слайдов
// 26 шаг) если длина слайдов меньше чем 10 берем текущее количество добавляем 0 иначе добавляем индекс

let slides = document.querySelectorAll(".img-album"),
  prev = document.querySelector(".arrow-left"),
  next = document.querySelector(".arrow-right"),
  total = document.querySelector(".total"),
  current = document.querySelector(".current"),
  slideWrapper = document.querySelector(".interesting-wrapper"),
  slidesInner = document.querySelector(".interesting-inner"),
  width = window.getComputedStyle(slideWrapper).width;

let index = 1;
let offset = 0;

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${index}/`;
} else {
  total.textContent = slides.length;
  current.textContent = index;
}

slidesInner.style.width = 101 * slides.length + "%";
slidesInner.style.display = "flex";
slidesInner.style.transition = "0.5s all";

slideWrapper.style.overflow = "hidden";

slides.forEach((slide) => {
  slide.style.width = "1800px";
  slide.style.height = "310px";
});

next.addEventListener("click", () => {
  if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.replace(/\D/g, "");
  }
  slidesInner.style.transform = `translateX(-${offset}px)`;

  if (index == slides.length) {
    index = 1;
  } else {
    index++;
  }

  if (slides.length < 10) {
    current.textContent = `0${index}/`;
  } else {
    current.textContent = index;
  }
});

prev.addEventListener("click", () => {
  if (offset == 0) {
    offset = +width.replace(/\D/g, "") * (slides.length - 1);
  } else {
    offset -= +width.replace(/\D/g, "");
  }
  slidesInner.style.transform = `translateX(-${offset}px)`;

  if (index == 1) {
    index = slides.length;
  } else {
    index--;
  }

  if (slides.length < 10) {
    current.textContent = `0${index}/`;
  } else {
    current.textContent = index;
  }
});
