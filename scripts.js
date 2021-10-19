// console.log('hello');

const body = document.body;
// console.log(body);

const scrollWrap = document.getElementsByClassName('scrollWrap')[0];
// console.log(scrollWrap);

const height = scrollWrap.getBoundingClientRect().height - 1;
// console.log(height);

const speed = 0.2;

///////////////////////////////
/////////
///////////////////////////////
let offset = 0;
body.style.height = Math.floor(height) + 'px';

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  let scroll = 'translateY(-' + offset + 'px) translateZ(0)';
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
