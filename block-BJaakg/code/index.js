const url = "https://www.anapioficeandfire.com/api/books";

let container = document.querySelector(".container");
let elm = document.querySelector(".box");

{
  /* <li>
  <h2>A Game of Thrones</h2>
  <p>George R. R. Martin</p>
  <button>Show Charaters(434)</button>
</li>; */
}

function searies(sources) {
  let elm = "";
  sources.forEach((source) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = source.name;
    let p = document.createElement("p");
    p.innerText = source.authors;
    let button = document.createElement("button");
    button.innerText = source.numberOfPages;
    li.append(h2, p, button);
    elm.append(li);
    container.append(elm);
  });
}

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
