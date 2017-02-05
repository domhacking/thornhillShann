/**
 * @module:   about
 * @scss:     ./source/css/module/about.scss
 * @html:     ./source/js/module/about/about.html
 */


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./about.html'),

  onrender: function() {
    //   (function(){
      //
    //     var parallax = document.querySelectorAll(".parallax"),
    //         speed = 0.5;
      //
    //     window.onscroll = function(){
    //       [].slice.call(parallax).forEach(function(el,i){
    //          var windowWidth = window.innerWidth * 1.5,
    //              windowYOffset = window.pageYOffset - windowWidth,
    //              elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
      //
    //         el.style.backgroundPosition = elBackgrounPos;
      //
    //       });
    //     };
      //
    //     })();
  }

});
