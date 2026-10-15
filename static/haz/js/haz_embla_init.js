(function () {
  if (typeof EmblaCarousel !== "function") return;
  var viewports = document.querySelectorAll(".haz_swipe_true");
  if (!viewports.length) return;
  viewports.forEach(function (viewport) {
    var embla = EmblaCarousel(viewport, {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true
    });
    var current = viewport.querySelector('[aria-current="page"]');
    if (current) {
      var slide = current.closest("li");
      if (slide) {
        var idx = embla.slideNodes().indexOf(slide);
        if (idx > 0) embla.scrollTo(idx - 1, true);
        else if (idx === 0) embla.scrollTo(0, true);
      }
    }
    function updateMore() {
      viewport.classList.toggle("haz_swipe__more_before", embla.canScrollPrev());
      viewport.classList.toggle("haz_swipe__more_after", embla.canScrollNext());
    }
    embla.on("init", updateMore);
    embla.on("reInit", updateMore);
    embla.on("select", updateMore);
    embla.on("settle", updateMore);
    embla.on("scroll", updateMore);
    updateMore();
  });
})();
