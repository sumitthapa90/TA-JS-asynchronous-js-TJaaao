const url = "https://api.spaceflightnewsapi11.net/v3/articles?_limit=30";

let newsElm = document.querySelector(".news");
let select = document.querySelector("select");
let main = document.querySelector(".main");
let errorMsg = document.querySelector(".error-msg");
let allNews = [];
let isLoading = false;

function handleError(message = "Something went wrong") {
  main.style.display = "none";
  errorMsg.innerText = message;
}

function handleSpinner() {
  if (isLoading) {
    newsElm.innerHTML = ` <div class="donut"></div>`;
  }
}

function displayNews(news) {
  newsElm.innerHTML = "";
  news.forEach((newsItem) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = newsItem.imageUrl;
    img.alt = newsItem.title;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerText = newsItem.newsSite;
    let h2 = document.createElement("h2");
    h2.innerText = newsItem.summary;
    let a = document.createElement("a");
    a.href = newsItem.url;
    let button = document.createElement("button");
    a.append(button);
    button.innerText = "READ MORE";
    div.append(span, h2, a);
    li.append(img, div);
    newsElm.append(li);
  });
}

function displayOptions(sources) {
  sources.forEach((source) => {
    let option = document.createElement("option");
    option.innerText = source;
    option.value = source;
    select.append(option);
  });
}
function init() {
  isLoading = true;
  handleSpinner();
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Responce not ok");
      }
    })
    .then((news) => {
      console.log(news);
      allNews = news;
      displayNews(news);
      let allSource = Array.from(new Set(news.map((n) => n.newsSite)));
      displayOptions(allSource);
    })
    .catch((error) => handleError(error));
}

//   <li>
//   <img src="./morning-2243465__340.webp" alt="" />
//   <div>
//     <span>NASA</span>
//     <h2>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//       nihil dignissimos laudantium quo explicabo perspiciatis voluptate,
//       adipisci beatae nam cum?
//     </h2>
//     <button>READ MORE</button>
//   </div>
// </li>

select.addEventListener("change", (event) => {
  let source = event.target.value;
  let filterNews = allNews.filter((news) => news.newsSite === source);
  displayNews(filterNews);
});

if (navigator.onLine) {
  init();
} else {
  handleError("Check your connection");
}
