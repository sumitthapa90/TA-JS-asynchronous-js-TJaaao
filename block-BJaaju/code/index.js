// https://api.unsplash.com/photos/random//?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY

let container = document.querySelector(".container");
let input = document.querySelector("input");

const url =
  "https://api.unsplash.com/photos/random/?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY";

const GetSearchUrl = (query) => {
  return `https://api.unsplash.com/search/photos/?query=${query}&client_id=YYJ9Yzc0iLISY4UhTxDC187x_cZDkS9btvhGQBcTghs`;
};

function fetchData(url, handler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => handler(JSON.parse(xhr.response));

  xhr.onerror = function () {
    alert("Someting went wrong");
  };
  xhr.send();
}

function displayUI(image) {
  container.innerHTML = "";
  image.forEach((element) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = element.url.small;
    li.append(img);
    container.append(li);
  });
}

fetchData(url, displayUI);

function handleClick(event) {
  if (event.keyCode === 13 && input.value) {
    fetch(GetSearchUrl(input.value), (searchResult) => {
      displayUI(searchResult);
    });
  }
}

input.addEventListener("keyup", handleClick);

