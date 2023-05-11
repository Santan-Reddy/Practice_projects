const mainEl=document.querySelector(".main-container");

const trailerEl=document.querySelector(".trailer-container");

const watchBtnEl=document.querySelector(".btn");

const closeBtnEl=document.querySelector(".close-icon");

const videoEl=document.querySelector("video");

watchBtnEl.addEventListener("click",()=>{
    mainEl.style.visibility="hidden";
    trailerEl.style.visibility="visible";
});

closeBtnEl.addEventListener("click",()=>{
    mainEl.style.visibility="visible";
    trailerEl.style.visibility="hidden";
    videoEl.pause();
    videoEl.currentTime=0;
});


