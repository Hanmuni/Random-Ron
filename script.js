const getQuote = document.querySelector("#get-quote");
let quote = document.querySelector('#quote');

getQuote.addEventListener("click", () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      quote.textContent = data[0];
    })
    .catch((error) => {
      console.warn(error);
    });
});
