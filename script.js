document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});


var typed = new Typed(".typing", {
    strings: [
        "Java Full Stack Developer",
        "Cloud and DevOps Engineer",
        "CI/CD Pipeline Developer"
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
});


document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "cv.pdf"; // Path to the CV file
    link.download = "Your_CV.pdf"; // Download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});




const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 2000); // change image every 2 seconds
});