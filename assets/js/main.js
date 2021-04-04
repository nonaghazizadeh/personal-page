"use strict"
const nav = document.querySelector('nav');
document.querySelector(".navbar-toggler").addEventListener("click", function(){
  const mainNav = document.querySelector("#mainNav");
  if(! mainNav.classList.contains("navbar-reduce")){
    mainNav.classList.add('navbar-reduce');
    mainNav.classList.remove('navbar-trans');
  }
})

window.addEventListener('scroll' , function(){
  const pixels = 50;
  const navbar =  document.querySelector(".navbar");
  if(document.body.scrollTop > pixels || document.documentElement.scrollTop > pixels){
    navbar.classList.add("navbar-reduce");
    navbar.classList.remove("navbar-trans");
  }
  else{
    navbar.classList.add("navbar-trans");
    navbar.classList.remove("navbar-reduce");
  }
});

document.querySelector(".navbar-toggler").addEventListener("click", function(){
  const togglerNav = document.querySelector("#navbarDefault");
  if(togglerNav.classList.contains("collapse")){
    togglerNav.classList.remove("collapse");
  }
  else if(! togglerNav.classList.contains("collapse")){
    togglerNav.classList.add("collapse");
  }
});

const items = document.querySelectorAll('.js-scroll');
const togglerNav = document.querySelector("#navbarDefault");
for (let i = 0 ; i <items.length ; i++){
  items[i].addEventListener("click", function(){
    togglerNav.classList.add('collapse');
  })
}

var txtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10);
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

txtRotate.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  let element = this;
  let time = 150 - Math.random() * 100;

  if (this.isDeleting) { time /= 3; }

  if (!this.isDeleting && this.txt === fullTxt) {
    time = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    time = 400;
  }
  setTimeout(function() {
    element.tick();
  }, time);
};

