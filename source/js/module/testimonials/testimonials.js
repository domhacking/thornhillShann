/**
 * @module:   testimonials
 * @scss:     ./source/css/module/testimonials.scss
 * @html:     ./source/js/module/testimonials/testimonials.html
 */


var Module = require('../abstract-module');
var $ = require('jquery');
var slick = require('slick-carousel-browserify');


module.exports = Module.extend({

  template: require('./testimonials.html'),

  data: {
      testimonials: [
          {
              heading: "High quality finish to all the work",
              quote: "Tom Shann was recommended to us by friends who commented on his professionalism and great communication. He lived up to the hype and managed our contract to a tight time schedule and on the budget we had agreed with him. It was he who recommended we use Skender and his team. They did an excellent, high quality finish to all the work and what we really liked was how they did it quickly, quietly and with minimum fuss and made changes without hassle when agreed with Tom. They came back and did that last 10% of snagging at the end of the work without needing to be chased up. We were very happy with the outcome and will use them again.",
              source: "Robert Leechman - Brook Green"
          },
          {
              heading: "Thornhill Shann made renovating the home easy",
              quote: "We are over the moon with our flat. Tom made renovating with a newborn easier than we could have ever hoped for. The Thornhill Shann design team had an amazing vision for our fat which was a rabbit warren of rooms when we bought it. They guided us thought the design process to get the best out of our vision. We have always been told by friends that building work is a very stressful process, however The Thornhill Shann team made doing up our house a lot of fun.",
              source: "Chloe Hacking - Hackney"
          },
          {
              heading: "Attention to detail and enthusiasm",
              quote: "Tom’s enthusiasm and attention to detail ensured the works were finished to an exceptionally high standard and most importantly on-budget. We were kept abreast of the developments of the build on a weekly basis so always knew exactly where we were in the time line. We have worked with several building companies over the course of our lives and Thornhill Shann were unquestionable the most professional and efficient. ",
              source: "Gail - Chelsea"
          },
      ]
  },

  onrender: function(){
      $('.testimonialsCarousel').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          arrows: true,
      });

  }

});
