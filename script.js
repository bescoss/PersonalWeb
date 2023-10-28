document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Puedes ajustar el valor según tus necesidades
          behavior: "smooth"
        });
      }
    });
  });
});


