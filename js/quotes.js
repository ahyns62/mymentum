const quotes = [
    {
        quote: "No pain, No gain",
        author: "Benjamin Franklin",
    },
    {
        quote: "The will of man is his happiness",
        author: "Friedrich von schiller",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "Carol Burnett",
    },
    {
        quote: "When in doubt, choose change",
        author: "Lily Leung",
    },
    {
        quote: "It is not length of life, But depth of life",
        author: "Falph Waldo Emerson",
    },
    {
        quote: "Time is flying never to return",
        author: "Virgil",
    },
    {
        quote: "I find the harder I work, the more luck I have",
        author: "Thomas Jefferson",
    },
    {
        quote: "Don't dream, Be it",
        author: "Tim curry",
    },
    {
        quote: "Where there is a will there is a way",
        author: "Angela Merkel",
    },
    {
        quote: "The die is cast",
        author: "Julius Caesar",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;