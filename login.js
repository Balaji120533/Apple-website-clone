const nav=document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>10)
    {
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }
})
const carousel=document.getElementById("appleTvCarousel");
function updateStreamButtons(){
    document.querySelectorAll(".stream-btn").forEach(btn=>{
        btn.classList.remove("show");
    });
    const activeSlide=carousel.querySelector(".carousel-item.active");
    if(activeSlide){
        const button=activeSlide.querySelector(".stream-btn");
        if(button)button.classList.add("show");

    }
}
window.addEventListener("load", updateStreamButtons);
carousel.addEventListener("slid.bs.carousel", updateStreamButtons);
const overlay=document.querySelector(".nav-overlay");
const mega=document.getElementById("navMega");
const navlinks=document.querySelectorAll(".menu-items a");
const panels = document.querySelectorAll(".mega-panel");
let closeTimer;
function openMega(){
    clearTimeout(closeTimer);
    overlay.classList.add("show");
    mega.classList.add("show");
}
function closeMega(){
    closeTimer=setTimeout(()=>{
        overlay.classList.remove("show");
    mega.classList.remove("show");
    },150);
}
navlinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    openMega();

    const label = link.textContent.trim();

    panels.forEach(panel => {
      panel.classList.remove("active");
      if (panel.dataset.menu === label) {
        panel.classList.add("active");
      }
    });
  });
});


mega.addEventListener("mouseenter", openMega);
mega.addEventListener("mouseleave", closeMega);
document.querySelector(".icons").addEventListener("mouseenter", closeMega);