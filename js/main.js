const header = document.querySelector('.header')
fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data
    })

const footer = document.querySelector('.footer')
fetch('/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })


/*
 * Modules
 */

const cars = document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tabs__head ul li")
    const tabs = document.querySelectorAll(".tabs__body .tab")

    for (let i = 1; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            tabs.forEach(tab => {
                tab.style.display = 'none';
            });

            tabs[index].style.display = 'flex';

            tabLinks.forEach(link => {
                link.classList.remove('is-active');
            });
            tab.classList.add('is-active');
        });
    });
})

const accordionSections = document.querySelectorAll(".accordion__section");

accordionSections.forEach((section) => {
    section.addEventListener("click", () => {
        if (!section.classList.contains("active")) {

            accordionSections.forEach((otherSection) => {

                if (otherSection.classList.contains("active")) {
                    otherSection.classList.remove("active");
                }
            });

            section.classList.add("active");

        } else {
            section.classList.remove("active");
        }
    });
});


setTimeout(() => {
    const navBtn = document.querySelector(".nav-trigger")
    const mobileContent = document.querySelector(".header__content")

    navBtn.addEventListener("click", function onClick(event) {
        mobileContent.classList.toggle("is-visible")

        this.classList.toggle("is-active")

        event.preventDefault();
    });

}, "1000")



