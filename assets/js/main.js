var nav = document.querySelector('nav');
var navHeight = nav.offsetHeight;
document.querySelector(".navbar-toggler").addEventListener("click", function(){
  mainNav = document.querySelector("#mainNav");
  if(! mainNav.classList.contains("navbar-reduce")){
    mainNav.classList.add('navbar-reduce');
    mainNav.classList.remove('navbar-trans');
  }
})

window.addEventListener('scroll' , function(){
  var pixels = 50;
  if(document.body.scrollTop > pixels || document.documentElement.scrollTop > pixels){
    document.querySelector(".navbar").classList.add("navbar-reduce");
    document.querySelector(".navbar").classList.remove("navbar-trans");
  }
  else{
    document.querySelector(".navbar").classList.add("navbar-trans");
    document.querySelector(".navbar").classList.remove("navbar-reduce");
  }
});

document.querySelector(".navbar-toggler").addEventListener("click", function(){
  var togglerNav = document.querySelector("#navbarDefault");
  if(togglerNav.classList.contains("collapse")){
    togglerNav.classList.remove("collapse");
  }
  else if(! togglerNav.classList.contains("collapse")){
    togglerNav.classList.add("collapse");
  }
});

  items = document.querySelectorAll('.js-scroll');
  for (var i = 0 ; i <items.length ; i++){
    items[i].addEventListener("click", function(){
      document.querySelector("#navbarDefault").classList.add('collapse');
    })
  }

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 3; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 400;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-left: 0.08em solid #fff }";
    document.body.appendChild(css);
  };

  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 20, 1000);
    counter("count2-first", 0, 1, 10);
    counter("count2-second", 0, 700, 100);
    counter("count3-first", 0, 1, 10);
    counter("count3-second", 0, 300, 100);
    counter("count4-first", 0, 1, 20);
    counter("count4-second", 0, 200, 100);

   });

   document.addEventListener('DOMContentLoaded', function() {
    pagenum = 1;
    function AutoRotate() {
       var allElements = document.getElementsByTagName('label');
       for (var i = 0 ; i < allElements.length ; i++) {
           var myfor = allElements[i].getAttribute('for');
           if ((myfor !== null) && (myfor == ('slide_' + pagenum))) {
               allElements[i].click();
               break;
           }
       }
       if (pagenum == 4) {
           pagenum = 1;
       } else {
           pagenum++;
       }
    }
    setInterval(AutoRotate, 5000);
 });

projectButtons = document.querySelectorAll("#project-flters li");
for (var i = 0 ; i<projectButtons.length; i++){
  projectButtons[i].addEventListener("click" , function(){
    for (var j = 0 ; j < projectButtons.length ; j++){
      projectButtons[j].classList.remove("filter-active");
    }
    this.classList.add("filter-active");
  })
}

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
function bgChange(){
  overlay = document.querySelectorAll(".project-img-overlay")
  for(var i = 0 ; i <overlay.length ; i++){
    overlay[i].style.display = "none";
  }

  navbar = document.querySelector("nav");
  navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

  document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}
var modal1 = document.getElementById("myModal1");

var img1 = document.getElementById("myImg1");
img1.onclick = function(){
  modal1.style.display = "block";
  bgChange();
}
var next1 = document.getElementById("nextbtn1");
next1.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
}

var prev1 = document.getElementById("prevbtn1");
prev1.onclick = function(){
    modal1.style.display = "none";
    modal6.style.display = "block";
}

var modal2 = document.getElementById("myModal2");

var img2 = document.getElementById("myImg2");
img2.onclick = function(){
  modal2.style.display = "block";
  bgChange();
}

var next2 = document.getElementById("nextbtn2");
next2.onclick = function(){
    modal2.style.display = "none";
    modal3.style.display = "block";
}

var prev2 = document.getElementById("prevbtn2");
prev2.onclick = function(){
    modal2.style.display = "none";
    modal1.style.display = "block";
}

var modal3 = document.getElementById("myModal3");

var img3 = document.getElementById("myImg3");
img3.onclick = function(){
  modal3.style.display = "block";
  bgChange();
}

var next3 = document.getElementById("nextbtn3");
next3.onclick = function(){
    modal3.style.display = "none";
    modal4.style.display = "block";
}

var prev3 = document.getElementById("prevbtn3");
prev3.onclick = function(){
    modal3.style.display = "none";
    modal2.style.display = "block";
}

var modal4 = document.getElementById("myModal4");

var img4 = document.getElementById("myImg4");
img4.onclick = function(){
  modal4.style.display = "block";
  bgChange();
}
var next4 = document.getElementById("nextbtn4");
next4.onclick = function(){
    modal4.style.display = "none";
    modal5.style.display = "block";
}

var prev4 = document.getElementById("prevbtn4");
prev4.onclick = function(){
    modal4.style.display = "none";
    modal3.style.display = "block";
}

var modal5 = document.getElementById("myModal5");

var img5 = document.getElementById("myImg5");
img5.onclick = function(){
  modal5.style.display = "block";
  bgChange();
}
var next5 = document.getElementById("nextbtn5");
next5.onclick = function(){
    modal5.style.display = "none";
    modal6.style.display = "block";
}

var prev5 = document.getElementById("prevbtn5");
prev5.onclick = function(){
    modal5.style.display = "none";
    modal4.style.display = "block";
}

var modal6 = document.getElementById("myModal6");

var img6 = document.getElementById("myImg6");
img6.onclick = function(){
  modal6.style.display = "block";
  bgChange();
}
var next6 = document.getElementById("nextbtn6");
next6.onclick = function(){
    modal6.style.display = "none";
    modal1.style.display = "block";
}

var prev6 = document.getElementById("prevbtn6");
prev6.onclick = function(){
    modal6.style.display = "none";
    modal5.style.display = "block";
}

var span = document.getElementsByClassName("close");
for( var i = 0 ; i<span.length ; i++){
    span[i].onclick = function() { 
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.height = "auto"; 
        navbar = document.querySelector("nav");
        navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
        overlay = document.querySelectorAll(".project-img-overlay")
        for(var i = 0 ; i <overlay.length ; i++){
          overlay[i].style.display = "block";
        }
    }
}

// window.onclick = function(event) {
//   if (event.target != modal) {
//     modal1.style.display = "none";
//     modal2.style.display = "none";
//         modal3.style.display = "none";
//         modal4.style.display = "none";
//       document.body.style.overflow = "auto"; // ADD THIS LINE
//       document.body.style.height = "auto";  
// }
// }
