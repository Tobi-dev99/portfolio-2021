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

});

//ENABLING FULLPAGE
var $header_top = $(".navbar");
var $nav = $("navbar__items");

$("#fullpage").fullpage({
  sectionsColor: ["#1c1d25", "#1c1d25", "#1c1d25", "#1c1d25", "#1c1d25"],
  sectionSelector: ".vertical-scrolling",
  navigation: true,
  slideNavigation: true,
  controlArrows: false,
  controlArrows: false,
  anchors: [
    "firstSection",
    "secondSection",
    "thirdSection",
    "fourthSection",
    "fifthSection",
  ],
  menu: "#menu",

  afterLoad: function (anchorLink, index) {
    $header_top.css("background", "rgba(0, 47, 77, .3)");
    $nav.css("background", "rgba(0, 47, 77, .25)");
    if (index == 5) {
      $("#fp-nav").hide();
    }
  },

  onLeave: function (index, nextIndex, direction) {
    if (index == 5) {
      $("#fp-nav").show();
    }
  },
});
