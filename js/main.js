const menuItems = document.querySelectorAll("li");
const navMobile = document.querySelector(".navMobile");
const navBtn = document.querySelector(".navButton");
const allNavLinks = document.querySelectorAll(".navMobileItem");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMobile.classList.toggle("navMobile-active");

  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("navMobile-active");
    });
  });
};

navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleScrollSpy);
