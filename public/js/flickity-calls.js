(function ($) {
  $(".carousel").flickity({
    // options
    cellAlign: "left",
    // contain: true,
    wrapAround: true,
    imagesLoaded: true,
    // selectedAttraction: 0.6,
    // friction: 1,
  });
  console.log("flickty calls");
})(jQuery);
