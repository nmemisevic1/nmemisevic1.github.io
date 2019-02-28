
(function ($) {

    "use strict";
	
	

	// LINE PROGRESS BAR
	enableLineProgress();
	
	// RADIAL PROGRESS BAR
	enableRadialProgress();
	
	// ACCORDIAN
	panelAccordian();

	$(window).on('load', function(){
		
		// ISOTOPE PORTFOLIO WITH FILTER
		if(isExists('.portfolioContainer')){
			var $container = $('.portfolioContainer');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		 
			$('.portfolioFilter a').click(function(){
				$('.portfolioFilter .current').removeClass('current');
				$(this).addClass('current');
		 
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			}); 
		}
	
	});
	
	
	$('a[href="#"]').on('click', function(event){
		return;
	});
	
	
	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}
	
	var countCounterUp = 0;
	
	var a = 0 ;
	
	countCounterUp = enableCounterUp(countCounterUp);
	
	$(window).on('scroll', function(){
		
		countCounterUp = enableCounterUp(countCounterUp);
	
	});
	
	
})(jQuery);

function panelAccordian(){
	
	var panelTitle = $('.panel-title');
	panelTitle.on('click', function(){
		$('.panel-title').removeClass('active');
		$(this).toggleClass('active');
		
	});
	
}

function enableRadialProgress(){
	
	$(".radial-progress").each(function(){
		var $this = $(this),
			progPercent = $this.data('prog-percent');
			
		var bar = new ProgressBar.Circle(this, {
			color: '#aaa',
			strokeWidth: 3,
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			text: {
				
			},
			from: { color: '#aaa', width: 1 },
			to: { color: '#FEAE01', width: 3 },
			// Set default step function for all animate calls
			step: function(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});
		
		$(this).waypoint(function(){
		   bar.animate(progPercent);  
		},{offset: "90%"})
		
	});
}

function enableLineProgress(){
	
	$(".line-progress").each(function(){
		var $this = $(this),
			progPercent = $this.data('prog-percent');
			
		var bar = new ProgressBar.Line(this, {
			strokeWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			color: '#FEAE01',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: {width: '100%', height: '100%'},
			text: {
				style: {
					
				},
			},
			from: {color: '#FFEA82'},
			to: {color: '#ED6A5A'},
			step: (state, bar) => {
				bar.setText(Math.round(bar.value() * 100) + ' %');
			}
		});
		
		$(this).waypoint(function(){
		   bar.animate(progPercent);  
		},{offset: "90%"})
		
	});
}

function enableCounterUp(a){
	
	var counterElement;
	
	if(isExists('#counter')){ counterElement = $('#counter'); }
	else{ return; }
		
	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function() {
			var $this = $(this),
				countDuration = $this.data('duration'),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},{

				duration: countDuration,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}

			});
		});
		a = 1;
	}

	return a;
}

function isExists(elem){
	if ($(elem).length > 0) { 
		return true;
	}
	return false;
}
var x = document.getElementById("video1");

function playVid1(){
	x.play();
}
function pauseVid1(){
	x.pause();
}
/* Open when someone clicks on the span element */
function openNav1() {
  document.getElementById("myNav1").style.height = "100%";
  document.getElementById("myNav1").style.width = "100%";
  playVid1();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav1() {
  document.getElementById("myNav1").style.height = "0%";
  document.getElementById("myNav1").style.width = "0%";
  pauseVid1();
}

var xx = document.getElementById("video2");

function playVid2(){
	xx.play();
}
function pauseVid2(){
	xx.pause();
}

/* Open when someone clicks on the span element */
function openNav2() {
  document.getElementById("myNav2").style.height = "100%";
  document.getElementById("myNav2").style.width = "100%";
  playVid2();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.height = "0%";
  document.getElementById("myNav2").style.width = "0%";
  pauseVid2();
}

var xxx = document.getElementById("video3");

function playVid3(){
	xxx.play();
}
function pauseVid3(){
	xxx.pause();
}
/* Open when someone clicks on the span element */
function openNav3() {
  document.getElementById("myNav3").style.height = "100%";
  document.getElementById("myNav3").style.width = "100%";
  playVid3();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav3() {
  document.getElementById("myNav3").style.height = "0%";
  document.getElementById("myNav3").style.width = "0%";
  pauseVid3();
}






var xxxx = document.getElementById("video4");

function playVid4(){
	xxxx.play();
}
function pauseVid4(){
	xxxx.pause();
}
/* Open when someone clicks on the span element */
function openNav4() {
  document.getElementById("myNav4").style.height = "100%";
  document.getElementById("myNav4").style.width = "100%";
  playVid4();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav4() {
  document.getElementById("myNav4").style.height = "0%";
  document.getElementById("myNav4").style.width = "0%";
  pauseVid4();
}

var xxxxx = document.getElementById("video5");

function playVid5(){
	xxxxx.play();
}
function pauseVid5(){
	xxxxx.pause();
}
/* Open when someone clicks on the span element */
function openNav5() {
  document.getElementById("myNav5").style.height = "100%";
  document.getElementById("myNav5").style.width = "100%";
  playVid5();
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav5() {
  document.getElementById("myNav5").style.height = "0%";
  document.getElementById("myNav5").style.width = "0%";
  pauseVid5();
}
function stopOpen(){
	pauseVid1();
	pauseVid2();
	pauseVid3();
	pauseVid4();
	pauseVid5();
}
/* DORADITI ZA SVIH 5 stvari ESC da gasi video klipove */
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        //alert('Esc key pressed.');
       closeNav1();
       closeNav2();
       closeNav3();
       closeNav4();
       closeNav5();
    }
};