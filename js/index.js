window.addEventListener("DOMContentLoaded", function () {
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

  burger.addEventListener('mouseover', cursorOver);
  burger.addEventListener('mouseleave', cursorLeave);
  burger.addEventListener('click', function () {
    this.style.zIndex = '2';
    menu.classList.toggle('active');
    this.classList.toggle('active');
    menuA.forEach(function (e) {
      e.classList.toggle('active');
    });
  });



  //fullpageScroll, header
  var headEle = document.querySelector('.header'),
    logoImg = headEle.querySelector(".logo img"),
    spanEle = headEle.querySelector('.logo span');


  var conEle = document.querySelector('.maincontents'),
    divEle = document.querySelectorAll('.maincontents .scroll'),
    conPos = [],
    idx = 0;

  setTimeout(function () {
    divEle.forEach(function (el, i) {
      if (divEle.length - 1 != i) {
        conPos.push(el.offsetTop);
      } else {
        conPos.push(el.offsetTop - (window.innerHeight - el.offsetHeight));
      }
    });
    window.scrollTo(0, 0);
  }, 100);

  var ii;
  window.addEventListener('mousewheel', function (e) {
    clearTimeout(ii);
    ii = setTimeout(mainActive, 100, e);
  });

  function mainActive(e) {
    if (e.wheelDelta < 0) {
      // headerAddClass
      logoImg.classList.add('active');
      spanEle.classList.add('active');
      headEle.classList.add('active');
      if (idx < divEle.length) {
        idx++;
      }

    } else {
      // headerRemoveClass
      if (idx <= 1) {
        logoImg.classList.remove('active');
        spanEle.classList.remove('active');
        headEle.classList.remove('active');
      }
      if (idx > 0) {
        idx--;
      }
    }
    conEle.style.transform = 'translateY(-' + conPos[idx] + 'px)';
  }


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
    moreA.style.color = '#444';
  });

  newsMore.addEventListener('mouseleave', function () {
    arrow.style.marginLeft = 0;
    arrow.style.transition = .5 + 's';
    moreA.style.color = '#000';
  });

  // newsHover
  newsA.forEach(function (e, idx) {
    var newsImg = news.querySelectorAll('div img'),
      newsTittle = news.querySelectorAll('article h4');

    e.addEventListener('mouseenter', function () {
      newsImg[idx].style.transform = 'scale(1.1)';
      newsTittle[idx].style.fontWeight = 'bold';
      e.style.color = '#444';
    });
    e.addEventListener('mouseleave', function () {
      newsImg[idx].style.transform = 'scale(1)';
      newsTittle[idx].style.fontWeight = '400';
      e.style.color = '#000';
    });
  });

});