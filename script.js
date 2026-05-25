const homeMenu = document.getElementById("home-menu");
const tiktokMenu = document.getElementById("tiktok-menu");
const updateMenu = document.getElementById("update-menu");
const settingsMenu = document.getElementById("settings-menu");

const homePage = document.getElementById("home-page");
const tiktokPage = document.getElementById("tiktok-page");
const updatePage = document.getElementById("update-page");
const settingsPage = document.getElementById("settings-page");

const navbarTitle = document.getElementById("navbar-title");

/* ALL PAGES */

function hideAllPages(){

    homePage.classList.add("hidden");
    tiktokPage.classList.add("hidden");
    updatePage.classList.add("hidden");
    settingsPage.classList.add("hidden");

}

/* REMOVE ACTIVE */

function removeActive(){

    homeMenu.classList.remove("active");
    tiktokMenu.classList.remove("active");
    updateMenu.classList.remove("active");
    settingsMenu.classList.remove("active");

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

    navbarTitle.innerText = "TikTok";

    tiktokMenu.classList.add("active");

});

/* UPDATE */

updateMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    updatePage.classList.remove("hidden");

    navbarTitle.innerText = "next update";

    updateMenu.classList.add("active");

});

/* SETTINGS */

settingsMenu.addEventListener("click", () => {

    hideAllPages();
    removeActive();

    settingsPage.classList.remove("hidden");

    navbarTitle.innerText = "setelan";

    settingsMenu.classList.add("active");

});
