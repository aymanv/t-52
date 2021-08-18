
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
      }
      else if (entry.target.classList.contains('slideRight')) {
        entry.target.classList.add('slide-from-right');
      }
      else if (entry.target.classList.contains('slideTop')) {
        entry.target.classList.add('slide-from-top');
      }
      else if (entry.target.classList.contains('slideBottom')) {
        entry.target.classList.add('slide-from-bottom');
      }
    }
  });

});


animLeft.forEach((elem) => { animatedDomObserver.observe(elem); });
animRight.forEach((elem) => { animatedDomObserver.observe(elem); });
animTop.forEach((elem) => { animatedDomObserver.observe(elem); });
animBottom.forEach((elem) => { animatedDomObserver.observe(elem); });
