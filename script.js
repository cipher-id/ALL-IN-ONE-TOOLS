console.log("CIPHER READY");

const homeMenu = document.getElementById("home-menu");
const tiktokMenu = document.getElementById("tiktok-menu");

const homePage = document.getElementById("home-page");
const tiktokPage = document.getElementById("tiktok-page");

/* HOME */

homeMenu.onclick = () => {

    homePage.classList.remove("hidden");
    tiktokPage.classList.add("hidden");

}

/* TIKTOK */

tiktokMenu.onclick = () => {

    tiktokPage.classList.remove("hidden");
    homePage.classList.add("hidden");

}
