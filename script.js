
const elementsHidden = document.querySelectorAll(".hidden");
const elementsShow = document.querySelectorAll(".show");

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else{
      entry.target.classList.remove("show");
    }
  })
  console.log(entries)
})

elementsHidden.forEach(element => {
  myObserver.observe(element)
})
