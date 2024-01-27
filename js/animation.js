/** Animate KL Avatar */
const kit = document.querySelector("#kit");
const kl1 = document.querySelectorAll("#kit .kl1-el");

function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top + window.scrollY;
  const elementBottom = elementTop + rect.height;

  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

function checkElementVisibility() {
  if (isElementInView(kit)) {
    kl1.forEach((el) => el.classList.add("active"));
  } else {
    kl1.forEach((el) => el.classList.remove("active"));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkElementVisibility();
  window.addEventListener("scroll", checkElementVisibility);
});
