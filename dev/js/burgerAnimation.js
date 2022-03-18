import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});

const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25, y:"+=0.1"})
.to(".burger-lines:nth-child(1)",{duration:0.8, rotation:225,fill:"#fff"});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(2)",{duration:0.25, y:"-=8"})
.to(".burger-lines:nth-child(2)",{duration:0.8, rotation:-225,fill:"#fff"});


export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")