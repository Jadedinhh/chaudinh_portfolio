import { tattoos } from "./tattoos";
// import { burgerTL } from "./burgerAnimation";
// import { menuAnimator } from "./mobileMenu";
// import { displayWindowSize } from "./mobileResizing";
// import {scrollPage } from "./pageScroll";


window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let tattooImgArray = document.querySelectorAll('#t-gallery li');
    // iterate over the heroImgArray and populate the background images
    tattooImgArray.forEach((tattooImg, i) => {

        tattooImg.style.backgroundImage = "url(" + tattoos[i].images[0] + ")";

    });

});

// var burgerButton = document.querySelector("#burger");

// let burgerClicked = false;

// function openCloseMenu(){
//     if(burgerClicked === false){
//       burgerTL.play();
//       menuAnimator.play();
//       burgerClicked = true;
//   }else{
//       burgerTL.reverse();
//       menuAnimator.reverse();
//       burgerClicked = false;
//     } 
//  }

//  burgerButton.addEventListener("click", openCloseMenu);

// let navButtons = document.querySelectorAll(".nav-btns");

// for(const button of navButtons){
//     button.addEventListener("click", checkScrolling);
//     button.addEventListener("click", openCloseMenu);
// }


// function checkScrolling(e) {
//     const indexValue = [].indexOf.call(navButtons, e.target)
    
//     if (indexValue != -1){
//         scrollPage(indexValue -1);
//     }
// }

// window.addEventListener("resize", function(){
//     if(burgerClicked === true){
//         console.log("fire");
//         openCloseMenu();
//     }
// });


// window.addEventListener("resize", displayWindowSize);

// window.addEventListener('load', displayWindowSize);