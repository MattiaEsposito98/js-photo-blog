const rowEl = document.querySelector('.row')
console.log(rowEl)


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then((res) => {
    console.log(res)
    const cards = res.data
    console.log(cards)

    appendCards (cards,rowEl)
  })

  .catch((err) => {
    console.log(err)
  })


function appendCards(cards, root) {
  cards.forEach(card => {
    const {url, title} = card

    const cardsHTML = `
  <div class="col-3">
    <div class="card">
      <img src="./img/pin.svg" class="decoration-card">
      <img src=${url} alt="">
      <p>${title}</p>
    </div>
  </div>
    `
    root.innerHTML += cardsHTML
  });
}




