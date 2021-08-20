
const animLeft = document.querySelectorAll('.slideLeft');
const animRight = document.querySelectorAll('.slideRight');
const animTop = document.querySelectorAll('.slideTop');
const animBottom = document.querySelectorAll('.slideBottom');

const animatedDomObserver = new IntersectionObserver((entries) => {
  // console.log("entries", entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('slideLeft')) {
        entry.target.classList.add('slide-from-left');
        entry.target.classList.remove('slideLeft');
      }
      else if (entry.target.classList.contains('slideRight')) {
        entry.target.classList.add('slide-from-right');
        entry.target.classList.remove('slideRight');
      }
      else if (entry.target.classList.contains('slideTop')) {
        entry.target.classList.add('slide-from-top');
        entry.target.classList.remove('slideTop');
      }
      else if (entry.target.classList.contains('slideBottom')) {
        entry.target.classList.add('slide-from-bottom');
        entry.target.classList.remove('slideBottom');
      }
    }
  });

}, {
  rootMargin: '0px 0px 20% 0px',
  // threshold: .2
});


animLeft.forEach((elem) => { animatedDomObserver.observe(elem); });
animRight.forEach((elem) => { animatedDomObserver.observe(elem); });
animTop.forEach((elem) => { animatedDomObserver.observe(elem); });
animBottom.forEach((elem) => { animatedDomObserver.observe(elem); });
