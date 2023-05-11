const counterEL = document.querySelector(".counter");
const barEL = document.querySelector(".loading-bar-front");

let idk = 0;

updateNum();


function updateNum() {
    counterEL.innerText = idk + "%";
    barEL.style.width = idk + "%";
    idk++;
    if (idk < 101) {
        setTimeout(updateNum, 20)
    }
}