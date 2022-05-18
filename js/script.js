jQuery(document).ready(function ($) {



   let fog1 = document.querySelector('.fly1');
   let fog2 = document.querySelector('.fly2');
   let fog3 = document.querySelector('.fly3');
   let fog4 = document.querySelector('.fly4');
   let fog5 = document.querySelector('.fly5');
   let fog6 = document.querySelector('.fly6');
   let fog7 = document.querySelector('.fly7');
   let fog8 = document.querySelector('.fly8');
   let fog9 = document.querySelector('.fly9');
   let fog10 = document.querySelector('.fly10');
   window.addEventListener('mousemove', function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      fog1.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
      fog2.style.transform = 'translate(+' + x * 30 + 'px, -' + y * 30 + 'px)';
      fog3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      fog5.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
      fog6.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      fog7.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
      fog8.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
      fog9.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
      fog10.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
   });



});