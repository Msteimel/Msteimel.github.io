$(function() {

 /* Smooth Scrolling */
  $('a[href^="#home"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $('a[href^="#location"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $('a[href^="#npc"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $('a[href^="#setting"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $('a[href^="#history"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
 
 /* Top Selectors */
 $('.index-list').on('mouseenter', '.index-list-item',function() { 
   $(this).find('.info').slideDown('slow');  
              });

/* Blackwood Map */ 

 $('.map').on('mouseenter', '.blackwood-area-map',function() { 
   $(this).find('span').slideDown('slow');  
              });

 $('.map').on('mouseleave', '.blackwood-area-map',function() { 
   $(this).find('span').slideUp('slow');  
              });

/* Arlo Holstaad */ 

 $('#npc').on('mouseenter', '.arlo-pic',function() { 
   $(this).find('span').slideDown('slow');  
              });

 $('#npc').on('mouseleave', '.arlo-pic',function() { 
   $(this).find('span').slideUp('slow');  
              });

 /* Characters */
   $('.character-list').on('mouseenter', '.character',function() { 
   $(this).find('.info').slideDown('slow');  
              });

/* orc leader */  
   $('#setting').on('mouseenter', '.monster',function() { 
   $(this).find('span').slideDown('slow');  
              });

 $('#setting').on('mouseleave', '.monster',function() { 
   $(this).find('span').slideUp('slow');  
              }); 

/*Big Map */
  $('#history').on('mouseenter', '.big-map',function() { 
   $(this).find('span').slideDown('slow');  
              });

 $('#history').on('mouseleave', '.big-map',function() { 
   $(this).find('span').slideUp('slow');  
              }); 

});
