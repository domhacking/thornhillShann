/**
 * @module:   offer
 * @scss:     ./source/css/module/offer.scss
 * @html:     ./source/js/module/offer/offer.html
 */

 offer = [
     {
         icon: "../img/people.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         icon: "../img/drawing.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         icon: "../img/tools-1.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         icon: "../img/tools.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         icon: "../img/interface.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         icon: "../img/tools.png",
         offerTitle: "Project Management",
         offerDescription: "This is some more description Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     }
 ]


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./offer.html'),

  data:{
      offer : offer
  }

});
