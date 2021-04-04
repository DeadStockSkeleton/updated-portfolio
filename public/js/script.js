Splitting();

$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active", 300);
    
  });

  let index = 1;
  showSlide(index);

  function plus(n) {
    showSlide((index += n));
  }
  $(".prev").on("click", function () {
    plus(-1);
  });
  $(".next").on("click", function () {
    plus(1);
  });
  function showSlide(n) {
    let slides = $(".slides");

    if (n > slides.length) {
      index = 1;
    }

    if (n < 1) {
      index = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      $(slides[i]).css("display", "none");
    }

    $(slides[index - 1]).css("display", "block");
  }