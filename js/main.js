window.addEventListener("DOMContentLoaded", (e) => {
  const burger = document.querySelector(".burger");
  const crossBurger = document.querySelector(".cross-burger");
  const menu = document.querySelector(".header-nav--adaptive--320");
  const list = document.querySelector(".header-nav-list--adaptive--320");
  burger.addEventListener("click", (e) => {
    menu.classList.add("header-nav--adaptive--320--active");
    list.classList.add("header-nav-list--adaptive--320--active");
    document.querySelector('html').style.overflow = 'hidden';
  });

  menu.addEventListener("click", () => {
    menu.classList.remove("header-nav--adaptive--320--active");
    list.classList.remove("header-nav-list--adaptive--320--active");
        document.querySelector('html').style.overflow = 'auto';
  });

  crossBurger.addEventListener("click", (e) => {
    menu.classList.remove("header-nav--adaptive--320--active");
    list.classList.remove("header-nav-list--adaptive--320--active");
        document.querySelector('html').style.overflow = 'auto';
  });

  const search = document.querySelector(".header-bottom-search-btn-1");
  const searchOverlay = document.querySelector(".header-search-input-adaptive");
  const searchCross = document.querySelector(".input-cross");
  const searchIsAvalible = document.querySelector(
    ".header-bottom-search__input--adaptive"
  );
  search.addEventListener("click", (e) => {
    searchOverlay.classList.add("header-search-input-adaptive--active");
  });
  searchCross.addEventListener("click", (e) => {
    searchOverlay.classList.remove("header-search-input-adaptive--active");
    searchIsAvalible.value = "";
  });
  document
    .querySelectorAll(".projects-grid__button")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".projects-grid__button")
          .forEach((element) => {
            element.classList.remove("projects-grid__button--active");
          });
        document.querySelectorAll(".projects-grid").forEach((elem) => {
          elem.classList.remove("projects-grid--active");
        });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("projects-grid--active");
        event.currentTarget.classList.add("projects-grid__button--active");
      });
    });
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.7696698438275, 37.63986874125036],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });

    let myPlacemark = new ymaps.Placemark(
      [55.7696698438275, 37.63986874125036],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/location.svg",
        iconImageSize: [12, 12],
        iconImageOffset: [15, 30],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }

  document
    .querySelector(".cross-popup")
    .addEventListener("click", function (e) {
      document
        .querySelector(".contacts-popup")
        .classList.toggle("contacts-popup--disactive");
    });
});
