import { tattoos } from "./tattoos"
// import { burgerTL } from "./burgerAnimation";
// import {menuAnimation} from "./mobileMenu.js";
// import {scrollPage} from "./pageScroll";
// import { displayWindowSize } from "./mobileResizing"

// var burgerButton = document.querySelector("#burger");
// let canISeeMenu = false;

// function openCloseMenu(){
//     if(canISeeMenu === false){
//         // can't see menu... play timeline of burger into X
//         burgerTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         // can see menu.. play X back into burger
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// }

// burgerButton.addEventListener("click", openCloseMenu);
// let navButtons = document.querySelectorAll(".nav-btns");

// for (const button of navButtons){
//     button.addEventListener("click", checkScrolling);
//     button.addEventListener("click", openCloseMenu);
// }


// function checkScrolling(e) {
//     // check to see which button was clicked
//     const indexValue = [].indexOf.call(navButtons, e.target)
//     if (indexValue != -1) {
//         scrollPage(indexValue);
//     }
// }

window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let tattooImgArray = document.querySelectorAll('#t-gallery li');
    // iterate over the heroImgArray and populate the background images
    tattooImgArray.forEach((tattooImg, i) => {

    

        tattooImg.style.backgroundImage = "url(" + tattoos[i].images[0] + ")";

    });

    // let heroLinks = document.querySelectorAll("#gallery a");

    // heroLinks.forEach((link, i) => {
    //     // console.log("hello");

    //     link.addEventListener("click", () =>{
    //         localStorage.setItem("indexValue", i);
    //         link.href = "detail.html?=" + projects[i].title;
    //     });
    // });
})

// //listen to window resize
// window.addEventListener("resize", displayWindowSize);

// //check the window size on load
// window.addEventListener('load', displayWindowSize);