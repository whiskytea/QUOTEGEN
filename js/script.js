/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let allQuotes = [
  quote1 = {
    'quote': 'Once more unto the breach.',
    'source': 'Shakespeare | Henry V',
    'tags': 'literature',
    'color': '#839D9A'
  },
  quote2 = {
    'quote': 'Any fool can criticize, condemn, and complain — and most fools do.',
    'source': 'Dale Carnegie',
    'tag': 'witticism',
    'color': '#D9F4C7'
  },
  quote3 = {
    'quote': 'We cannot solve our problems with the same thinking we used when we created them.',
    'source': 'Albert Einstein',
    'tag': "historical figure",
    'color': '#71677C'
  },
  quote4 = {
    'quote': 'Choose a job you love, and you will never have to work a day in your life.',
    'source': 'Confucius',
    'tag': 'historical figure',
    'color': '#4B3B40'

  },
  quote5 = {
    'quote': 'Strength above all.',
    'source': 'Darius | league of legends',
    'citation': 'Riot Games',
    'color': '#7EA2AA'
  },
  quote6 = {
    'quote': `Had to have high, high hopes for a living`,
    'source': 'Panic at the Disco | High High Hopes',
    'year': '2018',
    'color': '#E7CEE3'
  },
]

let quotes = [];


/***
 * `getRandomQuote` function
***/
const getRandomQuote = (quotes) =>{
  //get random number between 0 and quotes.length();
  randomNum = Math.floor(Math.random()*((quotes.length-1)-0));
  randomQuote = quotes[randomNum];
  quotes.splice(randomNum, 1);
  return randomQuote;
}

/***
 * `printQuote` function
***/

//FOR THE INSTRUCTORS: the instructions for this lesson watned us to use innerHTML
//I have chosen to use createElement again as that is a better programming practice to learn
//for the sake of security and page performance
const createElement = function(elementName, className, textContent){
  let element = document.createElement(elementName);
  element.className = className;
  element.textContent = textContent;
  return element;
}

let timeout;

const printQuote = () => {
  if (quotes.length === 0){
    quotes.push(...allQuotes)
  }
  let quoteBox = document.querySelector('#quote-box');
  let randomQuote = getRandomQuote(quotes);
  while (quoteBox.firstChild) { 
    quoteBox.removeChild(quoteBox.firstChild)
  }
  quoteBox.appendChild(createElement('p', 'quote', randomQuote['quote']));
  quoteBox.appendChild(createElement('p', 'source', randomQuote['source']));
  if (randomQuote['tag']){
    quoteBox.appendChild(createElement('p', 'tag', randomQuote['tag']));
  };
  if (randomQuote['citation']){
    quoteBox.appendChild(createElement('p', 'citation', randomQuote['citation']));
  };
  if (randomQuote['year']){
    quoteBox.appendChild(createElement('p', 'year', randomQuote['year']));
  }

  
  document.body.style.backgroundColor = randomQuote['color'];
  //creates the automatic transition of quotes after 5 seconds, and includes a clear option if the button was clicked
  // if (timeout){ 
  //   clearTimeout(timeout);
  // }
  // timeout = setTimeout(() => printQuote(), 5000)
}

printQuote(); //loads a quote from the quotes array on page load
setTimeout(() => document.body.style.transition = 'background-color 1s', 100); // add color transition after initial page load

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
