function toggleMenu() {
       var menu = document.querySelector("nav ul");
       menu.classList.toggle("show");
     }
     
     document.querySelector(".menu-button").addEventListener("click", toggleMenu);
     