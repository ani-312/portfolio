// Animate sections on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    if (section.offsetTop < scrollPosition - 50) {
      section.classList.add("visible");
    }
  });
});

// Contact form alert
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! I will get back to you soon.");
  document.getElementById("contact-form").reset();
});
