// https://api.unsplash.com/photos/?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY

const url =
  "https://api.unsplash.com/photos/?client_id=ynqk72nYe6V4f4sgSvz_7QUFHG8VBxAC1uR-XcsaVAY";

const searchUrl = (query) => {
  return `https://api.unsplash.com/search/photos/?query=${query}&client_id=YYJ9Yzc0iLISY4UhTxDC187x_cZDkS9btvhGQBcTghs`;
};

const root = document.querySelector(".images");
let searchElm = document.querySelector("input");

// function fetch(url, successHandler) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.onload = () => successHandler(JSON.parse(xhr.response));
//   xhr.onerror = function () {
//     alert("Something Went Wrong");
//   };
//   xhr.send();
// }

function fetchAll(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject("Something Went Wrong");
    xhr.send();
  });
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

fetchAll(url)
  .then(displayImage)
  .catch((error) => console.log("Error"));

function handleSearch(event) {
  if (event.keyCode === 13 && searchElm.value) {
    fetch(searchUrl(searchElm.value))
      .then((searchResult) => {
        displayImage(searchResult.results);
      })
      .catch((error) => console.log("Error"));

    searchElm.value = "";
    
  }
}

searchElm.addEventListener("keyup", handleSearch);
