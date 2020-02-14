// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then (response => {
    console.log(response)
    const objects = Object.keys(response.data.articles)
    console.log (objects)
    objects.forEach (item=>{
        console.log (response.data.articles[item])
        response.data.articles[item].forEach (element =>{
            console.log(element)
            const newcard = createCard(element)
            cardscontainer.appendChild(newcard)
        })
    })    
})
.catch(error => {
    console.log("The data was not returned", error);
  });



  function createCard (element) {
      const card = document.createElement("div")
      const headline = document.createElement("div")
      const author = document.createElement("div")
      const imagecont = document.createElement("div")
      const img = document.createElement("img")
      const span = document.createElement("span")

      card.classList.add("card")
      headline.classList.add("headline")
      headline.textContent = element.headline
      author.classList.add("author")
      imagecont.classList.add("img-container")
      img.setAttribute("src", element.authorPhoto)
      span.textContent = "By " + element.authorName

      card.appendChild(headline)
      card.appendChild(author)
      author.appendChild(imagecont)
      imagecont.appendChild(img)
      author.appendChild(span)
      return card
  }

  const cardscontainer = document.querySelector(".cards-container")
  
