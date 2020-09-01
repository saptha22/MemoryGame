let play = document.querySelector("#start")

var playing = false
//card options
var level = 1
let level1 = document.querySelector("#l1")
let level2 = document.querySelector("#l2")
let level3 = document.querySelector("#l3")
let level4 = document.querySelector("#l4")
let level5 = document.querySelector("#l5")

// array to keep on adding at each level
var levelAdd =[{
  name: 'fries',
  img: 'images/fries.png'
},
{
  name: 'cheeseburger',
  img: 'images/cheeseburger.png'
},
{
  name: 'ice-cream',
  img: 'images/ice-cream.png'
},
{
  name: 'pizza',
  img: 'images/pizza.png'
},
{
  name: 'milkshake',
  img: 'images/milkshake.png'
},
{
  name: 'hotdog',
  img: 'images/hotdog.png'
}]

var cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
const cardsWon = []

var cmt = document.querySelector("#comments")

//create your board
function createBoard() {
  
  if(!playing){
    playing = true
    cardArray.sort(() => 0.5 - Math.random())
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  else{
    //var cmt = document.querySelector("#comments")
    cmt.textContent = "Finish this game first!"
    setTimeout(blank , 500)
  }
  
}

function blank(){
  cmt.textContent = "Select!"
}
//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  same_img =false
  var i =0
  for(i=1 ; i<cardsChosenId.length ; i++){
    if(cardsChosenId[i] === optionOneId){
      same_img = true
      break
    }
  }

  match = true
  var i =0
  const optionOne = cardsChosen[0]
  for(i=1 ; i<cardsChosen.length ; i++){
    if(cardsChosen[i] === optionOne){
      match = true
    }
    else{
      match = false
      break
    }
  }
  if(same_img) {
    for(i=0 ; i<cardsChosenId.length ; i++){
      var id =cardsChosenId[i]
      cards[id].setAttribute('src', 'images/blank.png')
    }
    //var cmt = document.querySelector("#comments")
    cmt.textContent = "You selected same image"
    setTimeout(blank , 500)
  }
  else if (match) {
    //var cmt = document.querySelector("#comments")
    cmt.textContent = "Match!"
    setTimeout(blank , 500)
    for(i=0 ; i<cardsChosen.length ; i++){
      var id =cardsChosenId[i]
      cards[id].setAttribute('src', 'images/white.png')
      cards[id].removeEventListener('click', flipCard)
    }
    
    cardsWon.push(cardsChosen)
  } else {
    for(i=0 ; i<cardsChosenId.length ; i++){
      var id =cardsChosenId[i]
      cards[id].setAttribute('src', 'images/blank.png')
    }
    //var cmt = document.querySelector("#comments")
    cmt.textContent = "Wrong!"
    setTimeout(blank , 500)
  }
  cardsChosen = []
  cardsChosenId = []
  //resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/(level+1)) {
    
    cmt.textContent = "Congrats! You found them all!"
    setTimeout(refresh , 5000)
    playing = false

  }
}

//refresh page
function refresh(){
  location.reload()
}
//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === level+1) {
    console.log(cardsChosen)
    setTimeout(checkForMatch, 500+(level*50))
  }
}

function selectLevel1(){
  var i = 1
  level = 1
  if(!playing){
    for(i = 1; i<level;i++){
      cardArray = cardArray.concat(levelAdd)
    }
    resultDisplay.textContent = level +" : Select "+ (level+1) +" same images"
    cmt.textContent = "Start Playing!"
  }
}

function selectLevel2(){
  var i = 1
  level = 2
  if(!playing){
    for(i = 1; i<level;i++){
      cardArray = cardArray.concat(levelAdd)
    }
    resultDisplay.textContent = level +" : Select "+ (level+1) +" same images"
    cmt.textContent = "Start Playing!"
  }
}
function selectLevel3(){
  var i = 1
  level = 3
  if(!playing){
    for(i = 1; i<level;i++){
      cardArray = cardArray.concat(levelAdd)
    }
    resultDisplay.textContent = level +" : Select "+ (level+1) +" same images"
    cmt.textContent = "Start Playing!"
  }
}
function selectLevel4(){
  var i = 1
  level = 4
  if(!playing){
    for(i = 1; i<level;i++){
      cardArray = cardArray.concat(levelAdd)
    }
    resultDisplay.textContent = level +" : Select "+ (level+1) +" same images"
    cmt.textContent = "Start Playing!"
  }
  
}
function selectLevel5(){
  var i = 1
  level = 5
  if(!playing){
    for(i = 1; i<level;i++){
      cardArray = cardArray.concat(levelAdd)
    }
    resultDisplay.textContent = level +" : Select "+ (level+1) +" same images"
    cmt.textContent = "Start Playing!"
  }
}

play.addEventListener('click',createBoard )
level1.addEventListener('click',selectLevel1)
level2.addEventListener('click',selectLevel2)
level3.addEventListener('click',selectLevel3)
level4.addEventListener('click',selectLevel4)
level5.addEventListener('click',selectLevel5)

