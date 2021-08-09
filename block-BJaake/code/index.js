const url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30";

let elm = document.querySelector(".news");

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
    div.append(span, h3, button);
    li.append(img, div);
    elm.append(li);
  });
}
fetch(url)
  .then((res) => res.json())
  .then((news) => console.log(news));
