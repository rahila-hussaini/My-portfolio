/* menue reponsive*/
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav');

menuIcon.addEventListener('click', function () {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column'; 
  }
});


/**/