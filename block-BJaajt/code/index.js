let catsImage = document.querySelector(".cats img");
let catsButton = document.querySelector(".cats button");

function handleClick() {
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function (catInfo) {
      catsImage.src = catInfo[0].url;
    }
  );
}

catsButton.addEventListener("click", handleClick);
