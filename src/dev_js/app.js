let body = document.querySelector("body");
body.classList.add("dark_theme");
let mynetwork = document.querySelector(".body");
const id = chrome.runtime.id;

if (mynetwork) {
  mynetwork.addEventListener("DOMNodeInserted", function (e) {
    let ads = document.querySelector("#ads-container");
    if (ads) {
      console.log(ads)
    }
  }, false);
}

window.addEventListener("load", function () {
  let counter = 30;
  let checkingCountdown = setInterval(() => {
    setThemeIcon();
    reformatAds();
    counter--;
    if (counter === 0) {
      clearInterval(checkingCountdown);
    }
  }, 1000);
});

function setThemeIcon() {
  let listMenu = document.querySelector("nav.global-nav__nav ul");
  let svg = listMenu.querySelector(".theme_icon");
  if (listMenu && !svg) {
    let img = document.createElement("img");
    img.setAttribute("title", "Toggle Dark Theme");
    //img.setAttribute("data-tootip", "Toggle Dark Theme");
    img.src = `chrome-extension://${id}/src/assets/images/dark_icon.svg`;
    console.log(img);
    img.classList.add("theme_icon");
    listMenu.appendChild(img);
    img.addEventListener("click", toggleTheme)
  } else {
    return false;
  }
}


function toggleTheme() {
  body.classList.toggle("dark_theme");
}

function reformatAds() {
  let frame = document.querySelector("iframe");
  frame.classList.add("iframe_format")
}
