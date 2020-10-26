window.addEventListener("DOMContentLoaded", function () {

  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);

  //mouseCursorCustom
  var mouseCursor = document.querySelector('.cursor');
  var allA = document.querySelectorAll('a');

  window.addEventListener('scroll', cursor);
  window.addEventListener('mousemove', cursor);

  function cursor(e) {
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.top = e.pageY - scrollY + 'px';
  }

  function cursorOver() {
    mouseCursor.classList.add('cursor-grow');
  }

  function cursorLeave() {
    mouseCursor.classList.remove('cursor-grow');
  }

  allA.forEach(function (a) {
    a.addEventListener('mouseover', cursorOver);
    a.addEventListener('mouseleave', cursorLeave);
  });

  // burgerMenu
  var burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    menuA = menu.querySelectorAll('a');

  burger.addEventListener('click', function () {
    this.style.zIndex = '2';
    menu.classList.toggle('active');
    this.classList.toggle('active');
    menuA.forEach(function (e) {
      e.classList.toggle('active');
    });
  });



  //news
  var news = document.querySelector('.news'),
    newsA = news.querySelectorAll('div a'),
    newsMore = document.querySelector('.more'),
    arrow = newsMore.querySelector('img'),
    moreA = newsMore.querySelector('a');

  // newsMoreButtonHover
  newsMore.addEventListener('mouseenter', function () {
    arrow.style.marginLeft = 10 + 'px';
    arrow.style.transition = .5 + 's';
    moreA.style.color = '#ddd';
  });

  newsMore.addEventListener('mouseleave', function () {
    arrow.style.marginLeft = 0;
    arrow.style.transition = .5 + 's';
    moreA.style.color = '#fff';
  });

  // newsHover
  newsA.forEach(function (e, idx) {
    var newsImg = news.querySelectorAll('div img'),
      newsTittle = news.querySelectorAll('article h4');

    e.addEventListener('mouseenter', function () {
      newsImg[idx].style.transform = 'scale(1.1)';
      newsTittle[idx].style.fontWeight = 'bold';
      e.style.color = '#fff';
    });
    e.addEventListener('mouseleave', function () {
      newsImg[idx].style.transform = 'scale(1)';
      newsTittle[idx].style.fontWeight = '400';
      e.style.color = '#ddd';
    });
  });

  //smoothScroll

  var target = document.querySelector('.gv80_m_1');
  var targetPosition = target.offsetTop;
  var body = document.querySelector('body');

  window.addEventListener('mousewheel', function (e) {
    clearTimeout();
    setTimeout(function () {
      if (e.wheelDelta < 0) {
        if (this.scrollY < targetPosition) {
          window.scrollTo(0, targetPosition);
          body.style.overflow = 'auto';
          genesisModels.style.width = '100%';
          genesisModels.style.left = '0';
        }
      } else {
        if (this.scrollY < targetPosition) {
          window.scrollTo(0, 0);
          body.style.overflow = 'hidden';
        }
      }
      console.log(this.scrollY)
    }, 500);

  });

  //header scroll
  var headEle = document.querySelector('header'),
    headerDiv = headEle.querySelector('.header'),
    logoImg = headEle.querySelector(".logo img"),
    spanEle = headEle.querySelector('.logo span');

  window.addEventListener('scroll', function () {
    if (this.scrollY >= 5) {
      logoImg.classList.add('active');
      spanEle.classList.add('active');
      headEle.classList.add('active');
      if (this.scrollY > targetPosition) {
        headerDiv.style.transform = 'translateY(-100px)';
        headerDiv.style.height = '50px';
        genesisModels.style.width = '130%';
        genesisModels.style.left = '-15%';

      } else {
        headerDiv.style.transform = 'translateY(0)';
        headerDiv.style.height = '150px';
        genesisModels.style.width = '100%';
        genesisModels.style.left = '0%';
      }
    } else {
      logoImg.classList.remove('active');
      spanEle.classList.remove('active');
      headEle.classList.remove('active');
    }
  });

  //models click

  var modelsBtn = document.querySelector('.left');
  var genesisModels = document.querySelector('.genesis_models');
  var modelsA = genesisModels.querySelectorAll('a');
  console.log(modelsA)
  modelsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    genesisModels.classList.toggle('active');
    modelsA.forEach(function (a) {
      setTimeout(function(){
        a.classList.toggle('active');
      },200);
    });
  });





});