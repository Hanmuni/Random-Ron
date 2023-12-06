const getQuote = document.querySelector("#get-quote");
let quote = document.querySelector("#quote");

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
      console.log(data);
      quote.textContent = data[0];
    })
    .catch((error) => {
      console.warn(error);
    });
};

getQuote.addEventListener("click", fetchQuote);

fetchQuote();
