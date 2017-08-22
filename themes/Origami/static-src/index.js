'use strict';

var $ = require('jquery');
var TWEEN = require('@tweenjs/tween.js');
var lazysizes = require('lazysizes');

// lazysizes.lazySizesConfig.lazyClass = 'lazysizes';

$("ul#prj-list:first li.prj-item").hover(
    function () {
        $(this).toggleClass('selected').siblings("li.prj-item").removeClass('selected');
        $(this).find(".prj-left-line, .prj-right-line").toggleClass('active');
        $(this).find(".prj-color-wrap, .prj-color").toggleClass('active');
        $(this).find(".prj-img-wrap").toggleClass('active');
}, function() {
    $(this).find(".prj-left-line, .prj-right-line").removeClass('active');

});
$(".prj-img").ready(function() {
    var img_h = this.height;
    var img_w = this.width;
    $(this).prev(prj-img-ratio).height(img_h).width(img_w);
});

    // // $(this).find(".prj-left-line").toggleClass('active').removeClass('active');
    // $(this).find('.prj-left-line, .prj-right-line').toggleClass('active').removeClass('active');
