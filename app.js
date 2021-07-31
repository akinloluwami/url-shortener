const form = document.querySelector(".form");
let urlInput = document.querySelector(".input").value;
const shortLink = document.querySelector(".link");
function shortenLink(url) {
  const urlInput = document.querySelector(".input").value;
  url = urlInput;
  url = fetch(
    `https://shortly-url-shortener.p.rapidapi.com/?url=${url}format=plain`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5caf141545msha2d29df358a627bp166d7djsna9e79f47d35b",
        "x-rapidapi-host": "shortly-url-shortener.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.text())
    .then((data) => {
      if (data === "<h1>Bad shit</h1>") {
        shortLink.value = "Wrong input";
      } else {
        shortLink.value = data;
      }
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shortenLink();
});

const copyButton = document.querySelector(".copy-btn");

copyButton.addEventListener("click", (e) => {
  shortLink.select();
  document.execCommand("copy");
});
