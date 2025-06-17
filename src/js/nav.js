import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from "gsap/Draggable";
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, SplitText,ScrollSmoother,ScrollToPlugin);

  const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchContainer = document.getElementById('searchContainer');
 let expanded = false;

    searchBtn.addEventListener('click', () => {
      if (!expanded) {
        gsap.to(searchContainer, { width: 200,
                                  background:' var(--bgColor)',
                                  duration: 0.4, 
                                   ease: "power2.out" });
        gsap.to(searchInput, { width: 140, 
                              opacity: 1, 
                              duration: 0.4, 
                              delay: 0.1 });

          gsap.to('.search-button',{
                  color: 'var(--green)',
                    duration: 0.4, 
                       delay: 0.1
          })

        searchInput.focus();
      } else {
        gsap.to(searchInput, { width: 0, 
                              opacity: 0, 
                              duration: 0.3 });
        gsap.to(searchContainer, { width: 50, 
                                    background:'transparent',
                                    duration: 0.3, 
                                    delay: 0.1 });
              gsap.to('.search-button',{
                  color: 'var(--bgColor)',
                    duration: 0.4, 
                       delay: 0.1
          })

        searchInput.blur();
      }
      expanded = !expanded;
    });

//Nav
const ham=document.querySelector('.hamburger')
const mnav=document.querySelector('.mnav')

let navTimeline=gsap.timeline({paused:true,defaults:{ease:'power4.inOut'}})
navTimeline.from('.mnav',{
  height:'0%',duration:1
},'a')
navTimeline.from('.mnavLinks',{
  height:'0%',duration:1,
  stagger:0.1
},'a')
navTimeline.from('.mnavLinks li , .mnavsearch-container',{
  y:-5000,duration:1,
  stagger:0.1
})
navTimeline.from('.mnavSocial li' ,{
  y:1000,duration:1,
  stagger:0.1
})

  ham.addEventListener('click',()=>{
mnav.classList.toggle('active')
if(mnav.classList.contains('active')){navTimeline.restart()}
else{navTimeline.reverse()}
})



let askAcallbtn=document.querySelectorAll('.askAcallbtn .asktocalltext span')
document.querySelector('.askAcallbtn').addEventListener('mouseenter',()=>{
gsap.to(askAcallbtn[0],{
  top:'-200%',
  duration:1,
  ease:'power4.inOut',
})
gsap.to(askAcallbtn[1],{
  top:'100%',
  duration:1,
  ease:'power4.inOut',
})
})
document.querySelector('.askAcallbtn').addEventListener('mouseleave',()=>{
gsap.to(askAcallbtn[0],{
  top:'100%',
  duration:1,
  ease:'power4.inOut'
})
gsap.to(askAcallbtn[1],{
  top:'200%',
  duration:1,
  ease:'power4.inOut'
})
})
let smoother = ScrollSmoother.create({
  smooth: 2,
  wrapper:'.smooth-wrapper',
  content:'.container',
  effects: true,
  speed:.5,
  normalizeScroll: true,
});
document.querySelectorAll('.hyperlink').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is missing
    if (!href) return;

    const [pagePath, hash] = href.split('#');

    // Function to check if it's same page
    const isSamePage = (targetPath) => {
      const currentPath = window.location.pathname.replace(/\/$/, '');
      const target = targetPath.replace(/\/$/, '');
      return target === '' || target === currentPath;
    };

    // If it's a same-page scroll
    if (isSamePage(pagePath)) {
      if (hash) {
        e.preventDefault(); // Prevent jump
        const section = document.querySelector('#' + hash);
        if (section) {
          if (typeof smoother !== 'undefined') {
            smoother.scrollTo(section, true, "top top");
          } else {
            gsap.to(window, {
              scrollTo: section,
              duration: 1,
              ease: "power2.out"
            });
          }
          history.replaceState(null, null, '#' + hash);
        }
      }
    }

    // Else: let the browser handle the page navigation
  });
});

let scrollSections=['#header','#ourProjects','#vr3d','#picturegallery',0,'#footer','#form']
let formbtns=[document.querySelector('.whatsapp'),document.querySelector('.form'),document.querySelector('.phone')]
formbtns[0].addEventListener('click',()=>{
  smoother.scrollTo(scrollSections[6],true)
})
formbtns[1].addEventListener('click',()=>{
  smoother.scrollTo(scrollSections[6],true)
})
formbtns[2].addEventListener('click',()=>{
  smoother.scrollTo(scrollSections[6],true)
})