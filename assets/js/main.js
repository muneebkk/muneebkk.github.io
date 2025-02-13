document.addEventListener("DOMContentLoaded", () => {
    const aboutContainer = document.querySelector(".about__container")
    const aboutImg = document.querySelector(".about__img img")
    const tabButtons = document.querySelectorAll(".about__tab-btn")
    const contentSections = document.querySelectorAll(".about__content")
  
    function revealSection() {
      const sectionPosition = aboutContainer.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (sectionPosition < screenPosition) {
        aboutContainer.classList.add("visible")
        aboutImg.classList.add("visible")
        window.removeEventListener("scroll", revealSection)
      }
    }
  
    window.addEventListener("scroll", revealSection)
    revealSection() // Run on load in case the section is already in view
  
    // Tab functionality
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab")
  
        // Remove active class from all buttons and content sections
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        contentSections.forEach((content) => content.classList.remove("active"))
  
        // Add active class to clicked button and corresponding content
        button.classList.add("active")
        document.getElementById(tabId).classList.add("active")
      })
    })
  
    // Particle effect
    const particlesContainer = document.createElement("div")
    particlesContainer.classList.add("particles")
    aboutContainer.appendChild(particlesContainer)
  
    for (let i = 0; i < 50; i++) {
      createParticle()
    }
  
    function createParticle() {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.animationDuration = Math.random() * 2 + 1 + "s"
      particle.style.animationDelay = Math.random() + "s"
      particlesContainer.appendChild(particle)
    }
  })

  document.addEventListener("DOMContentLoaded", () => {
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav__link")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        if (targetSection) {
          // Smooth scroll to the target section
          targetSection.scrollIntoView({
            behavior: "smooth",
          })
  
          // Update active class on nav items
          navLinks.forEach((navLink) => navLink.classList.remove("active"))
          this.classList.add("active")
        }
      })
    })
  
    // Highlight active section on scroll
    window.addEventListener("scroll", () => {
      let current = ""
      const sections = document.querySelectorAll("section")
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active")
        }
      })
    })
  
    
  })
  
  
  
  