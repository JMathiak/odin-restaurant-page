import createLink from "./links";
import createTitle from "./title";
const createHeader = () => {
  let div = document.querySelector("#content");
  let head = document.createElement("div");
  head.className = "header";
  div.appendChild(head);
  createTitle();
  createLink(1, "About");
  createLink(2, "Menu");
  createLink(3, "Contact Us");
};

export default createHeader;
