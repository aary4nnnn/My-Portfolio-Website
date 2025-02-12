let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  
  if (window.scrollY > lastScrollY) {
    
    nav.classList.add("hidden");
  } else {
   
    nav.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});


