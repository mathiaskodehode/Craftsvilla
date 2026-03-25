// CLASSES & VARIABLES

class galleryItem {
    constructor(title, text, src, alt) {
        this.title = title;
        this.text = text;
        this.src = src;
        this.alt = alt;
    }
}

const galleryItems = [
    new galleryItem(
        "title",
        "Dette kunstverket er skapt av en deltaker under en inspirerende workshop, hvor kreativitet og utforskning sto i fokus. Prosessen har vært like viktig som resultatet, og uttrykket bærer preg av personlig tolkning og kunstnerisk frihet.",
        "./images/gallery/1.avif",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Maleriet er laget i en workshop-setting der deltakerne fikk utforske egne ideer og teknikker. Resultatet er et unikt uttrykk som gjenspeiler både læring og individuell kreativitet.",
        "./images/gallery/2.avif",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Dette verket er et resultat av en kreativ workshop der deltakerne ble oppfordret til å eksperimentere og uttrykke seg fritt. Hver penselstrøk representerer en personlig reise gjennom skapende arbeid.",
        "./images/gallery/3.avif",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Under workshopen fikk kunstneren mulighet til å utforske nye metoder og uttrykk. Dette maleriet er et resultat av den prosessen, og viser et individuelt preg utviklet i et inspirerende miljø.",
        "./images/gallery/4.avif",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Dette maleriet er laget av en deltaker i en workshop med fokus på kreativ utfoldelse. Gjennom veiledning og egen utforskning har kunstneren skapt et personlig og unikt uttrykk.",
        "./images/gallery/5.avif",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Verket er skapt i løpet av en workshop hvor deltakerne fikk frihet til å utvikle sine egne ideer. Resultatet er et autentisk uttrykk preget av både læring og skaperglede.",
        "./images/gallery/6.jpg",
        "temporary",
    ),
    new galleryItem(
        "title",
        "I denne workshopen sto kreativitet og eksperimentering sentralt. Dette maleriet gjenspeiler en prosess der kunstneren har fått utforske egne uttrykk i et støttende og inspirerende miljø.",
        "./images/gallery/7.jpg",
        "temporary",
    ),
    new galleryItem(
        "title",
        "Dette kunstverket er et produkt av en workshop der deltakerne arbeidet med ulike teknikker og uttrykksformer. Resultatet er et personlig preg som viser kunstnerens egen tilnærming til skapende arbeid.",
        "./images/gallery/8.jpg",
        "temporary",
    ),
];

const imageShowcase = document.getElementById("galleryImageShowcase");
const imageShowcaseImage = document.getElementById("galleryImageShowcaseImage");
const imageShowcaseText = document.getElementById("galleryImageShowcaseText");
const imageShowcaseCloseButton = document.getElementById(
    "galleryImageShowcaseCloseButton",
);

// MAIN

console.debug("HELLO WORLD! - galleri.js");

imageShowcaseCloseButton.onclick = toggleShowcase;
addGalleryItems();
toggleShowcase();

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
    image.onclick = () => {
        onImagePress(galleryItem);
    };
    item.appendChild(image);

    return item;
}

function onImagePress(galleryItem) {
    toggleShowcase();
    imageShowcaseImage.src = galleryItem.src;
    imageShowcaseImage.alt = galleryItem.alt;
    imageShowcaseText.innerHTML = galleryItem.text;
}

function toggleShowcase() {
    if (getImageShowcaseDisplay() === "none") {
        setImageShowcaseDisplay("flex");
        document.body.classList.add("scrollingDisabled");
    } else {
        setImageShowcaseDisplay("none");
        document.body.classList.remove("scrollingDisabled");
    }
}

function getImageShowcaseDisplay() {
    return imageShowcase.style.display;
}

function setImageShowcaseDisplay(input) {
    imageShowcase.style.display = input;
}
