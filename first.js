



window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-container');
    const li=document.querySelectorAll(".nav-list li a");
    const navl = document.querySelector(".nav-list li a::after,.nav-list .active::after")
    if (window.scrollY > 500) {
      // If scrolled more than 50px, change background to blue
      header.style.backgroundColor = 'white';
      li[0].style.color ="#0078ff";
      li[1].style.color ="#0078ff";
      li[2].style.color ="#0078ff";
      li[3].style.color ="#0078ff";
      navl.style.color = "#0078ff"
      
      //transition: transform .5s;
    } else {
      // If scrolled back to the top, revert to original color
      header.style.backgroundColor = "transparent";
      li[0].style.color = 'white';
      li[1].style.color = 'white';
      li[2].style.color = 'white';
      li[3].style.color = 'white';
      navl.style.color = "#d4cece"
    }
  });
  


let icon = document.querySelector(".icon");
let ul = document.querySelector('.nav-list');

icon.addEventListener("click", function() {
    ul.classList.toggle("showData"); // Toggle the 'showData' class
   
});



