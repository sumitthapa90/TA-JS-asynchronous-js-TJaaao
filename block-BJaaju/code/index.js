// https://api.unsplash.com/photos/?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY

const url =
  "https://api.unsplash.com/photos/?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY";

const searchUrl = (query) => {
  return `https://api.unsplash.com/search/photos/?query=${query}&client_id=YYJ9Yzc0iLISY4UhTxDC187x_cZDkS9btvhGQBcTghs`;
};
const root = document.querySelector(".images");
let searchElm = document.querySelector("input");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    alert("Something Went Wrong");
  };
  xhr.send();
}

function displayImage(images) {
  root.innerHTML = "";
  images.forEach((image) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = image.urls.thumb;
    li.append(img);
    root.append(li);
  });
}
fetch(url, displayImage);

function handleSearch(event) {
  if (event.keyCode === 13 && searchElm.value) {
    fetch(searchUrl(searchElm.value), (searchResult) => {
      displayImage(searchResult.results);
    });
  }
}

searchElm.addEventListener("keyup", handleSearch);
