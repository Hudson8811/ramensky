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
});
