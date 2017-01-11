/**
 * @module:   testimonials
 * @scss:     ./source/css/module/testimonials.scss
 * @html:     ./source/js/module/testimonials/testimonials.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./testimonials.html'),

  onrender: function(){
    //   (function(){
      //
    //     var parallaxTestimonials = document.querySelectorAll(".parallax-testimonials"),
    //         speed = 0.5;
      //
    //     window.onscroll = function(){
    //       [].slice.call(parallaxTestimonials).forEach(function(el,i){
    //          var windowWidth = window.innerWidth,
    //              windowYOffset = window.pageYOffset,
    //              elBackgrounPos = "50% " + (windowYOffset * speed) + "%";
      //
    //         el.style.backgroundPosition = elBackgrounPos;
      //
    //       });
    //     };
      //
    //     })();
  }

});
