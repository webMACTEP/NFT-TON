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


      const appleSequenceImages = [];
      const treeSequenceImages = [];

      for (let i = 0; i <= 131; i++) {
            appleSequenceImages.push(`${`00${i}`.slice(-4)}.png`);
      }
      for (let i = 0; i <= 98; i++) {
            treeSequenceImages.push(`${`000${i}`.slice(-3)}.jpg`);
      }

      const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      class EventEmitter {
            listeners = {}
            addListener(eventName, fn) {
                  this.listeners[eventName] = this.listeners[eventName] || [];
                  this.listeners[eventName].push(fn);
                  return this;
            }
            on(eventName, fn) {
                  return this.addListener(eventName, fn);
            }
            once(eventName, fn) {
                  this.listeners[eventName] = this.listeners[eventName] || [];
                  const onceWrapper = () => {
                        fn();
                        this.off(eventName, onceWrapper);
                  }
                  this.listeners[eventName].push(onceWrapper);
                  return this;
            }
            off(eventName, fn) {
                  return this.removeListener(eventName, fn);
            }
            removeListener(eventName, fn) {
                  let lis = this.listeners[eventName];
                  if (!lis) return this;
                  for (let i = lis.length; i > 0; i--) {
                        if (lis[i] === fn) {
                              lis.splice(i, 1);
                              break;
                        }
                  }
                  return this;
            }
            emit(eventName, ...args) {
                  let fns = this.listeners[eventName];
                  if (!fns) return false;
                  fns.forEach((f) => {
                        f(...args);
                  });
                  return true;
            }
            listenerCount(eventName) {
                  let fns = this.listeners[eventName] || [];
                  return fns.length;
            }
            rawListeners(eventName) {
                  return this.listeners[eventName];
            }
      }
      class Canvas {
            constructor(e) {
                  this.images = e.images;
                  this.container = e.container;
                  this.cover = e.cover;
                  this.displayIndex = 0;
            }

            setup() {
                  this.canvas = document.createElement("canvas");
                  this.container.appendChild(this.canvas);
                  this.ctx = this.canvas.getContext('2d')

                  window.addEventListener('resize', () => this.resize());
                  this.resize();
            }

            renderIndex(e) {
                  if (this.images[e]) {
                        return this.drawImage(e);
                  }
                  // Find closest loaded image
                  for (var t = Number.MAX_SAFE_INTEGER, r = e; r >= 0; r--)
                        if (this.images[r]) {
                              t = r;
                              break
                        }
                  for (var n = Number.MAX_SAFE_INTEGER, i = e, o = this.images.length; i < o; i++)
                        if (this.images[i]) {
                              n = i;
                              break
                        }
                  this.images[t] ? this.drawImage(t) : this.images[n] && this.drawImage(n)
            }

            drawImage(e) {
                  this.displayIndex = e,
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                  const x = Math.floor((this.canvas.width - this.images[this.displayIndex].naturalWidth) / 2);
                  const y = Math.floor((this.canvas.height - this.images[this.displayIndex].naturalHeight) / 2);
                  if (this.cover) {

                        this.drawImageCover(this.ctx, this.images[this.displayIndex]);
                  } else {
                        this.ctx.drawImage(this.images[this.displayIndex], x, y);
                  }
            }

            resize() {
                  const w = this.container.clientWidth;
                  const h = this.container.clientHeight;
                  this.canvas.style.height = `${h}px`;
                  this.canvas.style.width = `${w}px`;
                  this.canvas.height = h;
                  this.canvas.width = w;

                  this.renderIndex(this.displayIndex);
            }

            /**
           * By Ken Fyrstenberg Nilsen
           *
           * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
           *
           * If image and context are only arguments rectangle will equal canvas
          */
            drawImageCover(ctx, img, x, y, w, h, offsetX, offsetY) {

                  if (arguments.length === 2) {
                        x = y = 0;
                        w = ctx.canvas.width;
                        h = ctx.canvas.height;
                  }

                  // default offset is center
                  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
                  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

                  // keep bounds [0.0, 1.0]
                  if (offsetX < 0) offsetX = 0;
                  if (offsetY < 0) offsetY = 0;
                  if (offsetX > 1) offsetX = 1;
                  if (offsetY > 1) offsetY = 1;

                  var iw = img.width,
                        ih = img.height,
                        r = Math.min(w / iw, h / ih),
                        nw = iw * r,   // new prop. width
                        nh = ih * r,   // new prop. height
                        cx, cy, cw, ch, ar = 1;

                  // decide which gap to fill    
                  if (nw < w) ar = w / nw;
                  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
                  nw *= ar;
                  nh *= ar;

                  // calc source rectangle
                  cw = iw / (nw / w);
                  ch = ih / (nh / h);

                  cx = (iw - cw) * offsetX;
                  cy = (ih - ch) * offsetY;

                  // make sure source rectangle is valid
                  if (cx < 0) cx = 0;
                  if (cy < 0) cy = 0;
                  if (cw > iw) cw = iw;
                  if (ch > ih) ch = ih;

                  // fill image in dest. rectangle
                  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
            }
      }
      class ImgLoader extends EventEmitter {
            constructor(opts) {
                  super();
                  this.images = opts.imgsRef;
                  this.imageNames = opts.images;
                  this.imagesRoot = opts.imagesRoot;
                  this.sequenceLength = opts.images.length;
                  this.priorityFranes = opts.priorityFrames;
                  this.complete = false;
                  this.loadIndex = 0;

                  this.priorityQueue = this.createPriorityQueue();
                  this.loadingQueue = this.createLoadingQueue();

                  this.loadNextImage();
            }

            loadImage(e) {
                  if (this.images[e]) {
                        return this.loadNextImage();
                  }
                  const onLoad = () => {
                        img.removeEventListener('load', onLoad);
                        this.images[e] = img;

                        if (e === 0) {
                              this.emit('FIRST_IMAGE_LOADED');
                        }
                        this.loadNextImage();
                  }
                  const img = new Image;
                  img.addEventListener('load', onLoad);
                  img.src = (this.imagesRoot ? this.imagesRoot : '') + this.imageNames[e];
            }

            loadNextImage() {
                  if (this.priorityQueue.length) {
                        this.loadImage(this.priorityQueue.shift());
                        if (!this.priorityQueue.length) {
                              this.emit('PRIORITY_IMAGES_LOADED');
                        }
                  } else if (this.loadingQueue.length) {
                        this.loadImage(this.loadingQueue.shift())
                  } else {
                        this.complete = true;
                        this.emit('IMAGES_LOADED');
                  }
            }

            createPriorityQueue() {
                  const p = this.priorityFrames || [];
                  if (!p.length) {
                        p.push(0);
                        p.push(Math.round(this.sequenceLength / 2));
                        p.push(this.sequenceLength - 1);
                  }
                  return p;
            }

            createLoadingQueue() {
                  return this.imageNames.map((s, i) => i).sort((e, n) => {
                        return Math.abs(e - this.sequenceLength / 2) - Math.abs(n - this.sequenceLength / 2)
                  });
            }
      }
      class ScrollSequence {
            constructor(opts) {
                  this.opts = {
                        container: 'body',
                        starts: 'out',
                        ends: 'out',
                        imagesRoot: '',
                        cover: false,
                        ...opts
                  }
                  this.container = typeof opts.container === 'object' ?
                        opts.container :
                        document.querySelector(opts.container);

                  this.scrollWith = !opts.scrollWith ?
                        this.container :
                        typeof opts.scrollWith === 'object' ?
                              opts.scrollWith :
                              document.querySelector(opts.scrollWith);

                  this.images = Array(opts.images.length);
                  this.imagesToLoad = opts.images;
                  this.priorityFrames = opts.priorityFrames;

                  this.loader = new ImgLoader({
                        imgsRef: this.images,
                        images: this.imagesToLoad,
                        imagesRoot: this.opts.imagesRoot,
                        priorityFrames: this.priorityFrames
                  });

                  this.canvas = new Canvas({
                        container: this.container,
                        images: this.images,
                        cover: this.opts.cover
                  });

                  this.init();
            }

            init() {
                  this.canvas.setup();
                  this.loader.once('FIRST_IMAGE_LOADED', () => {
                        this.canvas.renderIndex(0);
                  })
                  this.loader.once('PRIORITY_IMAGES_LOADED', () => {
                        window.addEventListener('scroll', () => this.changeOnWindowScroll());
                  })
                  this.loader.once('IMAGES_LOADED', () => {
                        console.log('Sequence Loaded');
                  })
            }

            changeOnWindowScroll() {
                  const step = 100 / (this.images.length - 1);
                  const mapToIndex = Math.floor(this.percentScrolled / step);
                  requestAnimationFrame(() => this.canvas.renderIndex(mapToIndex));
            }

            get percentScrolled() {
                  const { starts, ends } = this.opts;
                  const el = this.scrollWith;
                  const doc = document.documentElement;
                  const clientOffsety = doc.scrollTop || window.pageYOffset;
                  const elementHeight = el.clientHeight || el.offsetHeight;
                  const clientHeight = doc.clientHeight;
                  let target = el;
                  let offsetY = 0;
                  do {
                        offsetY += target.offsetTop;
                        target = target.offsetParent;
                  } while (target && target !== window);

                  let u = (clientOffsety - offsetY);
                  let d = (elementHeight + clientHeight)

                  if (starts === 'out') u += clientHeight;
                  if (ends === 'in') d -= clientHeight;
                  if (starts == 'in') d -= clientHeight;
                  // start: out, ends: out
                  // const value = ((clientOffsety + clientHeight) - offsetY) / (clientHeight + elementHeight) * 100;

                  //start: in, ends: out
                  // const value = (clientOffsety - offsetY) / (elementHeight) * 100;

                  //start: out, ends: in
                  // const value = ((clientOffsety + clientHeight) - offsetY) / (elementHeight) * 100;

                  // Start: in, ends: in
                  // (clientOffsety - offsetY) / (elementHeight - clientHeight)

                  const value = u / d * 100;
                  return value > 100 ? 100 : value < 0 ? 0 : value;
            }
      }

      const appleSequence = new ScrollSequence({
            container: '.apple-sequence',
            scrollWith: '.apple-container',
            images: appleSequenceImages,
            imagesRoot: 'https://webmactep.github.io/NFT-TON/img/sequence/ufo/',
            priorityFrames: [0, 20, 40, 60, 90],
            cover: true,
            playUntil: 'scroll-out',
            starts: 'in'
      });

      const treeSequence = new ScrollSequence({
            container: '.tree-sequence',
            scrollWith: '.tree-container',
            images: treeSequenceImages,
            imagesRoot: 'https://jacobbelanger.com/assets/sequence/',
            priorityFrames: [0, 20, 40, 60, 90],
            cover: true,
            starts: 'out',
            ends: 'in'
      });

      // END SCROLL_SEQUENCE CODE

      ScrollOut({
            targets: '.speak',
            cssProps: {
                  viewportY: true,
                  visibleY: true
            }
      });




});


