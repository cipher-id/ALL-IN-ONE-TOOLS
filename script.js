/* MENU */
/* SIDEBAR */

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menu-toggle");
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

/* TIKTOK DOWNLOADER */

const downloadBtn = document.getElementById("download-btn");
const tiktokUrl = document.getElementById("tiktok-url");
const result = document.getElementById("result");

downloadBtn.addEventListener("click", async () => {

    const url = tiktokUrl.value;

    if(url === ""){

        result.innerHTML = `
        <div class="result-box">
            <h3>ERROR</h3>
            <p>Masukkan link TikTok.</p>
        </div>
        `;

        return;

    }

    result.innerHTML = `
    <div class="result-box">
        <h3>LOADING...</h3>
        <p>Mengambil video TikTok...</p>
    </div>
    `;

    try{

        const response = await fetch(
        `https://tikwm.com/api/?url=${url}`
        );

        const data = await response.json();

        const video = data.data.play;
        const music = data.data.music;
        const title = data.data.title;

        result.innerHTML = `
        <div class="result-box">

            <h3>${title}</h3>

            <a href="${video}" target="_blank">
                DOWNLOAD MP4
            </a>

            <a href="${music}" target="_blank">
                DOWNLOAD MP3
            </a>

        </div>
        `;

    }catch(error){

        result.innerHTML = `
        <div class="result-box">
            <h3>ERROR</h3>
            <p>Gagal mengambil data TikTok.</p>
        </div>
        `;

    }

});

/* CLEAR BUTTON */

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {

    /* CLEAR INPUT */
    tiktokUrl.value = "";

    /* CLEAR RESULT */
    result.innerHTML = "";

});

/* TOGGLE SIDEBAR */

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active-sidebar");

});
