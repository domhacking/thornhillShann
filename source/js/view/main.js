var Ractive = require('../module');
var $ = require('jquery');
var ScrollMagic = require('scrollMagic')
// var fullpage = require('fullpage.js');

module.exports = function() {

  return new Ractive({


    el: document.querySelector('.main'),

    template: require('./main.html'),

    data: {
    },

    computed: {
    },

    oninit: function() {

    },

    onrender: function() {

        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

        new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%"})
					.addIndicators()
					.addTo(controller);

    },





  });



};
