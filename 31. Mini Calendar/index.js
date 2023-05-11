const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
console.log(date.getMonth());

//months
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", { month: "long" })

//date
dayNumEl.innerText = date.getDate();

//day

dayNameEl.innerText = date.toLocaleString("en", { weekday: "long" })

// year

yearEl.innerText = date.getFullYear();