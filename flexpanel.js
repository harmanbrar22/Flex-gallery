const c = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex"))
  this.classList.toggle("open-active");
}

c.forEach(panel => panel.addEventListener("click", toggleOpen));
c.forEach(panel => panel.addEventListener("transitionend", toggleActive));