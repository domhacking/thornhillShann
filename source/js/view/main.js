var Ractive = require('../module');
var $ = require("jquery");
var ScrollMagic = require("scrollmagic");
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
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

        console.log(controller);

        new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%"})
					.addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "60%"})
					.addTo(controller);

	    new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "60%"})
					.addTo(controller);

        var wipeAnimation = new TimelineMax()
        			.fromTo("activeImage.image0", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        			.fromTo("activeImage.image1", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        			.fromTo("activeImage.image2", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        			.fromTo("activeImage.image3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

            		// create scene to pin and link animation
            		new ScrollMagic.Scene({
            				triggerElement: "#pinContainer",
            				triggerHook: "onLeave",
            				duration: "300%"
            			})
            			.setPin("#pinContainer")
            			.setTween(wipeAnimation)
            			.addTo(controller);

    },





  });



};
