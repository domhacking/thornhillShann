/**
* @module:   projects
* @scss:     ./source/css/module/projects.scss
* @html:     ./source/js/module/projects/projects.html
*/


var Module = require('../abstract-module');
var $ = require('jquery');
// var fullpage = require('fullpage.js');
var slick = require('slick-carousel-browserify');

module.exports = Module.extend({

    template: require('./projects.html'),

    data: {
        projects: [
            {
                location:"Netherwood Road",
                class:"brookGreen",
                name: "Brook Green",
                imageHero:"../img/netherwood-hero.jpg",
                imageNumber:"1",
                images: ["../img/netherwood-1.jpg", "../img/netherwood-2.jpg", "../img/netherwood-3.jpg", "../img/netherwood-4.jpg"],
                client: "Private",
                architect : "Delta Architects",
                type: "Refurbishment and extension",
                sqft: "900 sq ft",
                price : "£120k",
                features : ["New kitchen extension", "Structural Alterations", "Extensive Refurbishment", "2 x new bathrooms", "New M&E system  through", "Hard and soft landscaping", "New Joinery", "Bifold doors and roof lantern "],
                description: "Thornhill Shann completed a £220,000 project in Brook Green, working in collaboration with Delta Architects and structural engineers Elliott Wood. The build included structural alterations and extensive renovations such as creating two new bathrooms and a new kitchen extension, installation of bifold doors and a roof lantern as well as new joinery, a new M&E system throughout, in addition to both hard and soft landscaping."
            },
            {
                location:"Goulton Road",
                class:"hackney",
                name: "Hackney",
                imageHero:"../img/bg-sittingRoom.jpg",
                imageNumber:"1",
                images: ["../img/hackney-1.jpg", "../img/hackney-2.jpg", "../img/hackney-3.jpg"],
                client: "Private",
                architect : "CL4 Architecture",
                type: "Refurbishment and extension",
                sqft: "900 sq ft",
                price : "£120k",
                features : ["Total refurbishment of a very out dated property", "Internal layout of the house redesigned", "Structural alterations using 10 new steel beams.", "2 x new bathrooms", "New Kitchen", "New wooden flooring throughout", "Garden re-landscaped", "Front of house renovated, including front garden", "New M&E System throughout"],
                description: "Thornhill Shann completed a £250,000 project in Hackney, working closely with 1903 Planning Ltd. The build included structural alterations and extensive renovations such as creating two new bathrooms and installing a new kitchen, as well as new joinery, in addition to both hard and soft landscaping."
            },
            {
                location:"Nevern Square",
                name: "Chelsea",
                class:"chelsea",
                imageHero:"../img/nevern-hero.jpg",
                imageNumber:"1",
                images: ["../img/nevern-1.jpg", "../img/nevern-2.jpg", "../img/nevern-3.jpg", "../img/nevern-4.jpg"],
                client: "Private",
                architect : "Delta Architects",
                type: "Refurbishment and extension",
                sqft: "2000 sq ft",
                price : "£220k",
                features : ["New kitchen extension", "Structural Alterations", "Extensive Refurbishment", "2 x new bathrooms", "New M&E system  through", "Hard and soft landscaping", "New Joinery", "Bifold doors and roof lantern "],
                description: "Thornhill Shann completed a £360,000 project in Chelsea, working closely with SR Davis Architects, Baynham Meikle structural engineers and ECOLED lighting designers. The build included extensive renovations such as creating three new bathrooms, adding a sunroom extension and installing a new kitchen, as well as new joinery, in addition to both hard and soft landscaping."
            }
        ]
    },

    onrender: function() {
        $('.projectsCarousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            responsive: [
                {
                  breakpoint: 530,
                  settings: 'unslick'
                },
              ]
        });

        var projectsArray = document.querySelectorAll(".project");

        var closeButton = document.querySelector('.close-popup');
        var bodyButton = document.querySelector('.body');

        // $('.project').click(function () {
            // $(this).toggle('lightboxActive');
            // var i = $(this)

            // var bodyVariable = $('.body').css("overflow", "hidden");
            // console.log(bodyVariable.style);
            // bodyVariable.style.overflow = "hidden";
        // });

        // $('.close-popup').click(function(){
                // console.log(this);
        //  $('.project').removeClass('lightboxActive');
        //     body.style.overflow = "auto";
        // })


        for(var i=0; i< projectsArray.length; i++) {
            (function(index){
                projectsArray[index].addEventListener("click", function(){
                    this.classList.toggle('lightboxActive');
                    bodyButton.classList.toggle('noScroll');
                    var that = this;

                    closeButton.addEventListener("click", function(){
                        this.classList.remove('lightboxActive');
                        console.log(that);
                        // that.classList.remove('lightboxActive');
                    })
                });
            })(i);
        }

    },



    oninit: function(){
        this.on('projectClick', this.onProjectClick);
        this.on('infoClick', this.onInformation);
    },


    // scrollMagicActivation: function(){
    //     var slides = document.querySelectorAll("project-image");
    //
    //
    //     // create scene for every slide
    //     for (var i=0; i<slides.length; i++) {
    //         console.log(slides);
    //         new ScrollMagic.Scene({
    //             triggerElement: slides[i]
    //         })
    //         .setPin(slides[i])
    //         .addTo(scrollMagicController);
    //     }
    // },

    onInformation: function(){
        var popupPanel = document.querySelector('.popup__panel');
        console.log(popupPanel);
        popupPanel.classList.toggle('activate-panel');

    },

    onProjectClick:function(){
        console.log('ello');
        // this.set('lightboxActive', true);
        this.set('lightbox')
    },



    onClose: function(){


        // document.get
        // this.toggle("projectLightbox", true)
    }







});
