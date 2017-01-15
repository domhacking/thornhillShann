/**
* @module:   projects
* @scss:     ./source/css/module/projects.scss
* @html:     ./source/js/module/projects/projects.html
*/


var Module = require('../abstract-module');
var $ = require('jquery');
var fullpage = require('fullpage.js');
var slick = require('slick-carousel-browserify');




module.exports = Module.extend({

    template: require('./projects.html'),


    onrender: function() {
        $('.projectsCarousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true
        });

        var projectsArray = document.querySelectorAll(".project");
        var closeButton = document.querySelector('.close-popup');

        // $('#fullpage').fullpage({
        //     autoScrolling: false,
        //     // anchors:['1', '2', 'projects', 'offer', 'testimonials', 'contact'],
        //     // menu: 'navMenu'
        // });

        for(var i=0; i< projectsArray.length; i++) {
            (function(index){
                projectsArray[index].addEventListener("click", function(){
                    this.classList.toggle('lightboxActive');
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

    data: {
        projects: [
         	{
                location:"Brook Green",
                name: "chelsea",
                imageHero:"../img/bg-sittingRoom.jpg",
                imageNumber:"1",
                images: ["../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg"],
                client: "Private",
                architect : "Delta Architects",
                structural : "Elliot Wood",
                price : "£120k",
                features : ["New kitchen extension", "Structural Alterations", "Extensive Refurbishment", "2 x new bathrooms", "New M&E system  through", "Hard and soft landscaping", "New Joinery", "Bifold doors and roof lantern "],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
         	{
                location:"Hackney",
                name: "kensington",
                imageHero:"../img/bg-sittingRoom.jpg",
                imageNumber:"1",
                images: ["../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg"],
                client: "Private",
                architect : "Delta Architects",
                structural : "Elliot Wood",
                price : "£120k",
                features : ["New kitchen extension", "Structural Alterations", "Extensive Refurbishment", "2 x new bathrooms", "New M&E system  through", "Hard and soft landscaping", "New Joinery", "Bifold doors and roof lantern "],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
         	{
                location:"Fulham",
                name: "fulham",
                imageHero:"../img/bg-sittingRoom.jpg",
                imageNumber:"1",
                images: ["../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg", "../img/bg-sittingRoom.jpg"],
                client: "Private",
                architect : "Delta Architects",
                structural : "Elliot Wood",
                price : "£120k",
                features : ["New kitchen extension", "Structural Alterations", "Extensive Refurbishment", "2 x new bathrooms", "New M&E system  through", "Hard and soft landscaping", "New Joinery", "Bifold doors and roof lantern "],
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
         ]
    },

    oninit: function(){
        this.on('close', this.onClose);

        // this.on('projectClick0', this.onProjectOneClick);
        // this.on('projectClick1', this.onProjectTwoClick);
        // this.on('projectClick2', this.onProjectThreeClick);
    },


    onClose: function(){

        // document.get
        // this.toggle("projectLightbox", true)
    }







});
