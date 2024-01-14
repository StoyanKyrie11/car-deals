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


setTimeout(() => {
    const navBtn = document.querySelector(".nav-trigger")
    const mobileContent = document.querySelector(".header__content")

    navBtn.addEventListener("click", function onClick(event) {
        mobileContent.classList.toggle("is-visible")

        this.classList.toggle("is-active")

        event.preventDefault();
    });

}, "1000")
