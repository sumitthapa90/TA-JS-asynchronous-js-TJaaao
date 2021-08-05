let catImg = document.querySelector(".img-Containe");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let catApi = new XMLHttpRequest();
  catApi.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );
  catApi.onload = function () {
    let catData = JSON.parse(catApi.response);
    catImage.src = catData[0].url;
  };
  catApi.send();
});

// let button = document.querySelector("button");
// let catImage = document.querySelector(".cat-image");

// button.addEventListener("click", function () {
//   let catApi = new XMLHttpRequest();
//   catApi.open(
//     "GET",
//     "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
//   );

//   catApi.onload = function () {
//     let catData = JSON.parse(catApi.response);
//     catImage.src = catData[0].url;
//   };
//   catApi.send();
// });
