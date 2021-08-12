var elSiteHeader = document.querySelector('.site-header')
var elSiteHeaderNavButton = document.querySelector('.js-header-button');


if(elSiteHeaderNavButton){
  elSiteHeaderNavButton.addEventListener('click', function() {
    elSiteHeader.classList.toggle('site-header--open');
  });
}