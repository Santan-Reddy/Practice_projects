let btn_next = document.querySelector('#next-quote');
let btn_previous = document.querySelector('#previous-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "“Be yourself; everyone else is already taken.”",
    person: "Oscar Wilde "
}, {
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    person: "Marilyn Monroe "
}, {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    person: " Albert Einstein "
}, {
    quote: "“So many books, so little time.” ",
    person: " Frank Zappa "
}, {
    quote: "“Be the change that you wish to see in the world.”",
    person: " Mahatma Gandhi "
}];
let num = 0;
btn_next.addEventListener('click', function() {
    num += 1;
    if (num == quotes.length) {
        num = 0;
    }
    quote.innerText = quotes[num].quote;
    person.innerText = quotes[num].person;

})
btn_previous.addEventListener('click', function() {
    num -= 1;
    if (num == 0) {
        num = quotes.length - 1;
    }
    quote.innerText = quotes[num].quote;
    person.innerText = quotes[num].person;

})