const hamburgerButton = document.getElementById("hamburger-btn")
const hamburgerIcon = document.querySelector("#hamburger-btn i")
const navMenu = document.getElementById("nav-menu")
hamburgerButton.addEventListener("click", ()=> {
  navMenu.classList.toggle("hidden")
  hamburgerIcon.classList.toggle("fa-bars")
  hamburgerIcon.classList.toggle("fa-xmark")
})

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("#nav-menu a")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("text-blue-600")
      })
      const matchedLink = document.querySelector(`#nav-menu a[href="#${entry.target.id}"]`)
      matchedLink.classList.add("text-blue-600")
    }
  })
}, { threshold: 0.5 })

sections.forEach((section) => observer.observe(section))