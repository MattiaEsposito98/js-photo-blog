const wallEl = document.querySelector('.wall')
console.log(wallEl)


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then((res) => {
    console.log(res)
    const cards = res.data
    console.log(cards)

    appendCards (cards,wallEl)
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


 // Aggiungere l'evento click per ogni card
 const cardsGenerate = document.querySelectorAll('.card');
 cardsGenerate.forEach(card => {
  card.addEventListener('click', function() {
     card.classList.toggle('hovered');
   });
 });
}






