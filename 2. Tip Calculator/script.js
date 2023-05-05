const btnEl = document.getElementById('calculate');
const billEl = document.getElementById('bill');
const tipEl = document.getElementById('tip');
const totalEl = document.getElementById('total');



function calculate() {
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    if (billValue == "") {
        alert('Enter Bill amount');
    } else {
        const totalValue = billValue * (1 + tipValue / 100);
        totalEl.innerText = `${totalValue.toFixed(2)}/-`
    }
    console.log(tipValue)
}


btnEl.addEventListener("click", calculate);