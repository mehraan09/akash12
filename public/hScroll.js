(function () {
  function handleWheel(event) {
    event.preventDefault();
    const scrollAmount = (event.deltaY + event.deltaX) * 2;
    window.scrollBy({
      left: scrollAmount,
      top: 0,
    });
  }

  window.addEventListener("wheel", handleWheel, { passive: false });
})();

