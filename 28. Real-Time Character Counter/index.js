const textareaEl = document.getElementById("textarea");
const countEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");


textareaEl.addEventListener("keyup", count)
count(); //used to update the default values of counter when we load this page

function count() {
    let length = textareaEl.value.length;
    //the below line is used to get maximum length of text area (it is optional , we can use number `50` instead of getting this value)
    let maxlength = textareaEl.getAttribute("maxlength");
    countEl.innerText = length;
    remainingEl.innerText = maxlength - length;
}