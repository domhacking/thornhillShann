/**
* @module:   projects
* @scss:     ./source/css/module/projects.scss
* @html:     ./source/js/module/projects/projects.html
*/


var Module      = require('../abstract-module');
var $ = require('jquery');
slick = require('slick-carousel-browserify');

projects = [
 	{
        location:"Location",
        name: "Name",
        imageHero:"../img/mosaic-img1.jpg",
        imageNumber:"1",
        images: ["../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg"]
        // images: [{
        //     image: "some content",
        //     image: "more secondary content",
        //     image: "final conent"
        // }]
    },
 	{
        location:"Location",
        name: "Name",
        imageHero:"../img/mosaic-img1.jpg",
        imageNumber:"1",
        images: ["../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg"]
        // images: [{
        //     image: "some content",
        //     image: "more secondary content",
        //     image: "final conent"
        // }]
    },
 	{
        location:"Location",
        name: "Name",
        imageHero:"../img/mosaic-img1.jpg",
        imageNumber:"1",
        images: ["../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg"]
        // images: [{
        //     image: "some content",
        //     image: "more secondary content",
        //     image: "final conent"
        // }]
    },
 	{
        location:"Location",
        name: "Name",
        imageHero:"../img/mosaic-img1.jpg",
        imageNumber:"1",
        images: ["../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg"]
        // images: [{
        //     image: "some content",
        //     image: "more secondary content",
        //     image: "final conent"
        // }]
    },
 	{
        location:"Location",
        name: "Name",
        imageHero:"../img/mosaic-img1.jpg",
        imageNumber:"1",
        images: ["../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg", "../img/mosaic-img1.jpg"]
        // images: [{
        //     image: "some content",
        //     image: "more secondary content",
        //     image: "final conent"
        // }]
    },

 ];



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

        // $('.projectCarousel').slick({
        //
        // })
    },

    data: {
        projects: projects,
        function(){
            return {projectLightbox: false}
        },
    },

    oninit: function(){
        this.on('projectClick', this.onProjectClick);
    },


    onProjectClick: function(){
        console.log('clicked');
        this.set('projectLightbox', true);
    }







});
