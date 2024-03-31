
  let timeRemaining = document.getElementById('time')



  let clickc = document.getElementById('clickc')
  let time = 50
  let click = 0
  let cardsHidden = []

  let cardsChosen = []

  let t = setInterval(()=>{
            time--
            timeRemaining.innerText=time
            if(time==0) {
                time.innerText=time
                clearInterval(t)
                if(confirm('冇得时间哒，多练练再来吧')) {
                    location.reload()
                }
            }
        },1000)


function handlerClick(cardl) {

          reversal(cardl)

          addCard(cardl)

          setTimeout(()=>{
              equals(cardsChosen)
          }, 1500)
          clickc.innerText = ++click

      }

      function equals(cards) {
          if(cards instanceof Array) {
              if(cards.length >= 2) {
                  let one = cards[0].getAttribute('data-number')
                  let two = cards[1].getAttribute('data-number')



                  if(one == two) {
                      cards[0].style.visibility='hidden'
                      cards[1].style.visibility='hidden'
                      cardsHidden.push(1,1)
                      console.log(cardsHidden)
                      if(cardsHidden.length == 16) {
                          clearInterval(t)
                          if(confirm('jie么厉害，再玩来一次啵')) {
                              location.reload()
                          }

                      }
                  }
                  else {
                      cards[0].setAttribute('data-turn','front')
                      cards[1].setAttribute('data-turn','front')
                      reversal(cards[0])
                      reversal(cards[1])
                  }

                  delCards(cards)

                  //记录点击数


              }
          }


      }


      function addCard(cardl) {
          let turn = cardl.getAttribute('data-turn')

          if(turn == 'front') {
              if(cardsChosen.indexOf(cardl) == -1) {
                  cardsChosen.push(cardl)
                  //console.log(cardsChosen)
              }
          }
      }

    
      function delCards(cards) {
          if(cards instanceof Array) {
              if(cards.length >= 2) {
                  cards.splice(0, 1)
                  cards.splice(0, 1)
              }
          }

          console.log(cardsChosen)
      }

      function reversal(cardl) {
          let turn = cardl.getAttribute('data-turn')
          if(turn =='back') {
              cardl.children[0].style.transform='rotateY(-180deg)'
              cardl.children[1].style.transform='rotateY(0deg)'
              cardl.setAttribute('data-turn', 'front')
          }
          else {
              cardl.children[0].style.transform='rotateY(0deg)'
              cardl.children[1].style.transform='rotateY(180deg)'
              cardl.setAttribute('data-turn', 'back')
          }
      }
