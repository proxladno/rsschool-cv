document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  if (hamburger && navList) {
    hamburger.addEventListener('click', function() {
      // Переключаем класс active на гамбургере (для анимации)
      hamburger.classList.toggle('active');
      // Переключаем класс active на nav-list (для показа/скрытия меню)
      navList.classList.toggle('active');
    });
  }
});