window.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector(".logo");
  var logoImg = logo.querySelector("img");
  var spanEle = logo.querySelector('span');
  var headEle = document.querySelector('.header');

  window.addEventListener("scroll", function () {

if(this.scrollY >= 5){
    logoImg.classList.add('active');
    spanEle.classList.add('active');
    headEle.classList.add('active');
}else{
    logoImg.classList.remove('active');
    spanEle.classList.remove('active');
    headEle.classList.remove('active');
}


  });

  



});
