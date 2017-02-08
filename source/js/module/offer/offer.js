/**
 * @module:   offer
 * @scss:     ./source/css/module/offer.scss
 * @html:     ./source/js/module/offer/offer.html
 */



var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./offer.html'),

  data: function () {
      return {
          offer : [
              {
                  icon: "../img/technology.png",
                  offerTitle: "Budgeting & Cost management",
                  offerDescription: "We understand that budgets are finite. With this is mind we will work with you to maximise your budget wherever possible while delivering exceptional quality."
              },
              {
                  icon: "../img/drawing.png",
                  offerTitle: "Feasibility Studies",
                  offerDescription: "We are here to provide supoort and guidance offering a 360 approach to all aspects of project assessment."
              },
              {
                  icon: "../img/tools-1.png",
                  offerTitle: "Turnkey Design & build",
                  offerDescription: "We can deliver projects ready for use quickly and to a very high standard. "
              },
              {
                  icon: "../img/tools.png",
                  offerTitle: "Full refurbishments",
                  offerDescription: "We are able to take on large projects and provide a full range of services with minimal disruption."
              },
              {
                  icon: "../img/interface.png",
                  offerTitle: "New Build",
                  offerDescription: "Our team of talented builders and dedicted project managers are able to see large jobs such new builds through to completion working together to help take the stress out of undertaking such a project."
              },
              {
                  icon: "../img/people.png",
                  offerTitle: "Project Management",
                  offerDescription: "With combined experience of over 40 years, Thornhill Shann are expertley placed to deliver projects on time, to budget and to exceptional standards."
              }
          ]
      }

  },

  // oninit: function(){
  //     this.on('testing', this.onTesting);
  //
  //
  // },
  //
  // onTesting: function(){
  //     console.log(this);
  // }

});
