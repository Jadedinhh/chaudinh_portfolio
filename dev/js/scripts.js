import { tattoos } from "./tattoos"

window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let heroImgArray = document.querySelectorAll('#t-gallery li');
    // iterate over the heroImgArray and populate the background images
    heroImgArray.forEach((heroImg, i) => {

        // first pass in the array
        // heroImg.style.backgroundImage = "url(./img/projects/turtles/turtle-1.jpg)";

        heroImg.style.backgroundImage = "url(" + tattoos[i].images[0] + ")";

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