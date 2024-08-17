
const elementsHiddenLeft = document.querySelectorAll(".hidden-left");
const elementsHiddenRight = document.querySelectorAll(".hidden-right");

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else{
      entry.target.classList.remove("show");
    }
  })
})

elementsHiddenLeft.forEach(element => {
  myObserver.observe(element)
})
elementsHiddenRight.forEach(element => {
  myObserver.observe(element)
})

const menu = document.getElementById('menu');

// When the user scrolls the page, execute sticky to menu
const siteHeaderHeight = menu.offsetHeight;

window.addEventListener('scroll', () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if(top > siteHeaderHeight) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}, false);
