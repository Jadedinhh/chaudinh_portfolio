import { tattoos } from "./tattoos";
import { burgerTL } from "./burgerAnimation";
import { menuAnimator } from "./mobileMenu";
import { displayWindowSize } from "./mobileResizing";
import {scrollPage } from "./pageScroll";


window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let tattooImgArray = document.querySelectorAll('#t-gallery li');
    // iterate over the heroImgArray and populate the background images
    tattooImgArray.forEach((tattooImg, i) => {

        tattooImg.style.backgroundImage = "url(" + tattoos[i].images[0] + ")";

    });

});



