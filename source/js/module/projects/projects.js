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
                images: ["../img/netherwood-2.jpg", "../img/netherwood-3.jpg", "../img/netherwood-4.jpg", "../img/netherwood-1.jpg"],
                client: "Private",
                architect : "Delta Architects",
                type: "Refurbishment and extension",
                sqft: "900 sq ft",
                price : "£220k",
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
                sqft: "1500 sq ft",
                price : "£250k",
                features : ["Total refurbishment of a very out dated property", "Internal layout of the house redesigned", "Structural alterations using 10 new steel beams.", "2 x new bathrooms", "New Kitchen", "New wooden flooring throughout", "Garden re-landscaped", "Front of house renovated, including front garden", "New M&E System throughout"],
                description: "Thornhill Shann completed a £250,000 project in Hackney, working closely with 1903 Planning Ltd. The build included structural alterations and extensive renovations such as creating two new bathrooms and installing a new kitchen, as well as new joinery, in addition to both hard and soft landscaping."
            },
            {
                location:"Nevern Square",
                name: "Chelsea",
                class:"chelsea",
                imageHero:"../img/nevern-hero.jpg",
                imageNumber:"1",
                images: ["../img/nevern-3.jpg", "../img/nevern-2.jpg"],
                client: "Private",
                architect : "Delta Architects",
                type: "Refurbishment and extension",
                sqft: "2000 sq ft",
                price : "£360k",
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

        for(var i=0; i< projectsArray.length; i++) {
            (function(index){
                projectsArray[index].addEventListener("click", function(){
                    this.classList.add('lightboxActive');
                    bodyButton.classList.add('noScroll');
                });
            })(i);
        }
    },

    oninit: function(){
        this.on('closeProject', this.onCloseProject);
        this.on('closeInformation', this.onCloseInformation);
        this.on('infoClick', this.onInformation);
    },

    onInformation: function(){
            // console.log('I have been clicked');
        var popupPanel = document.querySelector('.popup__panel');
        popupPanel.classList.add('activate-panel');
        var closeButton = document.querySelector('.close-popup');
        closeButton.style.display = "none";
    },

    onCloseInformation: function(){
        setTimeout(function(){
            $('.lightboxActive .popup__panel').removeClass('activate-panel');
            console.log('clicked close');
            // window.srollTo
        }, 0);
        var closeButton = document.querySelector('.close-popup');
        closeButton.style.display = "block";
    },

    onCloseProject: function(){
        var bodyButton = document.querySelector('.body');
        var projectArray = document.querySelector('.project.lightboxActive');
        setTimeout(function(){
            $('.project.lightboxActive').removeClass('lightboxActive');
            bodyButton.classList.remove('noScroll');
        }, 0)
    }

//     $('.scroll_item').on('click', function() {
//     var elem   = $('#' + $(this).data('page')),
//         scroll = elem.offset().top;
//
//     $('body, html').animate({scrollTop : scroll}, 1000);
//
//     $(this).addClass('scroll_item_active')
//            .siblings('.scroll_item_active')
//            .removeClass('scroll_item_active');
// });
//
// $(window).on('scroll', function(e) {
//     var elems    = $('#first, #second, #third, #fourth'),
//         scrolled = $(this).scrollTop();
//
//     var dataPage = elems.filter(function() {
//         return $(this).offset().top + ($(this).height() / 2) >= scrolled;
//     }).first();
//
//     $('.scroll_item[data-page="'+dataPage.prop('id')+'"]').addClass('scroll_item_active')
//                      .siblings('.scroll_item_active')
//                      .removeClass('scroll_item_active');
// }).trigger('scroll');
});
