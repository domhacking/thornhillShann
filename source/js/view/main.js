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
    

		// get all slides


        // $('#fullpage').fullpage({
        //     anchors:['home', 'about', 'projects', 'offer', 'testimonials', 'contact'],
        //     menu: 'navMenu'
        // });
    },





  });



};
