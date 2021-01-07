window.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector(".logo");
  var logoImg = logo.querySelector("img");
  var spanEle = logo.querySelector('span');
  var headEle = document.querySelector('header');

  window.addEventListener("scroll", function () {

if(this.scrollY > 5){
    logoImg.classList.add('active');
    spanEle.classList.add('active');
    headEle.classList.add('active');
}else{
    logoImg.classList.remove('active');
    spanEle.classList.remove('active');
    headEle.classList.remove('active');
}
  });

  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  var mBurger = document.querySelector('.m-burger');

  burger.addEventListener('click', function(){

    menu.classList.add('active');
    this.classList.add('active');
    mBurger.classList.add('active');
  });

  mBurger.addEventListener('click',function(){
    menu.classList.remove('active');
    burger.classList.remove('active');
    this.classList.remove('active');
  });

var newsMore = document.querySelector('main .more');
var arrow = newsMore.querySelector('img');
var newsA = newsMore.querySelector('a');


newsMore.addEventListener('mouseenter',function(){
arrow.style.marginLeft = 10+'px';
arrow.style.transition = .5+'s';
newsA.style.color = 'grey';

});

newsMore.addEventListener('mouseleave',function(){
  arrow.style.marginLeft = 0;
  arrow.style.transition = .5+'s';
  newsA.style.color = '#000';
  });
  
  // next
  // change style to .more a



});
