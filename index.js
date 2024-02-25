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
// DOM MANIPULATION: PART TWO (Part 4)
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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
// subMenuEl.style.zIndex = "100"; // just to make sure its actually there lol

// Part 4
let topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.matches("a")) return;
  // if (event.target.tagName != "A") return;

  console.log(event.target.textContent);

  // Check if the clicked link is already active
  const isAlreadyActive = event.target.classList.contains("active");

  // removes "active" class from all links
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  if (!isAlreadyActive) {
    event.target.classList.toggle("active");

    // Get the text content of the clicked link
    const clickedLinkText = event.target.textContent;

    // Find the corresponding link object from menuLinks based on the text content
    const clickedLinkObject = menuLinks.find(
      (link) => link.text === clickedLinkText
    );

    // Check if the link object has subLinks and the text content is not "about"
    if (
      clickedLinkObject &&
      clickedLinkObject.subLinks &&
      clickedLinkText !== "about"
    ) {
      // Cache the "subLinks" array for later use
      const subLinksArray = clickedLinkObject.subLinks;
      buildSubmenu(subLinksArray);

      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    // Clear the contents of subMenuEl and set its top position to 0 when the active link is clicked again
    subMenuEl.innerHTML = "";
    subMenuEl.style.top = "0";
  }

  // event.target.classList.add("active");
  // event.target.classList.toggle("active");

  // Part 5
  // Get the corresponding link object from menuLinks
  // const clickedLinkObject = menuLinks.find(
  //   (link) => link.text === event.target.innerText
  // );
});

// creating the helper function
const buildSubmenu = (subLinksArray) => {
  console.log("Received subLinksArray:", subLinksArray);

  // Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = "";

  // Check if subLinksArray is defined
  if (subLinksArray && Array.isArray(subLinksArray)) {
    subLinksArray.forEach((link) => {
      // creating an <a> element, and assigning to a variable
      let subLinkElement = document.createElement("a");

      // adding a href attribute
      subLinkElement.href = link.href;

      // Set the element's content to the value of the text property of the "link" object
      subLinkElement.innerText = link.text;

      subMenuEl.appendChild(subLinkElement);
    });
  }
};
