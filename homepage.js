$(function() {

/**
 *  Scroll window to an element
 */
$('a[href^="#story"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/**
 *  Scroll window to an element
 */
$('a[href^="#elements"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/**
 *  Scroll window to an element
 */
$('a[href^="#get-in-touch"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

});
