import "./style.css";
import header from "./header";
function page() {
  header();
}

document.querySelector("#content").appendChild(page());
