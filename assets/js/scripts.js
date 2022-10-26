// Path: assets\js\scripts.js
'use strict'; 

// ========================================================================================
// On affiche le menu en cliquant sur le bouton hamburger et on ajoute la class SlideInDown
// ========================================================================================

$(document).ready(function () {
     // On affiche le menu en cliquant sur le bouton hamburger et on ajoute la class SlideInDown
     $('.menu__hamburger').on('click', function () {
          $('.navbar__menu').toggle("slideInDown");
     });
});


// ========================================================================================
// On fait apparaitre le bouton de retour en haut de page
// ========================================================================================

$(window).scroll(function () { 
     if ($(this).scrollTop() > 100) { 
          $('#btn__top').fadeIn(600); 
     } else { 
          $('#btn__top').fadeOut(); 
     } 
});

// ========================================================================================
// On fait apparaitre fuidement les images au scroll
// ========================================================================================
$(window).scroll(function () { 
     if ($(this).scrollTop() > 100) {
          $(".img-100").fadeIn(600);
     }
});