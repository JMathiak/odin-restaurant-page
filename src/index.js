import "./style.css";
import header from "./header";
import { initialRender } from "./display";
function page() {
  header();
  initialRender();
}

document.querySelector("#content").appendChild(page());
