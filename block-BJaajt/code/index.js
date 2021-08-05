let input = document.querySelector("input");
let info = document.querySelector(".info");
let userImg = document.querySelector(".info img");
let userName = document.querySelector(".info h2");
let userLogin = document.querySelector(".info p");

function handleDisply(userInfo) {
  userImg.src = userInfo.avatar_url;
  userName.innerText = userInfo.name;
  userLogin.innerText = "@" + userInfo.login;
}

function handleClick(event) {
  if (event.keyCode === 13 && input.value) {
    console.log(input.value);
    const userName = new XMLHttpRequest();
    userName.open("GET", "https://api.github.com/users/prank7");
    userName.onload = function () {
      handleDisply(JSON.parse(userName.response)  );
    };

    userName.onerror = function () {
      console.log("something wentt wrong..");
    };
    userName.send();
  }
}

input.addEventListener("keydown", handleClick);
