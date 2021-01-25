// Wrap every letter in a span
var textWrapper = document.querySelector(".sub-heading .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

const navItems = document.querySelectorAll(".navbar__item");


anime
  .timeline({ loop: false }).add({
    targets: '.navbar',
    height: [0, '100vh']
  })
  .add({
    targets: navItems,
    translateX: ["-100%", 0],
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 100 * i,
  })
  .add({
    targets: ".sub-heading .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  }).add({
    targets:'.btn--anim',
    opacity: [0, 1],
    translateY: ['100%', 0],
    duration: 500
  })
  
  // .add({
  //   targets: ".sub-heading",
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000,
  // });


anime.timeline({ loop: false }).add({
  targets: ".bg-cover",
  opacity: [0, 1],
  skew: ['100deg' ,0],
  duration: 1000
}).add({
  targets: '.arrow-down',
  opacity: [0, 1],
  translateY: ['-100%', '-50%'],
  translateX: ['-50%','-50%'],
  duration: 1000
})