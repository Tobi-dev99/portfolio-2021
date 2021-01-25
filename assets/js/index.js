$(function () {
  $(".btn--anim")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });

    activatingNav();

});

const activatingNav = function () { 
  const op_Nav = document.querySelectorAll('.onepage-pagination li a');
  console.log(op_Nav);
  op_Nav.forEach(el => {
    if (el.classList.contains('active')) {
      console.log('true');
      const index = el.getAttribute("data-index");
      const currElement = document.querySelector(
        `.navbar__link[data-index = '${index}']`
      );
      currElement.classList.add('navbar__link--active');
      console.log(currElement);
    }else{
      const index = el.getAttribute("data-index");
      const currElement = document.querySelector(
        `.navbar__link[data-index = '${index}']`
      );
      currElement.classList.remove("navbar__link--active");
    }
  });
 }

//ENABLING FULLPage

onePageScroll(".fullpage", {
  sectionContainer: ".vertical-scrolling",
  easing: "ease",
  animationTime: 1000,
  pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function () {
    activatingNav();
  }, // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function (index) {}, // This option accepts a callback function. The function will be called after the page moves.
  loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true, // You can activate the keyboard controls
  responsiveFallback: false,
});
