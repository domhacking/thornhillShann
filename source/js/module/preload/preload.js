/**
 * @module:   preload
 * @scss:     ./source/css/module/preload.scss
 * @html:     ./source/js/module/preload/preload.html
 */


var Module = require('../abstract-module');
var $ = require('jquery');

module.exports = Module.extend({

  template: require('./preload.html'),

  onrender: function() {
      $(window).on('load', function() {
          $(".preload").addClass("loaded");
      });
  }

});
