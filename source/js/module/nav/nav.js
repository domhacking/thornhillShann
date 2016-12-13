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

module.exports = Module.extend({

  template: require('./nav.html'),

  data: {
      nav: nav
  },

});
