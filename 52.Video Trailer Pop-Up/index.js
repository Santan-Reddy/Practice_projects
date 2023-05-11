const mainEl=document.querySelector(".main-container");

const trailerEl=document.querySelector(".trailer-container");

const watchBtnEl=document.querySelector(".btn");

const closeBtnEl=document.querySelector(".close-icon");

watchBtnEl.addEventListener("click",()=>{
    trailerEl.classList.remove("active");
});

closeBtnEl.addEventListener("click",()=>{
    trailerEl.classList.add("active");
    
});