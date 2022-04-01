import gcmilktea from "./gcmilktea.png";
import location from "./location.png";
const initialRender = () => {
  let newDiv = document.createElement("div");

  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
  let homeInfo = document.createElement("div");
  homeInfo.innerHTML =
    "Serving Bomb Boba Since 2022. <br></br> Order Online or Come Visit Us!";
  newDiv.appendChild(homeInfo);
  homeInfo.className = "home-text";
};

const renderHomePage = () => {
  let disDiv = document.querySelector(".display");
  disDiv.remove();
  let newDiv = document.createElement("div");
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
  let homeInfo = document.createElement("div");
  homeInfo.innerHTML =
    "Serving Bomb Boba Since 2022. <br></br> Order Online or Come Visit Us!";
  newDiv.appendChild(homeInfo);
  homeInfo.className = "home-text";
};

const renderMenu = () => {
  let disDiv = document.querySelector(".display");
  disDiv.remove();
  let newDiv = document.createElement("div");
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
  document.querySelector(".display").style.height = "1000px";
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
  newDiv.className = "display";
  let wholePage = document.querySelector("#content");
  wholePage.appendChild(newDiv);
  document.querySelector(".display").style.height = "750px";
  let addrDiv = document.createElement("div");
  addrDiv.innerHTML = "Address: 9370 Warren Parkway, Frisco, TX 75035";
  addrDiv.className = "addr-info";
  newDiv.appendChild(addrDiv);
  let pnoDiv = document.createElement("div");
  pnoDiv.innerHTML = "Phone Number: 214-214-2140";
  pnoDiv.className = "addr-info";
  newDiv.appendChild(pnoDiv);
  let locationHolder = document.createElement("div");
  locationHolder.className = "pic-holder";
  const locImg = new Image();
  locImg.src = location;
  locImg.className = "location-image";
  locationHolder.appendChild(locImg);
  newDiv.appendChild(locationHolder);
};
export { initialRender, renderHomePage, renderMenu, renderContact };
