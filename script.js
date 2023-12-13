const getQuote = document.querySelector("#get-quote");
let quote = document.querySelector("#quote");
let quotes = [];
let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let fetchQuote = async () => {
  try {
    let response = await fetch(url);

    if (!response.ok) throw response;

    let data = await response.json();
    console.log("This is the API data", data);

    if (quotes.length > 45) {
      quotes.shift();
    }

    if (!quotes.includes(data[0])) {
      quotes.push(data[0]);
      console.log("This is the quotes array", quotes);
      quote.textContent = data[0];
    } else {
      fetchQuote();
    }
  } catch (error) {
    console.warn(error);
  }
};

getQuote.addEventListener("click", fetchQuote);

fetchQuote();
