const createTitle = () => {
  let div = document.querySelector(".header");
  let title = document.createElement("div");
  title.innerHTML = "BOMB BOBA";
  title.className = "title";
  div.appendChild(title);
};

export default createTitle;
