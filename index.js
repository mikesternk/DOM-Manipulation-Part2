// DOM MANIPULATION: PART ONE
// Part 1
let mainEl = document.querySelector("main");
console.log(mainEl);

var bkgcolor = "var(--main-bg)";
mainEl.style.backgroundColor = bkgcolor;

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList = "flex-ctr";

// Part 2
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

topMenuEl.style.height = "100%";

var navColor = "var(--top-menu-bg)";
topMenuEl.style.backgroundColor = navColor;

topMenuEl.classList = "flex-around";

// Part 3
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
  let anchor = document.createElement("a");
  anchor.innerText = link.text;
  anchor.href = link.href;
  topMenuEl.appendChild(anchor);
});

/******** CODE STARTS HERE **********/
// DOM MANIPULATION: PART TWO
// Part 3
let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

subMenuEl.style.height = "100%";

var subNavColor = "var(--sub-menu-bg)";
subMenuEl.style.backgroundColor = subNavColor;

subMenuEl.classList = "flex-around";

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// subMenuEl.style.zIndex = "100";
