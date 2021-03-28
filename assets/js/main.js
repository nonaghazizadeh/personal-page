
var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function() {
		if(!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
  });
  
  $(window).trigger('scroll');
	$(window).on('scroll', function() {
		var pixels = 50;
		var top = 1200;
		if($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
  });
  
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
  });

$('.navbar-toggler').on("click", function () {
  if($('#navbarDefault').hasClass('collapse')) {
    $('#navbarDefault').removeClass('collapse');
  }
  else if(!$('#navbarDefault').hasClass('collapse')) {
    $('#navbarDefault').addClass('collapse');
  }
  })
  
	$('.js-scroll').on("click", function() {
		$('#navbarDefault').addClass('collapse');
	});

  jQuery(document).ready(function($){
    var animationDelay = 2500,
      revealDuration = 600,
      revealAnimationDelay = 1500;
    initHeadline();
    
    function initHeadline() {
      animateHeadline($('.cd-headline'));
    }
  
    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function(){
        var headline = $(this);
        var spanWrapper = headline.find('.cd-words-wrapper'),
        newWidth = spanWrapper.width() + 10
        spanWrapper.css('width', newWidth);
  
        setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
      });
    }
  
    function hideWord($word) {
      var nextWord = takeNext($word);
      $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
        switchWord($word, nextWord);
        showWord(nextWord);
      });
  
    }
  
    function showWord($word, $duration) {
      $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
        setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
      });
    }
  
    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');
      
      if(!$letter.is(':last-child')) { 
        setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
      } else { 
        if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
        if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
      }
    }
  
    function takeNext($word) {
      return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }
  
    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
    }
  });

  
$(document).ready(function () {
  $('.odometer').appear(function () {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll(".single-testimonial");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    if(slides[i].classList.contains('isShowing')){
      slides[i].classList.remove('isShowing')
      // $(slides[i]).animate({ width: 'hide' }); 
    }
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" onThis", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].classList.add('isShowing');
  $(slides[slideIndex-1]).animate({ width: 'show' }); 
  dots[slideIndex-1].className += " onThis";
  setTimeout(showSlides, 2000);
}

$('#project-flters li').on('click', function() {
  $("#project-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');
});

document.querySelector('#all').addEventListener("click", function(){
  var projects = document.querySelectorAll(".project-box");
  for (i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    var num  = projects[i].classList.length;
    var last = projects[i].classList.item(num-1);
    projects[i].classList.remove(last);
    if (i === 0){
      projects[i].classList.add("project-one-all");
    }
    else if (i === 1){
      projects[i].classList.add("project-two-all");
    }
    else if (i === 2){
      projects[i].classList.add("project-three-all");
    }
    else if (i === 3){
      projects[i].classList.add("project-four-all");
    }
    else if (i === 4){
      projects[i].classList.add("project-five-all");
    }
    else if (i === 5){
      projects[i].classList.add("project-six-all");
    }
  }
  document.querySelector("#project").children[0].children[1].children[1].className = "project-container-all";

  for (i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("all")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#branding').addEventListener("click", function(){
  var projects = document.querySelectorAll(".project-box");
  for (i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    var num  = projects[i].classList.length;
    var last = projects[i].classList.item(num-1);
    projects[i].classList.remove(last);
    if (i === 0){
      projects[i].classList.add("project-one-brand");
    }
    else if (i === 1){
      projects[i].classList.add("project-two-brand");
    }
    else if (i === 2){
      projects[i].classList.add("project-three-brand");
    }
    else if (i === 3){
      projects[i].classList.add("project-four-brand");
    }
    else if (i === 4){
      projects[i].classList.add("project-five-brand");
    }
    else if (i === 5){
      projects[i].classList.add("project-six-brand");
    }
  }
  document.querySelector("#project").children[0].children[1].children[1].className = "project-container-brand";

  for (i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("branding")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#web').addEventListener("click", function(){
  var projects = document.querySelectorAll(".project-box");
  for (i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    var num  = projects[i].classList.length;
    var last = projects[i].classList.item(num-1);
    projects[i].classList.remove(last);

    if (i === 0){
      projects[i].classList.add("project-one-web");
    }
    else if (i === 1){
      projects[i].classList.add("project-two-web");
    }
    else if (i === 2){
      projects[i].classList.add("project-three-web");
    }
    else if (i === 3){
      projects[i].classList.add("project-four-web");
    }
    else if (i === 4){
      projects[i].classList.add("project-five-web");
    }
    else if (i === 5){
      projects[i].classList.add("project-six-web");
    }
  }
  
  document.querySelector("#project").children[0].children[1].children[1].className = "project-container-web";

  for (i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("webdesign")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#photography').addEventListener("click", function(){
  var projects = document.querySelectorAll(".project-box");
  for (i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    var num  = projects[i].classList.length;
    var last = projects[i].classList.item(num-1);
    projects[i].classList.remove(last);

    if (i === 0){
      projects[i].classList.add("project-one-photography");
    }
    else if (i === 1){
      projects[i].classList.add("project-two-photography");
    }
    else if (i === 2){
      projects[i].classList.add("project-three-photography");
    }
    else if (i === 3){
      projects[i].classList.add("project-four-photography");
    }
    else if (i === 4){
      projects[i].classList.add("project-five-photography");
    }
    else if (i === 5){
      projects[i].classList.add("project-six-photography");
    }
  }

  document.querySelector("#project").children[0].children[1].children[1].className = "project-container-photography";
  for (i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("photography")) {
      projects[i].style.display = "block";
    }
  }
})
