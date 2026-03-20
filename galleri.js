// CLASSES & VARIABLES

class galleryItem {
    constructor(text, src, alt) {
        this.text = text;
        this.src = src;
        this.alt = alt;
    }
}

const galleryItems = [
    new galleryItem(
        "[text describing what the image]",
        "./images/iconTemp.png",
        "temporary",
    ),
    new galleryItem(
        "[text describing what the image]",
        "./images/iconTemp.png",
        "temporary",
    ),
    new galleryItem(
        "[text describing what the image]",
        "./images/iconTemp.png",
        "temporary",
    ),
];

// MAIN

console.debug("HELLO WORLD! - galleri.js");

addGalleryItems();

// FUNCTIONS

function addGalleryItems() {
    const container = document.getElementById("galleryItemContainer");
    galleryItems.forEach((item) =>
        container.appendChild(createGalleryItem(item)),
    );
}

function createGalleryItem(galleryItem) {
    const item = document.createElement("div");
    item.classList.add("galleryItem");

    const image = document.createElement("img");
    image.src = galleryItem.src;
    image.alt = galleryItem.alt;
    item.appendChild(image);

    const text = document.createElement("p");
    text.innerHTML = galleryItem.text;
    item.appendChild(text);

    return item;
}
