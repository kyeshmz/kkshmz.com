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
    var text = new Blotter.Text("Kye", {
        family : "san-serif",
        size : 60,
        fill : "#171717"
      });
    
      var material = new Blotter.ChannelSplitMaterial();
      
    
      var blotter = new Blotter(material, { texts : text });
    
      var scope = blotter.forText(text);
    
      scope.appendTo(document.body);