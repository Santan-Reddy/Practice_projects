const loanEl = document.getElementById("loan-amount");
const interestEl = document.getElementById("interest-rate");
const monthEl = document.getElementById("months-to-pay");
const amountEl = document.getElementById("amount");
calculate();

function calculate() {

    let loan = Number(loanEl.value);
    let interest = interestEl.value;
    let month = monthEl.value;

    let interestamount = eval(loan + (loan * interest) / 100);

    let amount = (interestamount / month)


    amountEl.innerText = amount.toFixed(2);



}