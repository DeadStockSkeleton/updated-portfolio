Splitting();

$(".nav-link").on("click", function(e) {
    $(".nav-link").removeClass("active");
    $(this).addClass("active", 300);
    e.preventDefault();
  });