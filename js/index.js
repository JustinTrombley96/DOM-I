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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Section 1
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.getElementsByTagName("a");
nav[0].textContent = siteContent["nav"]["nav-item-1"]
nav[1].textContent = siteContent["nav"]["nav-item-2"]
nav[2].textContent = siteContent["nav"]["nav-item-3"]
nav[3].textContent = siteContent["nav"]["nav-item-4"]
nav[4].textContent = siteContent["nav"]["nav-item-5"]
nav[5].textContent = siteContent["nav"]["nav-item-6"]



// Section 2
let cta = document.getElementsByTagName("h1");
cta[0].textContent = siteContent["cta"]["h1"];

let button1 = document.getElementsByTagName("button")
button1[0].textContent = siteContent["cta"]["button"];
//const topButton = document.querySelector("button");
//topButton.textContent = "Get Started";

let img1 = document.getElementById("cta-img")
img1.setAttribute('src', siteContent["cta"]["img-src"]);

//Section 3
let headerH4 = document.querySelectorAll("h4")
headerH4[0].textContent = siteContent["main-content"]["features-h4"]
headerH4[1].textContent = siteContent["main-content"]["about-h4"]
headerH4[2].textContent = siteContent["main-content"]["services-h4"]
headerH4[3].textContent = siteContent["main-content"]["product-h4"]
headerH4[4].textContent = siteContent["main-content"]["vision-h4"]
headerH4[5].textContent = siteContent["contact"]["contact-h4"]


let pText = document.querySelectorAll("p")
pText[0].textContent = siteContent["main-content"]["features-content"]
pText[1].textContent = siteContent["main-content"]["about-content"]
pText[2].textContent = siteContent["main-content"]["services-content"]
pText[3].textContent = siteContent["main-content"]["product-content"]
pText[4].textContent = siteContent["main-content"]["vision-content"]
pText[5].textContent = siteContent["contact"]["address"]
pText[6].textContent = siteContent["contact"]["phone"]
pText[7].textContent = siteContent["contact"]["email"]
pText[8].textContent = siteContent["footer"]["copyright"]




let midImg = document.getElementById("middle-img")
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Append and Prepend

const newNavItem = document.createElement('a');
newNavItem.textContent = "Scream Kings";
document.querySelector('nav').appendChild(newNavItem);

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = "Master of the Macabre";
document.querySelector('nav').prepend(newNavItem2);

//Change the color Nav
nav[0].style.color = "Green"
nav[1].style.color = "Red"
nav[2].style.color = "Blue"
nav[3].style.color = "Orange"
nav[4].style.color = "lime"
nav[5].style.color = "Black"
nav[6].style.color = "Crimson"
nav[7].style.color = "Pink"