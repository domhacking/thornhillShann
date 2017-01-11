/**
* @module:   nav
* @scss:     ./source/css/module/nav.scss
* @html:     ./source/js/module/nav/nav.html
*/

nav = [
    {
        navItem: "about",
        dataAnchor: "about"
    },
    {
        navItem: "projects",
        dataAnchor: "projects"
    },
    {
        navItem: "what we offer",
        dataAnchor: "offer"
    },
    {
        navItem: "testimonials",
        dataAnchor: "testimonials"
    },
    {
        navItem: "contact",
        dataAnchor: "contact"
    }
];


var Module = require('../abstract-module');
var $ = require('jquery');


module.exports = Module.extend({

    template: require('./nav.html'),

    data: {
        nav : nav
    },

    oninit: function(){
        this.on('burger', this.onBurgerClick);
        this.on('removeWrapper', this.onBurgerClick);
    },

    onrender: function() {
        var nav = document.querySelector('.nav');
        var navHeight = nav.offsetHeight;

        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));

            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - navHeight
                }, 1000);
            }
        });

        $(window).scroll(function() {
            console.log('test');
            var scroll = $(window).scrollTop();
            var halfWindowHeight = window.innerHeight / 2;
            console.log(halfWindowHeight);

            if (scroll <= halfWindowHeight) {
                $(".nav").removeClass("nav__scrolled");
            } else {
                $(".nav").addClass("nav__scrolled");
            }
        }); //missing );

    },

    onBurgerClick: function(){
        this.toggle('expanded')
    }







});
