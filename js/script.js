$("document").ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger, .header__nav, header").toggleClass("active");
    if ($(window).scrollTop() > $(".section-services").offset().top) {
      $(".logo,.header__link,.header__burger,.header__burger span").toggleClass(
        "black"
      );
    }
    $("body").toggleClass("lock");
  });
  $(".slider__members").slick({
    slidesToShow: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".clients-feedbacks").slick({
    arrows: false,
    dots: true,
    draggable: false,
    touchMove: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 1200,
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= $(".section-services").offset().top - 70) {
    $(".logo,.header__link,.header__burger,.header__burger span").addClass(
      "black"
    );
    $("header").addClass("small");
  } else {
    $(".logo,.header__link,.header__burger,.header__burger span").removeClass(
      "black"
    );
    $("header").removeClass("small");
  }
});
