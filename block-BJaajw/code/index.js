const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30";

let elm = document.querySelector(".news");
let select = document.querySelector("select");
let allNews = [];

//   <li>
//         <img src="./morning-2243465__340.webp" alt="" />
//         <div>
//           <span class="source">NASA</span>
//           <h3>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
//             modi consequatur, facere natus asperiores iste.
//           </h3>
//           <button>READ MORE</button>
//         </div>
//       </li>

function displayUINews(news) {
  elm.innerHTML = "";
  news.forEach((newsItem) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = newsItem.imageUrl;
    img.alt = newsItem.title;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.classList.add("option");
    span.innerText = newsItem.newsSite;
    let h3 = document.createElement("h3");
    h3.innerText = newsItem.summary;
    let a = document.createElement("a");
    let button = document.createElement("button");
    button.innerText = "Read More";
    a.append(button);
    a.href = newsItem.url;
    div.append(span, h3, a);
    li.append(img, div);
    elm.append(li);
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
fetch(url)
  .then((res) => res.json())
  .then((news) => {
    console.log(news);
    allNews = news;
    displayUINews(news);
    let allSources = news.map((n) => n.newsSite);
    displayOptions(allSources);
  })
  .catch((error) => console.log(error));

function handleClick(event) {
  let source = event.target.value;
  let filterNews = allNews.filter((news) => news.newsSite === source);
  displayUINews(filterNews);
}
select.addEventListener("click", handleClick);
