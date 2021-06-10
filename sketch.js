var db, food
var dog,dogImg
var gameState = 1
function preload() {
  dogImg = loadImage("images/Dog.png")
  dogHappy = loadImage("images/happydog.png")
  livingRoom = loadImage("images/Living Room.png")
  bathroom= loadImage("images/washroom.png")
  bedroom = loadImage("images/Bed Room.png")
  garden = loadImage("images/Garden.png")
  milkImg = loadImage("images/milk.png")
}

function setup(){
  createCanvas(500,500)
  db = firebase.database()

  dog = createSprite(200,200,100,100)
  dog.addImage(dogImg)
  dog.scale=0.3

  milk = createSprite(170,410,50,50)
  milk.addImage(milkImg)
  milk.scale=.04
  milk.visible=false 

  //to read value of milk
  var ref = db.ref("food")
  ref.on("value",readFood)

  form = new Form()
  form.display()
}

function readFood(data) {
  food = data.val()

}

function draw() {
  background("lightgreen")
  
  console.log(food)
  if(gameState === 0){
    textSize(30)
    fill("blue")
    text("say hi to my virtual pet DAISY\n     she loves to drink milk, \n if she isn't fed, she gets sad.\n  remember to feed her and\n       refil the milk stock\n       she loves to play\n        loves bath time", 50,140)
    dog.x= 420
    dog.y=370
    dog.visible= true
  }
  
  if(gameState === 1){
    //feed dog
    background("pink")
    dog.visible= true
    milk.visible= true
    dog.x= 250
    dog.y=240
    dog.addImage(dogHappy)
    textSize(25)
    fill("blue")
    text("milk left : " + food,190,420)
  }

  else if(gameState === 2){
    //add food
    background("yellow")
    dog.visible= true
    milk.visible= true
    dog.x= 250
    dog.y=240
    dog.addImage(dogImg)
    textSize(25)
    text("milk left : " + food,190,420)
  }

  else if(gameState === 3){
    //bath
    background(bathroom)
    dog.visible= false
    milk.visible=false
  }

  else if(gameState === 4){
    //sleep
    background(bedroom)
    dog.visible= false
    milk.visible=false
  }

  else if(gameState === 5){
    //play
    background(livingRoom)
    dog.visible= false
    milk.visible=false
  }

  else if(gameState === 6){
    //play in park
    background(garden)
    dog.visible= false
    milk.visible=false
  }

  drawSprites()
  textSize(30)
  if(food <2){
    textSize(50)
    fill("red")
    text("Add food for dog!", 0,250)
    dog.visible= false
    milk.visible=false
  }

}


