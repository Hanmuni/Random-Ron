const getQuote = document.querySelector("#get-quote");
let quote = document.querySelector("#quote");
let quotes = [];

let fetchQuote = () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((data) => {
      console.log("This is the API data", data);

      if (!quotes.includes(data[0])) {
        quotes.push(data[0]);
        quote.textContent = data[0];
      } else {
        fetchQuote();
      }

      console.log("This is the quotes array", quotes);
    })
    .catch((error) => {
      console.warn(error);
    });
};

getQuote.addEventListener("click", fetchQuote);

fetchQuote();
