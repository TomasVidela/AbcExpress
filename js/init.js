(function($){
  $(function(){


 $(".button-collapse").sideNav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space
// ----------------------------------------------------------------------------
//slideshow encabezado
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$(document).ready(function(){
  $('.carousel').carousel(
  {
    dist: 0,
    padding: 0,
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
});

autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6500);
}

// ----------------------------------------------------------------------------
//menu expandible
function expandAll(){
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
}

function collapseAll(){
  $(".collapsible-header").removeClass(function(){
    return "active";
  });
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}
// ----------------------------------------------------------------------------
// ventana modal//
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


  $(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 270, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { }, // A function to be called when sideNav is opened
      onClose: function(el) { }, // A function to be called when sideNav is closed
    }
  );
});


// ----------------------------------------------------------------------------
//funcion  icono + y - menos //
$(document).ready(function(){
$( ".collapsible-header" ).click(function() {
  $(".more",this).toggle()
  $(".less", this).toggle()
});
});









// Pushpin Demo Init
if ($('.pushpin-demo-nav').length) {
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
}

// Floating-Fixed table of contents
   setTimeout(function() {
     var tocWrapperHeight = 260; // Max height of ads.
     var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
     var socialHeight = 95; // Height of unloaded social media in footer.
     var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
     var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

     if ($('nav').length) {
       $('.toc-wrapper').pushpin({
         top: $('nav').height(),
         bottom: bottomOffset
       });
     }
     else if ($('#index-banner').length) {
       $('.toc-wrapper').pushpin({
         top: $('#index-banner').height(),
         bottom: bottomOffset
       });
     }
     else {
       $('.toc-wrapper').pushpin({
         top: 0,
         bottom: bottomOffset
       });
     }
   }, 100);


// Reservar --------------------------------------------------------------


    // EFECTO DEL BOTON  DE VER MAS  Y VER MENOS
    $(".show-more").click(function(event) {
      var txt = $(".hide-part").is(':visible') ? 'VER MÁS' : 'VER MENOS';
      $(".hide-part").toggleClass("show-part");
      $(this).html(txt);
      event.preventDefault();
    });




// CUENTAS: para que funcione formularios de seleccion

    $(document).ready(function() {
  $('select').material_select();
});


  $('select').material_select('destroy');
