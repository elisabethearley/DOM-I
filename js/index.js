const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let navText = document.querySelectorAll("a"); 
navText[0].textContent = "Services";
navText[1].textContent = "Product";
navText[2].textContent = "Vision";
navText[3].textContent = "Features";
navText[4].textContent = "About";
navText[5].textContent = "Contact";
navText.forEach( (element) => {
  element.style.color = "green";
})

let newNavText = document.createElement("a");
newNavText.textContent = "Our Team";
newNavText.style.cursor = "pointer";
newNavText.style.color = "green";

newNavText.classList.add("newNav");

let newTextNav = document.createElement("a");
newTextNav.textContent = "Welcome";
newTextNav.style.cursor = "pointer";
newTextNav.style.color = "green";

newTextNav.classList.add("navNew");

let newText = document.querySelector("nav");

newText.prepend(newTextNav);
newText.appendChild(newNavText);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaText = document.querySelector("h1");
ctaText.innerHTML = "DOM <br> is <br> Awesome";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let topContentHeaders = document.querySelectorAll(".main-content .top-content .text-content h4");
topContentHeaders[0].textContent = "Features";
topContentHeaders[1].textContent = "About";

let topContentText = document.querySelectorAll(".main-content .top-content .text-content p");
topContentText[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentText[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentHeaders = document.querySelectorAll(".main-content .bottom-content .text-content h4");
bottomContentHeaders[0].textContent = "Services";
bottomContentHeaders[1].textContent = "Product";
bottomContentHeaders[2].textContent = "Vision";

let bottomContentText = document.querySelectorAll(".main-content .bottom-content .text-content p");
bottomContentText[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentText[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentText[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = "Contact";

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactContent[1].textContent = "1 (888) 888-8888";
contactContent[2].textContent = "sales@greatidea.io";

let footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";