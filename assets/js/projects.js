const web = document.getElementById("web");
const mobile = document.getElementById("mobile");

const webCss = document.querySelector(".web");

const mobileCss = document.querySelector(".mobile");

web.addEventListener("click", (e) => {
  mobile.classList.remove("tab-active");
  web.classList.add("tab-active");

  webCss.style.visibility = "visible";
  mobileCss.style.visibility = "hidden";

  webCss.style.display = "block";
  mobileCss.style.display = "none";
});

mobile.addEventListener("click", (e) => {
  web.classList.remove("tab-active");
  mobile.classList.add("tab-active");

  webCss.style.visibility = "hidden";
  mobileCss.style.visibility = "visible";

  webCss.style.display = "none";
  mobileCss.style.display = "block";
});
