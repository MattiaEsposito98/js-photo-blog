const wallEl = document.querySelector('.wall')
const overlay = document.querySelector('.container-cardBig')
const button = document.createElement('button')


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then((res) => {
    console.log(res)
    const cards = res.data
    console.log(cards)

    appendCards(cards, wallEl)
  })

  .catch((err) => {
    console.log(err)
  })


function appendCards(cards, root) {
  cards.forEach(card => {
    const { url, title } = card

    const cardsHTML = `
  <div class="col-3">
    <div class="card">
      <img src="./img/pin.svg" class="decoration-card">
      <img src=${url} alt="" id = "cardUrl">
      <p>${title}</p>
    </div>
  </div>
    `
    root.innerHTML += cardsHTML
  })



  // ciclo per le card
  const cardsGenerate = document.querySelectorAll('.card')
  cardsGenerate.forEach((card, i) => {

    // Aggiungere l'evento click per ogni card
    card.addEventListener('click', () => {

      const { url } = cards[i]
      card.classList.add('hovered')

      button.textContent = "Chiudi"
      document.body.appendChild(button)

      // creo imagine da js
      let cardBig = document.createElement('img')
      cardBig.src = url
      cardBig.style.width = '600px'
      cardBig.style.height = '600px'
      cardBig.style.position = 'absolute'
      cardBig.style.top = '50%'
      cardBig.style.left = '50%'
      cardBig.style.transform = 'translate(-50%, -50%)'


      overlay.appendChild(cardBig)
      overlay.style.display = 'flex'

    })


    //  Funzione per chiudere la card
    function closeCard() {
      button.remove()
      overlay.style.display = 'none'
      card.classList.remove('hovered')
    }

    button.addEventListener('click', closeCard)

  });

}















