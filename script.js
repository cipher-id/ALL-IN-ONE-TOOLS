/* MENU */

const homeMenu = document.getElementById("home-menu");
const tiktokMenu = document.getElementById("tiktok-menu");
const nextMenu = document.getElementById("next-menu");
const setelanMenu = document.getElementById("setelan-menu");

/* PAGE */

const homePage = document.getElementById("home-page");
const tiktokPage = document.getElementById("tiktok-page");
const nextPage = document.getElementById("next-page");
const setelanPage = document.getElementById("setelan-page");

/* NAVBAR */

const navbarTitle = document.getElementById("navbar-title");

/* HIDE ALL PAGE */

function hideAllPages(){

    homePage.classList.add("hidden");
    tiktokPage.classList.add("hidden");
    nextPage.classList.add("hidden");
    setelanPage.classList.add("hidden");

}

/* REMOVE ACTIVE */

function removeActive(){

    homeMenu.classList.remove("active");
    tiktokMenu.classList.remove("active");
    nextMenu.classList.remove("active");
    setelanMenu.classList.remove("active");

}

/* HOME */

homeMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    homePage.classList.remove("hidden");

    navbarTitle.innerText = "HOME";

    homeMenu.classList.add("active");

});

/* TIKTOK */

tiktokMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    tiktokPage.classList.remove("hidden");

    navbarTitle.innerText = "TIKTOK";

    tiktokMenu.classList.add("active");

});

/* NEXT UPDATE */

nextMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    nextPage.classList.remove("hidden");

    navbarTitle.innerText = "NEXT UPDATE";

    nextMenu.classList.add("active");

});

/* SETELAN */

setelanMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    setelanPage.classList.remove("hidden");

    navbarTitle.innerText = "SETELAN";

    setelanMenu.classList.add("active");

});
