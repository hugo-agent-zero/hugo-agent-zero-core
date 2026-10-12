(function () {
  if (typeof EmblaCarousel !== "function") return;
  var roots = document.querySelectorAll(".haz_do_tabs_swipe_true");
  if (!roots.length) return;
  roots.forEach(function (root) {
    var viewport = root.querySelector(".haz_do_tabs__bar");
    if (!viewport) return;
    EmblaCarousel(viewport, {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true
    });
  });
})();
