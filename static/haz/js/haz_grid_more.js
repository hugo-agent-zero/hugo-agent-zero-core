(function () {
  var buttons = document.querySelectorAll(".haz_do_grid__more");
  if (!buttons.length) return;
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var root = button.closest(".haz_do_grid");
      if (!root) return;
      root.classList.add("haz_do_grid_more_open");
      button.remove();
    });
  });
})();
