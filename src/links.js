import { renderHomePage, renderMenu, renderContact } from "./display";

const createLink = (num, text) => {
  let div = document.querySelector(".header");
  let btn = document.createElement("div");
  btn.innerHTML = text;
  btn.classList.add("link-" + num);
  btn.setAttribute("data-key", num);
  div.appendChild(btn);
  let link = document.getElementsByClassName("link-" + num);
  console.log(link);
  if (num === 1) {
    link[0].addEventListener("click", (e) => {
      renderHomePage();
    });
  }
  if (num === 2) {
    link[0].addEventListener("click", (e) => {
      renderMenu();
    });
  }
  if (num === 3) {
    link[0].addEventListener("click", (e) => {
      renderContact();
    });
  }
};

export default createLink;
