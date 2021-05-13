//Agregar fondo en scroll a navbar
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

//Inicializar tooltips
$('[data-toggle="tooltip"]').tooltip()


//Botones de cards
$(".card .btn").click(function(event) {
  event.preventDefault();
  $(this).siblings(".card-text").toggle();
});

//Cambiar color navbar
$(".navbar-toggler").click(function() {
  $(".navbar").toggleClass('bg-info');
});
