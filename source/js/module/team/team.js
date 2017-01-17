/**
 * @module:   team
 * @scss:     ./source/css/module/team.scss
 * @html:     ./source/js/module/team/team.html
 */


 team = [
     {
         name: "Thomas Shann",
         position: "Co Founder",
         description: "Tom brings programming, client communication, and an eye for detail to create an immaculate finish combined with a fantastic team of highly skilled and reliable tradesmen."
     },
     {
         name: "Skender Perpepa",
         position: "Co Founder",
         description: "Skender brings a lifetime of experience in running a successful construction company with a team of forty hard working, loyal and talented builders."
     },
     {
         name: "Billy sinclair",
         position: "Director",
         description: "Billy has worked in architecture for almost a decade, having graduated with a distinction from the Welsh School of Architecture he has consulted on numerous high profile projects and joins Thornhill Shann in the role of Director"
     },
    //  {
    //      name: "Tommy Shann",
    //      position: "Co-Founder",
    //      description: "Tommy had been in the business for 50 years and has a huge amount of experience building homes and renovation"
    //  }
 ]


var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./team.html'),

  data: {
      team : team
  }

});
