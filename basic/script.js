// Toggle collapsible sections
document.querySelectorAll(".toggle-section").forEach((button) => {
   button.addEventListener("click", () => {
     const content = button.nextElementSibling;
     const isVisible = content.style.display === "block";
     content.style.display = isVisible ? "none" : "block";
     button.textContent = isVisible ? "Show More" : "Show Less";
   });
 });
 
 // Scroll-to-top button functionality
 const scrollToTopButton = document.getElementById("scroll-to-top");
 
 window.addEventListener("scroll", () => {
   if (window.scrollY > 300) {
     scrollToTopButton.style.display = "block";
   } else {
     scrollToTopButton.style.display = "none";
   }
 });
 
 scrollToTopButton.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
 });
 
 // Highlight active navigation link
 document.querySelectorAll(".nav-link").forEach((link) => {
   link.addEventListener("click", (e) => {
     document.querySelectorAll(".nav-link").forEach((nav) => nav.classList.remove("active"));
     e.target.classList.add("active");
   });
 });
 