var Ractive = require('../module');
var $ = require("jquery");
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
var gsap = require("gsap");
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
			.addTo(controller);

        // new ScrollMagic.Scene({triggerElement: "#parallax2"})
		// 	.setTween("#parallax2 > div", {y: "60%"})
		// 	.addTo(controller);
        //
	    // new ScrollMagic.Scene({triggerElement: "#parallax3"})
		// 	.setTween("#parallax3 > div", {y: "60%"})
		// 	.addTo(controller);

        if (!('ontouchstart' in document.documentElement)
            && !navigator.MaxTouchPoints
            && !navigator.msMaxTouchPoints) {
            document.body.className += ' notouch';
        }
    },

  });



};
