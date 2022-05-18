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
   let light1 = document.querySelector('.light1');
   let light2 = document.querySelector('.light2');
   let light3 = document.querySelector('.light3');
   let light4 = document.querySelector('.light4');
   let how1 = document.querySelector('.how1');
   let how2 = document.querySelector('.how2');
   let how3 = document.querySelector('.how3');
   let how4 = document.querySelector('.how4');
   let how5 = document.querySelector('.how5');
   let how6 = document.querySelector('.how6');
   let how7 = document.querySelector('.how7');
   let how8 = document.querySelector('.how8');
   let metalball1 = document.querySelector('.metal-ball1');
   let metalball2 = document.querySelector('.metal-ball2');
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
      light1.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';
      light2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
      light3.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 40 + 'px)';
      light4.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';
      metalball1.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 40 + 'px)';
      metalball2.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 30 + 'px)';
      how1.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
      how2.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
      how3.style.transform = 'translate(-' + x * 90 + 'px, -' + y * 90 + 'px)';
      how4.style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)';
      how5.style.transform = 'translate(-' + x * 110 + 'px, -' + y * 110 + 'px)';
      how6.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
      how7.style.transform = 'translate(-' + x * 75 + 'px, -' + y * 75 + 'px)';
      how8.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
      
   });



});