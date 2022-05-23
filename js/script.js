jQuery(document).ready(function ($) {

      const section = $('.section'),
            nav = $('.menu'),
            navHeight = nav.outerHeight(); // получаем высоту навигации 

      // поворот экрана 
      window.addEventListener('orientationchange', function () {
            navHeight = nav.outerHeight();
      }, false);

      $(window).on('scroll', function () {
            const position = $(this).scrollTop();

            section.each(function () {
                  const top = $(this).offset().top - navHeight - 5,
                        bottom = top + $(this).outerHeight();

                  if (position >= top && position <= bottom) {
                        nav.find('a').removeClass('active');
                        section.removeClass('active');

                        $(this).addClass('active');
                        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                  }
            });
      });

      nav.find('a').on('click', function () {
            const id = $(this).attr('href');

            $('html, body').animate({
                  scrollTop: $(id).offset().top - navHeight
            }, 487);

            return false;
      });


      var preloader = $('#preloader'), // селектор прелоадера
            imagesCount = $('img').length, // количество изображений
            dBody = $('body'), //обращаемся к body
            percent = 100 / imagesCount, // количество % на одну картинку
            progress = 0, // точка отсчета
            imgSum = 5, // количество картинок
            loadedImg = 0; // счетчик загрузки картинок

      if (imagesCount >= imgSum && imagesCount > 0) {
            preloader.css('background', '#000');
            dBody.css('overflow', 'hidden');

            $(".dws-progress-bar").circularProgress({
                  color: "#EF2ADC",
                  line_width: 17,
                  height: "350px",
                  width: "350px",
                  percent: 0,
                  // counter_clockwise: true,
                  starting_position: 25
            }).circularProgress('animate', percent, 1000);

            for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
                  var img_copy = new Image();
                  img_copy.src = document.images[i].src;
                  img_copy.onload = img_load;
                  img_copy.onerror = img_load;
            }

            function img_load() {
                  progress += percent;
                  loadedImg++;
                  if (progress >= 100 || loadedImg == imagesCount) {
                        preloader.delay(400).fadeOut('slow');
                        dBody.css('overflow', '');
                  }
                  $(".dws-progress-bar").circularProgress('animate', progress, 500);
            }
      } else {
            preloader.remove();
      }





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
      let sub1 = document.querySelector('.sub1');
      let sub2 = document.querySelector('.sub2');
      let sub6 = document.querySelector('.sub6');
      let sub4 = document.querySelector('.sub4');
      let sub7 = document.querySelector('.sub7');
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
            light1.style.transform = 'translate(-' + x * 90 + 'px, -' + y * 90 + 'px)';
            light2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
            light3.style.transform = 'translate(-' + x * 140 + 'px, -' + y * 140 + 'px)';
            light4.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
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
            sub1.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
            sub2.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
            sub6.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)';
            sub4.style.transform = 'translate(-' + x * 5 + 'px, -' + y * 5 + 'px)';
            sub7.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';


            

      });









      var totalImages = 34;
      var images = [];
      var images2 = [];
      for (var i = 1; i < totalImages; i++) {
            var filename = '';
            if (i < 10) filename += '00';
            else if (i < 100) filename += '0';
            filename += i + '.png';
            var img = new Image;
            var img2 = new Image;
            img.src = 'img/sequence/cat/' + filename;
            img2.src = 'img/sequence/ufo/' + filename;
            images.push(img);
            images2.push(img2);

      }

      var canv = document.getElementById('background');
      var canv2 = document.getElementById('background2');
      var context = canv.getContext('2d');
      var context2 = canv2.getContext('2d');


      var currentLocation = 0;

      var setImage = function (newLocation) {
            context.clearRect(0, 0, 1280, 720);
            context.drawImage(images[newLocation], 0, 0, 1280, 720);
      }
      var setImage2 = function (newLocation) {
            context2.clearRect(0, 0, 1280, 720);
            context2.drawImage(images2[newLocation], 0, 0, 1280, 720);
      }
      var wheelDistance = function (evt) {
            if (!evt) evt = event;
            var w = evt.wheelDelta, d = evt.detail;
            if (d) {
                  if (w) return w / d / 40 * d > 0 ? 1 : -1; // Opera
                  else return -d / 3;              // Firefox;         TODO: do not /3 for OS X
            } else return w / 120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
      };
      var wheelDirection = function (evt) {
            if (!evt) evt = event;
            return (evt.detail < 0) ? 1 : (evt.wheelDelta > 0) ? 1 : -1;
      };

      var MouseWheelHandler = function (e) {
            e.preventDefault(); // No scroll

            // The following equation will return either a 1 for scroll down
            // or -1 for a scroll up
            var distance = wheelDistance(e);
            var direction = wheelDirection(e);

            // This code mostly keeps us from going too far in either direction
            currentLocation -= Math.round(distance * 3);
            if (currentLocation < 0) currentLocation = 0;
            if (currentLocation >= images.length)
                  currentLocation = images.length - 1;

            // See below for the details of this function
            console.log("currentLocation", currentLocation, distance);
            setImage(currentLocation);
            setImage2(currentLocation);
      };
      var canvasFillWin = function (e) {
            var h = 720;
            var w = 1280;
            var ratio = h / w;
            var winW = $(window).width();
            var winH = $(window).height();
            var winRatio = winH / winW;

            if (winRatio > ratio) {
                  $(canv)
                        .width(winH / ratio)
                        .height(winH)
                        .css({

                              // marginLeft: - winH / ratio / 2 + "px",
                              left: "50%",
                              top: "0",
                              marginTop: "0"
                        });
                  $(canv2)
                        .width(winW)
                        .height(winH)
                        .css({
                              // marginLeft: - winH / ratio / 2 + "px",
                              left: "50%",
                              top: "0",
                              marginTop: "0"
                        });
            } else {
                  $(canv)
                        .width(winW)
                        .height(winW * ratio)
                        .css({
                              marginLeft: "0",
                              left: "0",
                              top: "50%",
                              marginTop: - winW * ratio / 2 + "px"
                        });
                  $(canv2)
                        .width(winW)
                        .height(winW * ratio)
                        .css({
                              marginLeft: "0",
                              left: "0",
                              top: "50%",
                              marginTop: - winW * ratio / 2 + "px"
                        });
            }

      }
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", MouseWheelHandler, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
      window.addEventListener("resize", canvasFillWin, false);
      setImage(1);
      setImage2(1);
      canvasFillWin();



      ///////////////////////////////////////////////////////////////////////////////////////










      setTimeout(function () {
            $("#clothes1").remove();
      }, 5000)



});