document.addEventListener("DOMContentLoaded", function()  {
  const elements = document.getElementsByClassName('txt-rotate');
  for (let i=0; i<elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-rotate');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new txtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
});

function counter(id, start, end) {
  let obj = document.getElementById(id),
  timer = setInterval(() => {
  start += 1;
  obj.textContent = start;
  if (start === end) {
    clearInterval(timer);
  }
  }, Math.abs(Math.floor(100 / end - start)));
}

document.addEventListener("DOMContentLoaded", function()  {
  counter("count1", 0, 20);
  counter("count2-first", 0, 1);
  counter("count2-second", 0, 700);
  counter("count3-first", 0, 1, 10);
  counter("count3-second", 0, 300);
  counter("count4-first", 0, 1);
  counter("count4-second", 0, 200);
  });

  document.addEventListener('DOMContentLoaded', function() {
  let pagenum = 1;
  function AutoRotate() {
    const allElements = document.getElementsByTagName('label');
    for (let i = 0 ; i < allElements.length ; i++) {
      let myfor = allElements[i].getAttribute('for');
      if ((myfor !== null) && (myfor === ('slide_' + pagenum))) {
        allElements[i].click();
        break;
      }
    }
    if (pagenum === 4) {
      pagenum = 1;
    } else {
      pagenum++;
    }
  }
  setInterval(AutoRotate, 5000);
});

const projectButtons = document.querySelectorAll("#project-flters li");
for (let i = 0 ; i<projectButtons.length; i++){
  projectButtons[i].addEventListener("click" , function(){
    for (let j = 0 ; j < projectButtons.length ; j++){
      projectButtons[j].classList.remove("filter-active");
    }
    this.classList.add("filter-active");
  })
}

document.querySelector('#all').addEventListener("click", function(){
  const projects = document.querySelectorAll(".project-box");
  for (let i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    let num  = projects[i].classList.length;
    let last = projects[i].classList.item(num-1);
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
  document.querySelector("#project-container").className = "project-container-all";

  for (let i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("all")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#branding').addEventListener("click", function(){
  const projects = document.querySelectorAll(".project-box");
  for (let i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    let num  = projects[i].classList.length;
    let last = projects[i].classList.item(num-1);
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
  document.querySelector("#project-container").className = "project-container-brand";

  for (let i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("branding")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#web').addEventListener("click", function(){
  const projects = document.querySelectorAll(".project-box");
  for (let i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    let num  = projects[i].classList.length;
    let last = projects[i].classList.item(num-1);
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
  
  document.querySelector("#project-container").className = "project-container-web";

  for (let i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("webdesign")) {
      projects[i].style.display = "block";
    }
  }
})

document.querySelector('#photography').addEventListener("click", function(){
  const projects = document.querySelectorAll(".project-box");
  for (let i = 0; i < projects.length; i++){
    projects[i].style.display = "none";
    let num  = projects[i].classList.length;
    let last = projects[i].classList.item(num-1);
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

  document.querySelector("#project-container").className = "project-container-photography";
  for (let i = 0; i < projects.length; i++){
    if (projects[i].classList.contains("photography")) {
      projects[i].style.display = "block";
    }
  }
})

function bgChange(){
  const overlay = document.querySelectorAll(".project-img-overlay")
  for(let i = 0 ; i <overlay.length ; i++){
    overlay[i].style.display = "none";
  }
  const navbar = document.querySelector("nav");
  navbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";

  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}

const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");
const modal6 = document.getElementById("myModal6");

document.getElementById("myImg1").onclick = function(){
  modal1.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn1").onclick = function(){
  modal1.style.display = "none";
  modal2.style.display = "block";
}

document.getElementById("prevbtn1").onclick = function(){
  modal1.style.display = "none";
  modal6.style.display = "block";
}

document.getElementById("myImg2").onclick = function(){
  modal2.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn2").onclick = function(){
  modal2.style.display = "none";
  modal3.style.display = "block";
}
 
document.getElementById("prevbtn2").onclick = function(){
  modal2.style.display = "none";
  modal1.style.display = "block";
}

document.getElementById("myImg3").onclick = function(){
  modal3.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn3").onclick = function(){
  modal3.style.display = "none";
  modal4.style.display = "block";
}

document.getElementById("prevbtn3").onclick = function(){
  modal3.style.display = "none";
  modal2.style.display = "block";
}

document.getElementById("myImg4").onclick = function(){
  modal4.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn4").onclick = function(){
  modal4.style.display = "none";
  modal5.style.display = "block";
}

document.getElementById("prevbtn4").onclick = function(){
  modal4.style.display = "none";
  modal3.style.display = "block";
}

document.getElementById("myImg5").onclick = function(){
  modal5.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn5").onclick = function(){
  modal5.style.display = "none";
  modal6.style.display = "block";
}

document.getElementById("prevbtn5").onclick = function(){
  modal5.style.display = "none";
  modal4.style.display = "block";
}

document.getElementById("myImg6").onclick = function(){
  modal6.style.display = "block";
  bgChange();
}

document.getElementById("nextbtn6").onclick = function(){
  modal6.style.display = "none";
  modal1.style.display = "block";
}

document.getElementById("prevbtn6").onclick = function(){
  modal6.style.display = "none";
  modal5.style.display = "block";
}

const closeSpan = document.getElementsByClassName("close");
for( let i = 0 ; i<closeSpan.length ; i++){
  closeSpan[i].onclick = function() { 
      backToPrimaryBg();
  }
}

window.onclick = function(event) {
  var outside = document.querySelectorAll("td");
  for (let i = 0 ; i < outside.length; i++){
    if (event.target === outside[i]) {
      backToPrimaryBg();
    }
  } 
}
function backToPrimaryBg(){
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
  modal5.style.display = "none";
  modal6.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";  
  const navbar = document.querySelector("nav");
  navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
  const overlay = document.querySelectorAll(".project-img-overlay")
  for(var i = 0 ; i <overlay.length ; i++){
    overlay[i].style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const duration = 300;
  const scrollToTarget = function(target) {
  const top = target.getBoundingClientRect().top;
  const startPos = window.pageYOffset;
  let startTime = null;
  let requestId;

  const loop = function(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    const time = currentTime - startTime;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startPos + top * percent);
    
    if (time < duration) {
      var requestId = window.requestAnimationFrame(loop);
    } else {
      window.cancelAnimationFrame(requestId);
    }
  };
  requestId = window.requestAnimationFrame(loop);
};

const clickHandler = function(e) {
    e.preventDefault();
    scrollToTarget(document.getElementById(e.target.getAttribute('href').substr(1)));
};
  const navLinks = document.querySelectorAll(".nav-link");
  for (var i = 0 ; i < navLinks.length ; i++){
    navLinks[i].addEventListener("click", clickHandler);
  } 
  const homebtn1 = document.querySelector(".home-btn-1")
  homebtn1.addEventListener("click",clickHandler);
  const homebtn2 = document.querySelector(".home-btn-2")
  homebtn2.addEventListener("click", clickHandler);
});

