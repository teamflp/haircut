// Path: assets\js\scripts.js
'use strict';

// Fonction pour afficher le menu

$(document).ready(function() {
     $('.js-menu-toggle').click(function (e) {
          e.preventDefault();
          $('.js-menu').slideToggle();
     });
});

// Media Queries

const media_queries = {
     'mobile': 480,
     'tablet': 768,
     'desktop': 1024
};

// On attend que le DOM soit chargé
$(document).ready(function () {
     // On écoute le resize de la fenêtre
     $(window).resize(function () {
          // On récupère la largeur de la fenêtre
          let width = $(window).width();
          // On définit la taille de la fenêtre
          let size = 'desktop';
          // On vérifie si la taille de la fenêtre est inférieure à 480px
          if (width < media_queries.mobile) {
               size = 'mobile';
               // On donne les classes pour le mobile
               $('.container').addClass('container');
               $('.d-flex').addClass('d-flex');

               // On donne la taille du text pour le mobiles en h1 et h2 et h3
               $('h1').addClass('text-size');
               $('h2').addClass('text-size');
               $('h3').addClass('text-size');

          } else if (width < media_queries.tablet) {
               size = 'tablet';
          }
          // On ajoute la classe correspondante à la taille de la fenêtre
          $('body').attr('data-size', size);
     });
     // On déclenche le resize pour initialiser la taille de la fenêtre
     $(window).resize();
});

// On crée un menu déroulant sur la navbar 
$(document).ready(function () { 
     $('.menu').click(function (e) { 
          e.preventDefault(); 
          $('.dropdown').slideToggle(); 
     }); 
});
     
// Create carousel with


$(document).ready(function () {
     $('.carousel').carousel({
          interval: 5000,
          pause: 'hover',
          wrap: true,
          prevNext: true,
          indicators: true,
          nav: true,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: true,
          dotsClass: 'd-flex align-items-center justify-content-center',
          nextSelector: '.carousel-item.active',
          prevSelector: '.carousel-item.active'
     });
});


// On crée un carousel JavaScript
const carousel = new Carousel(); // Nouvelle instance de la classe Carousel

$(document).ready(function () {
     carousel.init();
});

// On démarre un carousel JavaScript

$(document).ready(function () {
     carousel.init();
});

