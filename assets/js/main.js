$(window).scroll(function() {

  if ($(this).scrollTop() > 100) {
    $(".navbar").css({
      "background": "#17a2b8"
    })
  } else {
    $(".navbar").css({
      "background": "transparent"
    })
  }

})
