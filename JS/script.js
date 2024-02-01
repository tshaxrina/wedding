window.addEventListener("load", () => {
    let start = document.querySelector(".start")
    let rings = document.querySelector(".rings")
    let main = document.querySelector("main")

    setTimeout(() => {
        rings.classList.add("hide")
    }, 1000)
    setTimeout(() => {
        start.classList.add("hide")
        start.classList.add("hide2")
        main.classList.add("active")
    }, 1500)
})