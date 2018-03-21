var ngWords = ["ki","oblo","sla","boxi","lo","saro","wro","ogli","spri","sexti","ga","belo","voti","ba","hidi","spyi","fa","leapi","you","puki","gami","hu","thro","go","poki","bo","baki","so","pooi","tho","cravi","earri"];
var ngColoursBack = ["#FFC702","#FF003D","#FAFF00","#3C0000","#00008B","#FF0853","#F71414","#F7720B","#00CB60","#FF0853","#AB00D6","#315E00","#050549","#FF00E7","#0A1B24","#F71414","#29C88E","#FFC702","#F6D7FF","#DBD100","#FF0853","#E1B5C4","#FF2CFA","#005EFF","#CAFAFA","#00AF41","#FF6FE3","#4DAFFF","#E5DFDA","#FFC5B8","#00008B","#770000"];
var ngColoursWords = ["#47280E","#FFFF00","#43FF85","#FF0000","#007FFF","#FF9CFD","#FFFFFF","#FEB0FF","#B1EA00","#FEFFF9","#5CFCFF","#FF8ACB","#FF0000","#EACFB5","#122F41","#18F400","#F75000","#F71414","#48DCFF","#96A500","#FFC702","#FFE1EF","#B1EA00","#FF434E","#0C08FF","#00FF5C","#FFFFFF","#52FFFA","#674A00","#FF5CCD","#FF645C","#FF4D4D"];

var tuWords = ["t","rnip","bular","ssle","nnel","rban","rn","sh","lips","mblr","rf","gboat","rnout","rbo","rtle","xedo","sk","tu","tor","na","rret","rgid","rmoil","ba","mmy","que","ille","ne","rd","nic","rkey","lle"];
var tuColoursBack = ["#0000EE","#FF64A4","#00FFF8","#FFC687","#315E00","#47280E","#FFFF1C","#FFC5B8","#D4A1FF","#303F49","#3CCB00","#FF3A1A","#EED500","#BEBEBE","#B1EA00","#000000","#00008B","#FF9CFD","#000000","#FF645C","#303F49","#54FF9F","#3C0000","#FFDF22","#FF9DD6","#770000","#D8AE64","#383838","#896800","#52FFFA","#47280E","#FF64A4"];
var tuColoursWords = ["#FFC702","#FFC3D7","#0039FF","#FF4A8D","#FF442C","#EACFB5","#000000","#FF27CE","#283889","#05EDFF","#7F6700","#FFDF22","#3B3A00","#FF0000","#757500","#FFFFFF","#007FFF","#FFF8A1","#18F400","#FFC4C0","#D8AE64","#FF99F8","#FF0000","#515151","#67007D","#FF4D4D","#534741","#D500FF","#AFAF00","#7A7A7A","#E8A30A","#FFC3D7"];

var currentNum = 0;
var standardColour = "#111";

function updateText(){
	$('#textContainer').addClass("swipeAnimation");
	$('#leftWord').text(ngWords[currentNum]);
	$('#leftWordWrap').css("background", ngColoursBack[currentNum]);
	$('#leftWord').css("color", ngColoursWords[currentNum]);
	$('#rightWord').text(tuWords[currentNum]);
	$('#rightWordWrap').css("background", tuColoursBack[currentNum]);
	$('#rightWord').css("color", tuColoursWords[currentNum]);
}

function returnText(){
	$('#textContainer').removeClass("swipeAnimation");
	$('#leftWord').text("");
	$('#leftWordWrap').css("background", "");
	$('#leftWord').css("color", standardColour);
	$('#rightWordWrap').removeClass("swipeAnimation");
	$('#rightWord').text("");
	$('#rightWordWrap').css("background", "");
	$('#rightWord').css("color", standardColour);
	if (currentNum >= tuWords.length-1) {
		currentNum = 0;
	} else {
		currentNum = currentNum+1;
	}
}

var windowHeight = $(window).height();
var textCentre = windowHeight/2;
var scrollYposition = $(document).scrollTop();	

function updateDimensions() {
	windowHeight = $(window).height();
	textCentre = windowHeight/2 - 25;
	$("#tungLogo").css( "margin-top", textCentre );
	$("#leftWord").css( "margin-top", textCentre );
	$("#rightWord").css( "margin-top", textCentre );
}

