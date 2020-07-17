$(document).ready(function () {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");

  $(document).on("click", ".pt_heading_item", function () {
    var id = $(this).data("id");

    if (!$(this).hasClass("active")) {
      $(".pt_heading_item").removeClass("active").addClass("disabled");
      $(this).addClass("active");

      $(".pt_content")
        .fadeOut(300)
        .promise()
        .done(function () {
          $('.pt_content[data-id="' + id + '"]').fadeIn(300);

          $(".pt_heading_item").removeClass("disabled");
        });
    }
  });

  $(".slider").slick({
    slidesToShow: 2,
    rows: 2,
    slidesToScroll: 2,
    prevArrow: $(".slider_prev"),
    nextArrow: $(".slider_next"),
    dots: true,
    dotsClass: "slider_dots",
  });
});
