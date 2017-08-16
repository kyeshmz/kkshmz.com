 'use strict';

var $ = require('jquery');
var TWEEN = require('@tweenjs/tween.js');
var lazysizes = require('lazysizes');

// lazysizes.lazySizesConfig.lazyClass = 'lazysizes';


$("ul#prj-list:first li.prj-item").hover(function() {
	$(this).toggleClass('selected').siblings("li.prj-item").removeClass('selected');
	$(this).find('.prj-left-line').toggleClass('active').siblings().removeClass('active');
}, function() {
	$(this).find('.prj-left-line').toggleClass('active').siblings().removeClass('active');
	// $(this).find('.prj-left-line').css({'visibility': 'inherit', 'opacity': '1', 'transform': 'matrix(1, 0, 0, 1, 0, 0)'});
	// $('.prj-right-line').css({visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);});
	// $('.prj-title-wrap').css({visibility: inherit; opacity: 1;})
	}
	// function() {
	// 	$(this).removeClass('selected').siblings();
	// }
);


// $('li.prj-item').hover(function() {
//       $()
//         .addClass("selected")
//         .siblings("li").removeClass("selected");
//     },
//     function() {
//       $(this).removeClass("selected");
//     }
//  );