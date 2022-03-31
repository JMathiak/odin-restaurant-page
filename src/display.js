import gcmilktea from "./gcmilktea.png";
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
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
  let menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  newDiv.appendChild(menuDiv);

  createMenuItem(
    1,
    "WinterMelon Milk Tea",
    "A wintermelon tea base with milk mixed in"
  );
  createMenuItem(
    2,
    "Green Tea with Milk Foam",
    "A green tea base with milk mixed in and a milk foam cap"
  );
  createMenuItem(
    3,
    "Strawberry Milk Tea",
    "A black tea base with milk and strawberry syrup mixed in"
  );
  createMenuItem(4, "Original Milk Tea", "A black tea base with milk mixed in");
  createMenuItem(5, "Oolong Milk Tea", "A oolong tea base with milk mixed in");
  createMenuItem(
    6,
    "Dirty Brown Sugar Milk Tea",
    "A black tea base with brown sugar syrup drizzled on the sides and a milk foam cap"
  );
};

const createMenuItem = (num, title, desc) => {
  let menuDiv = document.querySelector(".menu");
  let m = document.createElement("div");
  let cname = "menu-" + num;
  m.className = cname;
  menuDiv.appendChild(m);
  let mTitle = document.createElement("div");
  mTitle.className = "item-name";
  mTitle.innerHTML = title;
  m.appendChild(mTitle);
  let mdesc = document.createElement("div");
  mdesc.className = "item-desc";
  mdesc.innerHTML = desc;
  m.appendChild(mdesc);
  let mImgHolder = document.createElement("div");
  mImgHolder.className = "pic-holder";
  const mimg = new Image();
  mimg.src = gcmilktea;
  mimg.className = "item-pic";
  mImgHolder.appendChild(mimg);
  m.appendChild(mImgHolder);
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
