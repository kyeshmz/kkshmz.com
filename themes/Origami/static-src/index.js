// import lazysizes from 'lazysizes';
// import hljs from 'highlight.js';

var lazysizes = require('lazysizes');
var lazyframe = require('lazyframe');

// Passing a selector
lazyframe('.lazyframe');

lazysizes.lazySizesConfig = {
    lazyClass: 'lazy', // lazyloadの対象とするクラスの指定。
    loadingClass: 'lazyloading',
    loadedClass: 'lazyloaded'
    
};
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
hljs.initHighlightingOnLoad();