const createTitle = () => {
  let div = document.querySelector(".header");
  let title = document.createElement("div");
  title.innerHTML = "Boba Shop";
  title.className = "title";
  div.appendChild(title);
};

export default createTitle;
