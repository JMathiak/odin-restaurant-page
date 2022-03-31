const initialRender = () => {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "This is the Home Page";
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
};

const renderHomePage = () => {
  let disDiv = document.querySelector(".display");
  disDiv.remove();
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "This is the Home Page";
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
};

const renderMenu = () => {
  let disDiv = document.querySelector(".display");
  disDiv.remove();
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "This is the Menu Page";
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
};

const renderContact = () => {
  let disDiv = document.querySelector(".display");
  disDiv.remove();
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "This is the Contact Information Page";
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
};
export { initialRender, renderHomePage, renderMenu, renderContact };
