let input = document.querySelector("input");
let rootUL = document.querySelector(".rootUL");
const baseURL = `https://sleepy-falls-37563.herokuapp.com/api/todo`;

let isTrue = false;

function handleTogal(id, status) {
    let data = {
        todo: {
            isComplete = !status,
        }
    }
    fetch(baseURL, `/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data).then(()=> main()) 
      });
}





function displayUI(todos) {
  rootUL.innerHTML = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("input-checkbox");
    input.type = `checkbox`;
    input.checked = todo.isCompleted;
    input.id = todo._id;

    let label = document.createElement("label");
    label.innerText = todo.title;
    let span = document.createElement("span");
    span.innerText = `x`;
    li.append(input, label, span);
    rootUL.append(li);
  });
}

function fetchData() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((totoData) => displayUI(totoData));
}
fetchData();


