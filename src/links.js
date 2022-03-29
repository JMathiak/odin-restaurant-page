const createLink = (num, text) => {
  let div = document.querySelector(".header");
  let btn = document.createElement("div");
  btn.innerHTML = text;
  btn.classList.add("link-" + num);
  div.appendChild(btn);
};

export default createLink;
