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









      var totalImages = 45;
      var images = [];
      for (var i = 1; i < totalImages; i++) {
            var filename = '';
            if (i < 10) filename += '00';
            else if (i < 100) filename += '0';
            filename += i + '.png';
            var img = new Image;
            img.src = 'http://127.0.0.1:5500/img/sequence/cat/' + filename;
            images.push(img);

      }

      var canv = document.getElementById('background');
      var canv2 = document.getElementById('background2');
      var context = canv.getContext('2d');
      var context2 = canv2.getContext('2d');


      var currentLocation = 0;

      var setImage = function (newLocation) {
            context.clearRect(0, 0, 1280, 720);
            context.drawImage(images[newLocation], 0, 0, 1280, 720);
            context2.clearRect(0, 0, 1280, 720);
            context2.drawImage(images[newLocation], 0, 0, 1280, 720);
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
            }

      }
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", MouseWheelHandler, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
      window.addEventListener("resize", canvasFillWin, false);
      setImage(1);
      canvasFillWin();



      ///////////////////////////////////////////////////////////////////////////////////////





});


