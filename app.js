const wallEl = document.querySelector('.wall')
console.log(wallEl)
let overlay = document.querySelector('.container-cardBig')
console.log (overlay)


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
      <img src=${url} alt="">
      <p>${title}</p>
    </div>
  </div>
    `
    root.innerHTML += cardsHTML
  });




  // Aggiungere l'evento click per ogni card
  const cardsGenerate = document.querySelectorAll('.card');
  console.log(cardsGenerate)
  cardsGenerate.forEach(card => {


    // Creo elementi
    card.addEventListener('click', function () {
      card.classList.toggle('hovered');
      const button = document.createElement('button')
      button.textContent = "Chiudi"
      document.body.appendChild(button)
      let cardBig = document.createElement('img')
      cardBig.style.width = '80%';
      cardBig.style.height = '80%';
      cardBig.style.position = 'absolute';
      cardBig.style.top = '50%';
      cardBig.style.left = '58%';
      cardBig.style.transform = 'translate(-50%, -50%)';
      cardBig.src = card.url



      overlay.appendChild(cardBig)
      overlay.style.display = 'flex'


      //  Funzione per rimuovere bottone
      function closeCard() {
        button.remove()
        location.reload();
      }
      button.addEventListener('click', closeCard)


    },);   //once: true per effettuare solo una volta l'evento    { once: true }
  });


}







