$(document).ready(function () {
  /* SLICK SLIDER CONFIG */
  $(".slider").slick({
    infinite: false,
    slidesToShow: 1,
    speed: 500,
  });

  /* OPEN CATEGORY */

  $("#openSecondCategory").on("click", function () {
    let textBlock = $(".main__question__item__textContent");
    if (textBlock.hasClass("active")) {
      textBlock.slideDown();
      textBlock.removeClass("active");
      $(".iconPath").attr(
        "d",
        "M5.8 8.2C5.35817 8.2 5 8.55817 5 9C5 9.44183 5.35817 9.8 5.8 9.8V8.2ZM12.2 9.8C12.6418 9.8 13 9.44183 13 9C13 8.55817 12.6418 8.2 12.2 8.2V9.8ZM16.2 9C16.2 12.9765 12.9765 16.2 9 16.2V17.8C13.8601 17.8 17.8 13.8601 17.8 9H16.2ZM9 16.2C5.02355 16.2 1.8 12.9765 1.8 9H0.2C0.2 13.8601 4.13989 17.8 9 17.8V16.2ZM1.8 9C1.8 5.02355 5.02355 1.8 9 1.8V0.2C4.13989 0.2 0.2 4.13989 0.2 9H1.8ZM9 1.8C12.9765 1.8 16.2 5.02355 16.2 9H17.8C17.8 4.13989 13.8601 0.2 9 0.2V1.8ZM5.8 9.8H12.2V8.2H5.8V9.8Z"
      );
    } else {
      textBlock.slideUp();
      textBlock.addClass("active");
      $(".iconPath").attr(
        "d",
        "M9.8 5.8C9.8 5.35817 9.44183 5 9 5C8.55817 5 8.2 5.35817 8.2 5.8H9.8ZM8.2 12.2C8.2 12.6418 8.55817 13 9 13C9.44183 13 9.8 12.6418 9.8 12.2H8.2ZM5.8 8.2C5.35817 8.2 5 8.55817 5 9C5 9.44183 5.35817 9.8 5.8 9.8V8.2ZM12.2 9.8C12.6418 9.8 13 9.44183 13 9C13 8.55817 12.6418 8.2 12.2 8.2V9.8ZM16.2 9C16.2 12.9765 12.9765 16.2 9 16.2V17.8C13.8601 17.8 17.8 13.8601 17.8 9H16.2ZM9 16.2C5.02355 16.2 1.8 12.9765 1.8 9H0.2C0.2 13.8601 4.13989 17.8 9 17.8V16.2ZM1.8 9C1.8 5.02355 5.02355 1.8 9 1.8V0.2C4.13989 0.2 0.2 4.13989 0.2 9H1.8ZM9 1.8C12.9765 1.8 16.2 5.02355 16.2 9H17.8C17.8 4.13989 13.8601 0.2 9 0.2V1.8ZM8.2 5.8V12.2H9.8V5.8H8.2ZM5.8 9.8H12.2V8.2H5.8V9.8Z"
      );
    }
  });

  /* ADD CARD */

  $("#add_card").on("click", function () {
    $(
      '<div class="card card--main" style="border: 2px solid #d6bbfb; color:#d6bbfb;min-heihgt:450px;display:flex; align-items:center; justify-content:center">EMPTY CARD</div>'
    ).insertBefore($(".card--main").first());
  });
});
