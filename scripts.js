// console.log('hello');

///////////////////////////////
/////////First ////////////////
///////////////////////////////

// const body = document.body;
// // console.log(body);

// const scrollWrap = document.getElementsByClassName('scrollWrap')[0];
// // console.log(scrollWrap);

// const height = scrollWrap.getBoundingClientRect().height - 1;
// // console.log(height);

// const speed = 0.2;

// ///////////////////////////////
// /////////
// ///////////////////////////////
// let offset = 0;
// body.style.height = Math.floor(height) + 'px';

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   let scroll = 'translateY(-' + offset + 'px) translateZ(0)';
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

///////////////////////////////
/////////Second////////////////
///////////////////////////////

function smoothScroll(targetClass, duration) {
  let target = document.querySelector(targetClass);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// smoothScroll('.thirdParagraph', 1000);
const firstLink = document.querySelector('.firstLink');
const secondLink = document.querySelector('.secondLink');
const thirdLink = document.querySelector('.thirdLink');

firstLink.addEventListener('click', function () {
  smoothScroll('.firstParagraph', 1000);
});
secondLink.addEventListener('click', function () {
  smoothScroll('.secondParagraph', 1000);
});
thirdLink.addEventListener('click', function () {
  smoothScroll('.thirdParagraph', 1000);
});
