// CLASSES & VARIABLES

class navbarItem {
    constructor(name, href) {
        this.name = name;
        this.href = href;
    }
}

class socialMediaItem {
    constructor(name, src, alt, href) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.href = href;
    }
}

const navbarItems = [
    new navbarItem("Heim", "./index.html"),
    new navbarItem("Booking", "./booking.html"),
    new navbarItem("Tilbakemelding", "./tilbakemelding.html"),
    new navbarItem("Galleri", "./galleri.html"),
];

const socialMediaItems = [
    new socialMediaItem(
        "Twitter", 
        "./images/iconTemp.png", 
        "twitter logo", 
        ""
    ),
    new socialMediaItem(
        "Facebook",
        "./images/iconTemp.png",
        "facebook logo",
        "",
    ),
    new socialMediaItem(
        "linkedin",
        "./images/iconTemp.png",
        "linkedin logo",
        "",
    ),
];

// MAIN

console.debug("HELLO WORLD! - main.js");

buildNavbar();
buildFooter();

// FUNCTIONS

function buildNavbar() {
    const header = document.createElement("header");
    document.body.appendChild(header);
    const navbar = document.createElement("nav");
    header.appendChild(navbar);
    navbarItems.forEach((item) => {
        navbar.appendChild(createNavbarItem(item));
    });
}

function createNavbarItem(navbarItem) {
    const item = document.createElement("a");
    item.innerHTML = navbarItem.name;
    item.href = navbarItem.href;
    return item;
}

function buildFooter() {
    const footer = document.createElement("footer");
    document.body.appendChild(footer);

    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.classList.add("contactInformationContainer");
    footer.appendChild(contactInfoContainer);

    const temp = document.createElement("p");
    temp.innerHTML = "PLACEHOLDER TEXT!!!!!!";
    contactInfoContainer.appendChild(temp);

    const socialMedia = document.createElement("div");
    socialMedia.classList.add("socialMedia");
    footer.appendChild(socialMedia);
    socialMediaItems.forEach((item) => {
        socialMedia.appendChild(createSocialMediaItem(item));
    });
}

function createSocialMediaItem(socialMediaItem) {
    const item = document.createElement("a");
    item.href = socialMediaItem.href;

    const image = document.createElement("img");
    image.src = socialMediaItem.src;
    image.alt = socialMediaItem.alt;
    item.appendChild(image);

    const text = document.createElement("p");
    text.innerHTML = socialMediaItem.name;
    item.appendChild(text);

    return item;
}
