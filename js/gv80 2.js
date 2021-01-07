window.addEventListener("DOMContentLoaded", function () {
  //   var logo = document.querySelector(".logo");
  //   var logoImg = logo.querySelector("img");
  //   var spanEle = logo.querySelector('span');
  //   var headEle = document.querySelector('.header');

  //   window.addEventListener("scroll", function () {

  // if(this.scrollY >= 5){
  //     logoImg.classList.add('active');
  //     spanEle.classList.add('active');
  //     headEle.classList.add('active');
  // }else{
  //     logoImg.classList.remove('active');
  //     spanEle.classList.remove('active');
  //     headEle.classList.remove('active');
  // }
  //   });

  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }


    requestAnimationFrame(animation);
  }


var section1 = document.querySelector('.section1');

section1.addEventListener('click',function(e){
  e.preventDefault();
smoothScroll('.gv80_m_1',1000);
});

window.addEventListener('mousewheel',function(e){
if(e.deltaY>0){
  smoothScroll('.gv80_m_1',1000);
} 
});





});