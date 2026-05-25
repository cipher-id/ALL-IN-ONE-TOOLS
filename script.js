const homeMenu = document.getElementById("home-menu");
const tiktokMenu = document.getElementById("tiktok-menu");

const homePage = document.getElementById("home-page");
const tiktokPage = document.getElementById("tiktok-page");

const navbarTitle = document.getElementById("navbar-title");

/* HOME MENU */

homeMenu.addEventListener("click", () => {

    /* PAGE */
    homePage.classList.remove("hidden");
    tiktokPage.classList.add("hidden");

    /* NAVBAR */
    navbarTitle.innerText = "HOME";

    /* ACTIVE BUTTON */
    homeMenu.classList.add("active");
    tiktokMenu.classList.remove("active");

});

/* TIKTOK MENU */

tiktokMenu.addEventListener("click", () => {

    /* PAGE */
    tiktokPage.classList.remove("hidden");
    homePage.classList.add("hidden");

    /* NAVBAR */
    navbarTitle.innerText = "TIKTOK";

    /* ACTIVE BUTTON */
    tiktokMenu.classList.add("active");
    homeMenu.classList.remove("active");

});
