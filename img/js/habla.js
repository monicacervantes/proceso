
//VARIABLES
var $body = $('body');

//loader
var $loader = 				$(".loader"),
		$loaderWrapper = 	$(".loader-wrapper"),
		$loaderIcon = 			$(window.loader);

//INTRO
var $elmIntro = 			$("#img-c-2"),
		$elmIntroTitle = 	$elmIntro.find(".chapter-title");


//ELMS 
var $allVideos =  		$('.video-container'),
		$allImages = 			$('.img-container'),
		$bottomItem = 		$('.bottom-item');

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
};

//TWEENS

var controller = new ScrollMagic.Controller();

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
		$elmIntroTitle.addClass('visible');
	}, 1000);

	setTimeout(function(){
		//launchVideo();
	}, 2000);

	setTimeout(function(){
		$body.addClass('scrollable');
	}, 800 + 1525);

	setTimeout(function(){
		$elmIntroTitle.addClass('visible');
	}, 2800);

	setTimeout(function(){
		$body.addClass('completed');
		scrollToText();
	}, 3025);

};


function scrollToText(){
	var windowHeight = $(window).height();
	var vchaper1 = $elmIntro.height();
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
	$elmIntro.find('video')[0].play();
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

//timeline

$(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	var animFact1Left = TweenMax.to("#fact-1 .time-fact-img", 0.1, {left: 0, opacity: 1, yoyo: true});
	var animFact1Rigth = TweenMax.to("#fact-1 .time-fact-text", 0.1, {right: 0, opacity: 1, yoyo: true});

	var fact1Left = new ScrollMagic.Scene({triggerElement: "#fact-1", duration: "40%"})
			.setTween(animFact1Left)
			.on("leave", function (e) {
				$('#fact-1').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-1').addClass('completed');
			})
			.addTo(controller);

	var fact1Right = new ScrollMagic.Scene({triggerElement: "#fact-1", duration: "40%"})
			.setTween(animFact1Rigth)
			.addTo(controller);


	var animFact2Rigth = TweenMax.to("#fact-2 .time-fact-img", 0.1, {right: 0, opacity: 1, yoyo: true});
	var animFact2Left = TweenMax.to("#fact-2 .time-fact-text", 0.1, {left: 0, opacity: 1, yoyo: true});

	var fact2Left = new ScrollMagic.Scene({triggerElement: "#fact-2", duration: "40%"})
			.setTween(animFact2Left)
			.on("leave", function (e) {
				$('#fact-2').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-2').addClass('completed');
			})
			.addTo(controller);
	var fact2Right = new ScrollMagic.Scene({triggerElement: "#fact-2", duration: "40%"})
			.setTween(animFact2Rigth)
			.addTo(controller);


	var animFact3Left = TweenMax.to("#fact-3 .time-fact-img", 0.1, {left: 0, opacity: 1, yoyo: true});
	var animFact3Rigth = TweenMax.to("#fact-3 .time-fact-text", 0.1, {right: 0, opacity: 1, yoyo: true});

	var fact1Left = new ScrollMagic.Scene({triggerElement: "#fact-3", duration: "40%"})
			.setTween(animFact3Left)
			.on("leave", function (e) {
				$('#fact-3').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-3').addClass('completed');
			})
			.addTo(controller);

	var fact3Right = new ScrollMagic.Scene({triggerElement: "#fact-3", duration: "40%"})
			.setTween(animFact3Rigth)
			.addTo(controller);



	var animFact4Rigth = TweenMax.to("#fact-4 .time-fact-img", 0.1, {right: 0, opacity: 1, yoyo: true});
	var animFact4Left = TweenMax.to("#fact-4 .time-fact-text", 0.1, {left: 0, opacity: 1, yoyo: true});

	var fact4Left = new ScrollMagic.Scene({triggerElement: "#fact-4", duration: "40%"})
			.setTween(animFact4Left)
			.on("leave", function (e) {
				$('#fact-4').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-4').addClass('completed');
			})
			.addTo(controller);
	var fact4Right = new ScrollMagic.Scene({triggerElement: "#fact-4", duration: "40%"})
			.setTween(animFact4Rigth)
			.addTo(controller);


	var animFact5Left = TweenMax.to("#fact-5 .time-fact-img", 0.1, {left: 0, opacity: 1, yoyo: true});
	var animFact5Rigth = TweenMax.to("#fact-5 .time-fact-text", 0.1, {right: 0, opacity: 1, yoyo: true});

	var fact1Left = new ScrollMagic.Scene({triggerElement: "#fact-5", duration: "40%"})
			.setTween(animFact5Left)
			.on("leave", function (e) {
				$('#fact-5').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-5').addClass('completed');
			})
			.addTo(controller);

	var fact5Right = new ScrollMagic.Scene({triggerElement: "#fact-5", duration: "40%"})
			.setTween(animFact5Rigth)
			.addTo(controller);


	var animFact6Rigth = TweenMax.to("#fact-6 .time-fact-img", 0.1, {right: 0, opacity: 1, yoyo: true});
	var animFact6Left = TweenMax.to("#fact-6 .time-fact-text", 0.1, {left: 0, opacity: 1, yoyo: true});

	var fact6Left = new ScrollMagic.Scene({triggerElement: "#fact-6", duration: "40%"})
			.setTween(animFact6Left)
			.on("leave", function (e) {
				$('#fact-6').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-6').addClass('completed');
			})
			.addTo(controller);
	var fact6Right = new ScrollMagic.Scene({triggerElement: "#fact-6", duration: "40%"})
			.setTween(animFact6Rigth)
			.addTo(controller);


	var animFact7Left = TweenMax.to("#fact-7 .time-fact-img", 0.1, {left: 0, opacity: 1, yoyo: true});
	var animFact7Rigth = TweenMax.to("#fact-7 .time-fact-text", 0.1, {right: 0, opacity: 1, yoyo: true});

	var fact1Left = new ScrollMagic.Scene({triggerElement: "#fact-7", duration: "40%"})
			.setTween(animFact7Left)
			.on("leave", function (e) {
				$('#fact-7').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-7').addClass('completed');
			})
			.addTo(controller);

	var fact7Right = new ScrollMagic.Scene({triggerElement: "#fact-7", duration: "40%"})
			.setTween(animFact7Rigth)
			.addTo(controller);


	var animFact8Rigth = TweenMax.to("#fact-8 .time-fact-img", 0.1, {right: 0, opacity: 1, yoyo: true});
	var animFact8Left = TweenMax.to("#fact-8 .time-fact-text", 0.1, {left: 0, opacity: 1, yoyo: true});

	var fact8Left = new ScrollMagic.Scene({triggerElement: "#fact-8", duration: "40%"})
			.setTween(animFact8Left)
			.on("leave", function (e) {
				$('#fact-8').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-8').addClass('completed');
			})
			.addTo(controller);
	var fact8Right = new ScrollMagic.Scene({triggerElement: "#fact-8", duration: "40%"})
			.setTween(animFact8Rigth)
			.addTo(controller);


	var animFact9Left = TweenMax.to("#fact-9 .time-fact-img", 0.1, {left: 0, opacity: 1, yoyo: true});
	var animFact9Rigth = TweenMax.to("#fact-9 .time-fact-text", 0.1, {right: 0, opacity: 1, yoyo: true});

	var fact9Left = new ScrollMagic.Scene({triggerElement: "#fact-9", duration: "40%"})
			.setTween(animFact9Left)
			.on("leave", function (e) {
				$('#fact-9').removeClass('completed');
			})
			.on("enter", function (e) {
				$('#fact-9').addClass('completed');
			})
			.addTo(controller);

	var fact9Right = new ScrollMagic.Scene({triggerElement: "#fact-9", duration: "40%"})
			.setTween(animFact9Rigth)
			.addTo(controller);





	var tween = TweenMax.to("#img-bn", 0.5, {opacity: 0, yoyo: true});
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: "50%"})
				.setTween(tween)
				.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#fact-7"})
			.setClassToggle("#bottom-nav", "active") // add class toggle
			.addTo(controller);

});
