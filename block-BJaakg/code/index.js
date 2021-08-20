let rootUL = document.querySelector(".book-list");
let modalWindow = document.querySelector(".modalWindow");
let modalClose = document.querySelector(".modalClose");
let personalDetailUL = document.querySelector(".personalDetail");
let openButton = document.querySelector(".btn");

const bookURL = "https://www.anapioficeandfire.com/api/books";

function fetchData() {
  fetch(bookURL)
    .then((res) => res.json())
    .then((data) => displayUI(data));
}

fetchData();

function displayPopUp(characters) {
  Promise.all(
    characters.map((elm) => fetch(elm).then((res) => res.json()))
  ).then((data1) =>
    data1.forEach((elm1) => {
      let li = document.createElement("li");
      li.innerText = `${elm1.name} : ${elm1.aliases.join(" ")}`;
      personalDetailUL.append(li);
    })
  );
}

function displayUI(books) {
  rootUL.innerHTML = "";

  books.forEach((book) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = book.name;
    let p = document.createElement("p");
    p.innerText = book.authors.join(" ");
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = `Show Character(${book.characters.length})`;
    button.addEventListener("click", () => {
      modalWindow.style.display = "block";
      displayPopUp(book.characters);
      rootUL.style.display = "none";
      modalWindow.querySelector(".modalClose").addEventListener("click", () => {
        modalWindow.style.display = "none";
        rootUL.style.display = "block";
      });
    });
    li.append(h2, p, button);
    console.log(li);
    rootUL.append(li);
  });
}
