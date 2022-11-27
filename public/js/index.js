var js_header;
js_header = document.querySelector(".l-header");

window.addEventListener("scroll", function () {
  if (this.scrollY > 0) {
    js_header.classList.add("active");
  } else {
    js_header.classList.remove("active");
  }
});
