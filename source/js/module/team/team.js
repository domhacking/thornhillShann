/**
 * @module:   team
 * @scss:     ./source/css/module/team.scss
 * @html:     ./source/js/module/team/team.html
 */


 team = [
     {
         name: "Tommy Shann",
         position: "Co-Founder",
         description: "Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         name: "Tommy Shann",
         position: "Co-Founder",
         description: "Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         name: "Tommy Shann",
         position: "Co-Founder",
         description: "Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     },
     {
         name: "Tommy Shann",
         position: "Co-Founder",
         description: "Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
     }
 ]


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./team.html'),

  data: {
      team : team
  }

});
