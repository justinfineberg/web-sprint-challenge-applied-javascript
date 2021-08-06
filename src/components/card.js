import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const card = document.createElement('div');
card.classList.add('card');

const headline = document.createElement('div');
headline.classList.add('headline');

const author = document.createElement('div');
author.classList.add('author');

const imageContainer = document.createElement('div');
imageContainer.classList.add('img-container');

const image = document.createElement('img');

const span = document.createElement('span');

headline.textContent = `${article.headline}`;
image.src = `${article.authorPhoto}`;
span.textContent = `By ${article.authorName}`

card.addEventListener('click', function(event){
  console.log(headline);
})

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imageContainer);
imageContainer.appendChild(image);
author.appendChild(span);



return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(res=>{
    let dataObj = res.data.articles;
    for (let topic in dataObj){
      dataObj[topic].forEach(article =>{
        let newArticle = Card(article);
        document.querySelector(`${selector}`).appendChild(newArticle);
      })
    }
  })
}



export { Card, cardAppender }
