//   const circleSvg = document.querySelector('svg')
//         const btn = document.querySelector('button')

//         let mouseX = 0
//         let mouseY = 0
//         //let intv = 0

//         window.addEventListener('mousemove', (event) => {
//             // circleSvg.style.top = event.clientY - 45;
//             // circleSvg.style.left = event.clientX - 45;

//             mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
//             mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
//         })

//         const mouseMove = () => {
//             //intv += 1
            
//             circleSvg.style.top = mouseY
//             circleSvg.style.left = mouseX

//             //circleSvg.style.opacity = 1 + Math.sin(intv * .04)
//             //console.log(Math.sin(intv * .04))

//             window.requestAnimationFrame(mouseMove)
//         }

//         mouseMove()

//         var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

//         tl.to(circleSvg, {width: 0, opacity: 0})
//         tl.to('body, button', {background: 'white'})
//         tl.pause()

//         btn.addEventListener('click', () => {
//             tl.play()
//         })

const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX-16+'px';
    cursor.style.top=e.clientY-16+'px';
})

// console.log(document.querySelector(".card-img-top-ash"));
// document.querySelector(".card-body-a").addEventListener("mouseenter", function(){
//   document.querySelector(".cursor").style.opacity = "0.3";
//   console.log("mouse in");
// },false)
 

// document.querySelector(".card-body-a").addEventListener("mouseleave", function(){
 
//   document.querySelector(".cursor").style.mixBlendMode = "difference";
//   document.querySelector(".cursor").style.opacity = "1";
//   console.log("mouse out");
// }, false)

// $(document).ready(function(){
//   var cursor = $('.cursor');

//   $(window).mousemove(function(e) {
//     cursor.css({
//         top: e.clientY - cursor.height() / 2,
//         left: e.clientX - cursor.width() / 2
//     });
//   });
//  });


//         $(window)
//         .mousedown(function() {
//             cursor.css({
//                 transform: "scale(.2)"
//             });
//         })
//         .mouseup(function() {
//             cursor.css({
//                 transform: "scale(1)"
//             });
//         });

//   $(".imglol")
//         .mouseenter(function() {
//             cursor.css({
//                 transform: "scale(3.2)"
//             });
//         })
//         .mouseleave(function() {
//             cursor.css({
//                 transform: "scale(1)"
//             });
//         });
        









$('.imglol').hover(function() {document.querySelector(".cursor").style.mixBlendMode = "screen";
document.querySelector(".cursor").style.background = "rgba(255, 255, 255,0.5)";
document.querySelector(".cursor").style. transform = "scale(2.5)";


},
function() {
  document.querySelector(".cursor").style.mixBlendMode = "difference";
  document.querySelector(".cursor").style. transform = "scale(1)";
  document.querySelector(".cursor").style.background = "rgba(255, 255, 255,1)";
  
})

$('.ash-italic').hover(function() {
document.querySelector(".cursor").style. transform = "scale(2.0)";
},
function() {
  document.querySelector(".cursor").style. transform = "scale(1)"; 
})

$('.card-link-ash').hover(function() {
  document.querySelector(".cursor").style. transform = "scale(2.0)";
  },
  function() {
    document.querySelector(".cursor").style. transform = "scale(1)"; 
  })
  
