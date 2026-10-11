/* =========================================
   CONSOLE TEST
========================================= */

console.log("Dove Portfolio JS Connected");


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/*
    Close mobile menu when a link is clicked
*/

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;


        /*
            Close every other FAQ
        */

        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {

                item.classList.remove("active");

            }

        });


        /*
            Open / close clicked FAQ
        */

        currentItem.classList.toggle("active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                /*
                    Stop observing once it appears
                */

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================
   PROJECT IMAGE HOVER
========================================= */

const projectImages =
    document.querySelectorAll(".project-image");

projectImages.forEach(function (image) {

    image.addEventListener("mouseenter", function () {

        image.style.transform = "scale(1.01)";

    });

    image.addEventListener("mouseleave", function () {

        image.style.transform = "scale(1)";

    });

});




//EGGROLLDADDY JS


const items = document.querySelectorAll(".reveal");


    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });



items.forEach(function(item) {
    observer.observe(item);
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin,CustomEase)
    // gsap code here!
   });