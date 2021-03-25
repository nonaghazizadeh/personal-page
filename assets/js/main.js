
$(document).ready(function () {
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 120){
      $(".navbar").css({"background-color": "white", "color": "black"});
      $(".navbar-brand").css("color", "black");
      if (window.innerWidth > 698) {
        $(".navbar-item a").css("color", "black")
      }
    }
    else{
      $(".navbar").css({"background-color": "transparent", "color": "white"});
      $(".navbar-brand").css("color", "white");
      if (window.innerWidth > 698) {
        $(".navbar-item a").css("color", "white")
      }
    }
  });
});

var isClossed = true;

$(document).ready(function(){
  $('.menu').click(function(){
    $('ul').toggleClass('active');
    if (isClossed) {
      $(".navbar-brand-container").css("margin-top", "-238px");
      isClossed = false;
    }
    else {
      $(".navbar-brand-container").css("margin-top", "-30px");
      isClossed = true;
    }
  });
});



// $(document).ready(function () {
//   $('.popup-img').magnificPopup({
//     type: 'image',
//     // delegate: 'a',
//     removalDelay: 300,
//     mainClass: 'mfp-with-zoom',
//     gallery: {
//       enabled: true
//     },
//     zoom: {
//       enabled: true,
//       duration: 300,
//       easing: 'ease-in-out', 
//       opener: function (openerElement) {
//         return openerElement.is('img') ? openerElement : openerElement.find('img');
//       }
//     }
//   });
// });

// $(window).on('load', function() {
// 		var projectIsotope = $('.project-items').isotope({
// 			itemSelector: '.project-grid-item'
// 		});
// 		$('#project-flters li').on('click', function() {
// 			$("#project-flters li").removeClass('filter-active');
// 			$(this).addClass('filter-active');
// 			projectIsotope.isotope({
// 				filter: $(this).data('filter')
// 			});
// 		});
// 	});

$(document).ready(function () {
  $('.odometer').appear(function () {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
});



