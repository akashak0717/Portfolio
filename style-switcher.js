// ==================================Toggle Style Switcher====================================


const styleSwitchertoggle = document.querySelector(".style-switcher-toggler");
styleSwitchertoggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// ====================================hide style-switcher on scroll =============================


window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) 
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ==================================Theme Colors ====================================


const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}


// ==================================Theme Light and Dark Mood ====================================


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    // Set dark mode by default
    document.body.classList.add("dark");

    // Change icon to sun
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
});