
//VARIABLES
var $body = $('body');

//loader
var $loader = 				$(".loader"),
		$loaderWrapper = 	$(".loader-wrapper"),
		$loaderIcon = 			$(window.loader);

//video
var $videoChapter4 = 	$("#vid-c-4"),
		$videoChapter4Title = $videoChapter4.find(".chapter-title"),
		$allVideos =  $('.video-container');

//imagenes 

var $allImages = $('.img-container');


var $bottomItem = $('.bottom-item');


function prepareItems(){
	$allImages.each( function() {
		var $currentVid = $(this).find('img');
		$currentVid.attr('data-aspectRatio', $currentVid.height() / $currentVid.width());
		$currentVid.css({
			'height': 'auto',
			'width' : '100%'
		})
	});
	$allVideos.each( function() {
		var $currentVid = $(this).find('video');
		$currentVid.attr('data-aspectRatio', $currentVid.height() / $currentVid.width());
		$currentVid.css({
			'height': 'auto',
			'width' : '100%'
		})
	});
};





function resizeVideoContainers(){
	var newWidth = $body.width();
	$allVideos.each( function() {
		$(this)
			.width(newWidth)
			.height(Math.floor(newWidth * $(this).find('video').attr('data-aspectRatio')));
		
		$(this).children()
			.width(newWidth)
			.height(Math.floor(newWidth * $(this).find('video').attr('data-aspectRatio')));
	});

	$allImages.each( function() {
		$(this)
			.width(newWidth)
			.height(Math.floor(newWidth * $(this).find('img').attr('data-aspectRatio')));
		
		$(this).children()
			.width(newWidth)
			.height(Math.floor(newWidth * $(this).find('img').attr('data-aspectRatio')));
	});
}

//TWEENS

var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("#vid-c-3 .chapter-title", 0.5, {opacity: 0, yoyo: true});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "120%"})
				.setTween(tween)
				//.addIndicators() // add indicators (requires plugin)
				.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#chapter3-quote"})
		.setClassToggle("#bottom-nav", "active") // add class toggle
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);


window.onload = function(){


	prepareItems();
	$(window).resize(resizeVideoContainers);
	resizeVideoContainers();


	//mostrar pagina
	$loaderIcon.addClass("stopped");
	setTimeout(function(){
	$('html,body').animate({scrollTop:0},0);
		$loaderWrapper.addClass("micro");
	}, 300);

	setTimeout(function(){
		
		$body.addClass('loaded');
	}, 500);

	setTimeout(function(){
		$videoChapter4Title.addClass('visible');
	}, 1000);

	setTimeout(function(){
		launchVideo();
	}, 2000);

	setTimeout(function(){
		$body.addClass('scrollable');
	}, 800 + 1525);

	setTimeout(function(){
		$videoChapter4Title.addClass('visible');

	}, 2800);

	setTimeout(function(){
		$body.addClass('completed');

		scrollToText();
   //alert("Finished animating");


	}, 3025);

};


function scrollToText(){
	var windowHeight = $(window).height();
	var vchaper1 = $videoChapter4.height();
	// if (window.height) {
	// 	expression
	// }
	console.log(vchaper1);

	if (windowHeight < (vchaper1 + 64 + 100) ) {
		console.log('debo hacer el scroll');
		$body.stop().animate({ scrollTop:(vchaper1 + 64 + 100)- windowHeight }, '3000', 'swing', function() { });
	}
}

function launchVideo(){
	$videoChapter4.find('video')[0].muted = true;
	$videoChapter4.find('video')[0].play();
};

$bottomItem.on('click', function(){
	console.log($(this).data('section'));
	var url = $(this).data('section');
	//show loader;
	$body.removeClass('scrollable completed').addClass("change-page");
	setTimeout(function(){
		$body.removeClass('loaded');

	}, 25);
	setTimeout(function(){
		window.location = url;

	}, 325);
});