var returnTextTimeout;
var updateSplash;
var updateSplashDelay;

function updateTung() {
	updateText();
	returnTextTimeout = setTimeout(function(){returnText();},2000);
}

function closeSplash() {
		
	scrollYposition = $(document).scrollTop();
	var pushSplashOpacity = Math.min(Math.max(parseInt(scrollYposition), 0), windowHeight)/(windowHeight-windowHeight*0.33)*1;
	
	if(scrollYposition<windowHeight) {
		$("#splash-padding").css("opacity", pushSplashOpacity);		
	}

}


function toggleNavigation() {
	$(".menu-slash .js-link").click(function() {
		$(this).parent().parent().find(".active").toggleClass("active");
		$(this).toggleClass("active");
	});
}

function filterGalleryAll() {
	$("#project-gallery .project").addClass("active");
	$("#filter-menu .active").removeClass("active");
	$( "a[targetfilter='all']").addClass("active");
}

var FADESPEED = "slow";

function toggleGallery() {
	$("#view-menu .js-link").click(function() {
		var targetGallery = '#project-gallery #' + $(this).attr("targetgallery");
		$( "#project-gallery" ).fadeOut( FADESPEED, function() {
			$("#project-gallery .gallery.active").toggleClass("active");
			$(targetGallery).toggleClass("active");
			filterGalleryAll();
			$( "#project-gallery" ).fadeIn(FADESPEED);
		});
	});
}

function filterGallery() {
	$("#filter-menu .js-link").click(function() {
		var targetFilter = "."+String($(this).attr("targetfilter"));		
		$( "#project-gallery" ).fadeOut(FADESPEED, function() {
			$("#project-gallery .project.active").toggleClass("active");
			if (targetFilter === ".all") {
				$("#project-gallery .project").addClass("active");
			} else {
				$(targetFilter).toggleClass("active");
			}
			$( "#project-gallery" ).fadeIn(FADESPEED);
		});
	});	
}


function projectGallerySliderScroll() {
	var gallerySliderHeight = $("#galleryslider").outerHeight();
	var windowHeight = $(window).height();
	var scrollYpos = $(window).scrollTop();

	if(scrollYpos > ($("main").outerHeight()-82)) {
		$("#galleryslider").addClass("active");
		$("#galleryslider-padding").addClass("active");
	} else {
		$("#galleryslider").removeClass("active");
		$("#galleryslider-padding").removeClass("active");
	}
	
	if((gallerySliderHeight+82)>windowHeight) {
		$("#galleryslider").addClass("tall");
	} else {
		$("#galleryslider").removeClass("tall");
	}
}

function projectGallerySliderSet() {
	var gallerySliderHeight = $("#galleryslider").outerHeight();
	var windowHeight = $(window).height();
	var navHeight = $("nav").outerHeight();
	
	if(gallerySliderHeight>windowHeight) {
		$("#galleryslider-padding").css("height", gallerySliderHeight+navHeight);
	} else {
		$("#galleryslider-padding").css("height", gallerySliderHeight);
	}	
}


function openGallerySlider() {
	var mainBottomPos = $("main").position().top + $("main").outerHeight();
	var windowHeight = $(window).height();
	var scrollYposition = $(document).scrollTop() + windowHeight;

	var gallerySliderHeight = $("#galleryslider").outerHeight();
	if(gallerySliderHeight>windowHeight) {
		gallerySliderHeight = windowHeight;
	}
	
	var sliderPaddingOpacity = 1-(scrollYposition-mainBottomPos+82)/(gallerySliderHeight);
	if(scrollYposition>mainBottomPos) {
		$("#galleryslider-padding").css("opacity", sliderPaddingOpacity);
	}
}


function swapNavLogos() {
	var scrollYpos = $(window).scrollTop();
	var mainTopPos = $("main").position().top;

	if(scrollYpos > mainTopPos) {
		$("nav").addClass("active");
		$("body").addClass("nav-stuck");
		$("nav").css("top", 0);
	} else {
		$("nav").removeClass("active");
		$("nav").css("top", mainTopPos);
		$("body").removeClass("nav-stuck");
	}
}

