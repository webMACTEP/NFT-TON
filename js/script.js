jQuery(document).ready(function ($) {



   let bg = document.querySelector('.fly1');
   let fog1 = document.querySelector('.fly2');
   let fog2 = document.querySelector('.fly3');
   window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog1.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
   });



});