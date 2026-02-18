"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*Hamburgermeny*/
    const hamburger = document.getElementById("hamburger");

    hamburger.addEventListener("click", () => {

        const nav = document.getElementById("headerNav");

        if (nav.className === "topnav") {
            nav.className += " responsive";
        } else {
            nav.className = "topnav";
        }
        console.log(nav.className);
    });

    /* Stylingknapp */
    const styleBtn = document.getElementById("styleBtn");
    styleBtn.addEventListener("click", stylePage);

    styleBtn.addEventListener("click", rotate);
})

/* styling av sidan när knapp klickas */
function stylePage() {
    const headingEl = document.getElementById("animationHeading");

    if (headingEl.style.animationPlayState == "running" &
        styleBtn.style.animationPlayState == "running"
    ) {
        headingEl.style.animationPlayState = "paused";
        styleBtn.style.animationPlayState = "paused";

    } else {
        headingEl.style.animationPlayState = "running";
        styleBtn.style.animationPlayState = "running";

    }
}

function rotate() {
    
   const windowPic = document.getElementById("windowPic");
    
        if (
            windowPic.style.animationPlayState == "running"
        ) {
            windowPic.style.animationPlayState = "paused";
        } else {
            windowPic.style.animationPlayState = "running";
        }
    
}