function maxContainerResize() {
	var windowHeight = $(window).height();
	var navHeight = $("nav").outerHeight();
	var containerPadding = 20;
	var maxContainerWidth = 1600;
	var containerMaxWidth = (windowHeight-navHeight+containerPadding)/10*16;
	if(containerMaxWidth<maxContainerWidth && windowHeight>320) {
		$(".container-fluid").css("max-width", containerMaxWidth);
	} else {
		$(".container-fluid").css("max-width", maxContainerWidth);
	}
}


function backToTop() {
	var topMain = $("main").position().top;
	$('html,body').animate({ scrollTop: topMain }, 500);
}


function toggleImageSwap() {
	$(".image-wrapper").mouseenter(function() {
		$(this).toggleClass("deactive");
	});
}


function toggleMainNavigation() {
	
	$("nav").on( 'click', 'a', function(){
		$("nav").find(".selected").toggleClass("selected");
		$(this).toggleClass("selected");
	});

	$("#main").on( 'click', 'a:not(.no-smoothState)', function(){
		$("nav").find(".selected").toggleClass("selected");
	});

	$("nav").on( 'click', '#nav-store', function(){	
		$("footer").addClass("store");
		$("nav").addClass("store");
	});

	$("nav").on( 'click', 'a:not(#nav-store)', function(){
		$("footer").removeClass("store");
		$("nav").removeClass("store");
	});

}



//////////////////////////////////////////////////////
// Event Handlers

function onReadyFunctions() {
	maxContainerResize();
	projectGallerySliderSet();
	swapNavLogos();

	updateDimensions();
	clearInterval(updateSplash);
	currentNum = Math.floor(Math.random()*ngWords.length);

	
	updateSplashDelay = setTimeout(function(){
		updateTung();		
		updateSplash = setInterval("updateTung()", 3000);
	}, 1000);
	
	toggleMainNavigation();
	toggleNavigation();
	toggleGallery();
	filterGallery();
	toggleImageSwap();
	
	setTimeout(function(){$("body").removeClass("preload");},3000);
	
	$( ".selection" ).change(function () {
	    var indexNum = $(this).prop("selectedIndex");
	    $(".selectionList div").removeClass("selected");
	    $(".selectionList div").eq(indexNum).addClass( "selected" );
	});

		
	$("img").unveil(0, function() {
		$(this).load(function() {
			$(this).removeClass("img-preload");
			$(this).addClass("img-loaded");
		});
	});
	
}

$(window).on("load", function(e){
	$("body").removeClass("preload");
});


$(document).ready(function() {
	onReadyFunctions();
	
	// Smooth State Init	
	$(function() {
	var $page = $('#main'),
		options = {
			prefetch: false,
			cacheLength: 0,
			forms: 'disable-forms',
			onStart: {
				duration: 500,
				render: function ($container) {
					$container.addClass('is-exiting');
					smoothState.restartCSSAnimations();
					clearInterval(updateSplash);
					clearTimeout(returnTextTimeout);
					clearTimeout(updateSplashDelay);
					$('html,body').stop(false, false);
				}
			},
			onProgress: {
				duration: 0,
				render: function ($container) {
					$("body").addClass("preload");
					$('html,body').animate({ scrollTop: 0 }, 0);
				}
			},
			onReady: {
				duration: 0,
				render: function ($container, $newContent) {
					$container.html($newContent);
					onReadyFunctions();
					$("body").removeClass("preload");
					$container.removeClass('is-exiting');
					 _gaq.push(['_setAccount', 'UA-49097808-1']);
					 _gaq.push(['_trackPageview', window.location.pathname]);
				}
			},
			onAfter: function($container, $newContent) {
			}	
			
		},
		smoothState = $page.smoothState(options).data('smoothState');
	});
	

	// Smooth State Nav Init
	$('nav a:not(.no-smoothState)').click(function(e){
        e.preventDefault();
        var content  = $('#main').smoothState().data('smoothState');
        var href = $(this).attr('href');
        content.load(href);
	});
	
});


$(window).on( 'scroll', function(e){
	if (Modernizr.touch) {
	} else {
		closeSplash();
	}
	swapNavLogos();
	projectGallerySliderSet();
	projectGallerySliderScroll();
	openGallerySlider();
});

$("#main").on( 'click', '.backtotop', function(){	
	backToTop();
});

$(window).on( 'wheel', function(e){
	$('html,body').stop();
});

$(window).on( 'resize', function(e){
	maxContainerResize();
	swapNavLogos();
	projectGallerySliderSet();
	updateDimensions();
});
