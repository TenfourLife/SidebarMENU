document.addEventListener("DOMContentLoaded", function () {
  const sideNav = document.querySelector(".side-nav");
  const userDiv = document.querySelector(".user");
  const userName = document.querySelector(".user-name");
  const icons = document.querySelectorAll("li .icon");
  const texts = document.querySelectorAll("li span");

  sideNav.addEventListener("mouseover", function () {
    sideNav.style.width = "250px";
    userName.style.display = "block";
    texts.forEach((text) => (text.style.display = "inline-block"));
  });

  sideNav.addEventListener("mouseout", function () {
    sideNav.style.width = "110px";
    userName.style.display = "none";
    texts.forEach((text) => (text.style.display = "none"));
  });
});
