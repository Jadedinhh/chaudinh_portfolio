import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#about","#quote1","#tattoos","footer"];

export function scrollPage(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index]});
}