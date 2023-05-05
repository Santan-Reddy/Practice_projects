const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert('Enter your Birthday')
    } else {
        const age = getAge(birthdayValue);
        console.log(age);
        // resultEl.innerText = "You are " + age + " years old";
        resultEl.innerText = `You are ${age} ${age>1?"years":"year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const months = currentDate.getMonth() - birthdayDate.getMonth();
    const date = currentDate.getDate() - birthdayDate.getDate();
    if (months < 0 || (months == 0 && date < 0)) {
        return age - 1;
    }
    return age
}

btnEl.addEventListener("click", calculateAge);