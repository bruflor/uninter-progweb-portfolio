
const elementsHidden = document.querySelectorAll(".hidden");

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

elementsHidden.forEach(element => {
  myObserver.observe(element)
})

const menu = document.getElementById('menu');
const hero = document.getElementById('hero')

// When the user scrolls the page, execute sticky to menu
const siteHeaderHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  if(top > siteHeaderHeight) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
}, false);
