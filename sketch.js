var player, animals, hitmen, boxes, gem, ground
var men1,men2,men3,men4,men5
var animal1,animal2,animal3,animal4
var box1,box2,box3,box4
var animalimg1, animaimg2,animalimg3,animaimg4
var gameState=0
var dudeimg1,dudeimg2,dudeimg3,dudeimg4,dudeimg5,dudeimg6,dudeimg7,dudeimg5,dudeimg9,dudeimg10
var dude_running
var backgroundimg
var gameoverimg
var gemimg
var men1img,men2img,men3img,men4img,men5img
var box1img,box2img,box3img,box4img
function preload(){
animalimg1 = loadImage("animal1.png")
animalimg2 = loadImage("animal2.png")
animalimg3 = loadImage("animal3.png")
animalimg4 = loadImage("animal4.png")

men1img = loadImage("men1.png")
men2img = loadImage("men2.png")
men3img = loadImage("men3.png")
men4img = loadImage("men4.png")
men5img = loadImage("men5.png")

box1img = loadImage ("present.png")
box2img = loadImage ("present.png")
box3img = loadImage ("present.png")
box4img = loadImage ("present.png")

dude_running = loadAnimation ("dude1.png","dude2.png","dude3.png","dude4.png","dude5.png","dude6.png","dude7.png","dude8.png","dude9.png","dude10.png")

backgroundimg = loadImage("jungle1.jpg")

gameoverimg = loadImage("gameover1.jpg")

gemimg = loadImage ("gem.png")

}



function setup() {
  createCanvas(1500,displayHeight);
  
  player= createSprite (0,displayHeight-60,20,20)

  ground = createSprite (750,displayHeight-50,30000,40)

  player.addAnimation("running",dude_running)
  player.scale= 0.3

  men1= createSprite (random(100,300),displayHeight-80,70,70)
  men1. addImage ("men image", men1img)
  men1.scale=0.2
  men2= createSprite (random (3000,5000),displayHeight-80,70,70)
  men2. addImage ("men image2", men2img)
  men2.scale=0.1
  men3= createSprite (random (7000,10000),displayHeight-80,70,70)
  men3. addImage ("men image3", men3img)
  men3.scale=0.1
  men4= createSprite (random (12000,15000),displayHeight-80,70,70)
  men4. addImage ("men image4", men4img)
  men4.scale=0.1
  men5= createSprite (random (20000,25000),displayHeight-80,70,70)
  men5. addImage ("men image5", men5img) 
  men5.scale=0.1


  animal1=createSprite (random (500,700),displayHeight-90,100,100) 
  animal1. addImage ("animal image",animalimg1)
  animal1.scale=0.3
  animal2=createSprite (random (2000,2500),displayHeight-90,100,100) 
  animal2. addImage ("animal image2",animalimg2)
  animal2.scale=0.1
  animal3=createSprite (random (6000,9000),displayHeight-90,100,100) 
  animal3. addImage ("animal image3",animalimg3)
  animal3.scale=0.1
  animal4=createSprite (random (16000,19000),displayHeight-90,100,100) 
  animal4. addImage ("animal image4",animalimg4)
  animal4.scale=0.3

  

  box1=createSprite (random (600,800),displayHeight-60,150,150) 
  box1. addImage ("box image",box1img)
  box1.scale=0.03
  box2=createSprite (random (1500,2300),displayHeight-60,150,150) 
  box2. addImage ("box image2",box2img)
  box2.scale=0.03
  box3=createSprite (random (12500,16700),displayHeight-60,150,150)
  box3. addImage ("box image3",box3img)
  box3.scale=0.03
  box4=createSprite (random (21400,23200),displayHeight-60,150,150)
  box4. addImage ("box image4",box4img) 
  box4.scale=0.03
  
  gem= createSprite (30000,displayHeight-60,150,150)
  gem. addImage ("gem image",gemimg)
  ground.visible=false



  box1.shapeColor="red"
  box2.shapeColor="red"
  box3.shapeColor="red"
  box4.shapeColor="red"
}

function draw() {
 background(backgroundimg);


if (gameState===0) {
  //assigning camera position to the player 

camera.position.x=player.x
//camera.position.y=player.y


 
// jump, going right, going left 
if(keyDown("d")){
  player.x= player.x+10
}




if(keyDown("w") || touches.length>0 && player.y>=90 ) {
  player.velocityY = -15;
  touches=[]
}

player.velocityY = player.velocityY + 0.8
player.collide(ground);
5
if (player.isTouching (animal1)||player.isTouching (animal2)||player.isTouching (animal3)||player.isTouching (animal4))
{
gameState=1


}}


if (player.isTouching(box1)||player.isTouching(box2)||player.isTouching(box3)||player.isTouching(box4)){
  player.velocityY = -20
}


if (gameState === 1)
{
  image (gameoverimg,player.x,player.y-100,200,200)
player.X=0
player.y=100

animal1.destroy()
animal2.destroy()
animal3.destroy()
animal4.destroy()

men1.destroy()
men2.destroy()
men3.destroy()
men4.destroy()
men5.destroy()

box1.destroy()
box2.destroy()
box3.destroy()
box4.destroy()


}


if (player.isTouching(gem)) {
  gameState= 2 
}

if (gameState === 2) {
  camera.position.x=0
  camera.position.y=0

text("Congratulations You Won The Game",200,displayHeight/2)


player.destroy()
  animal1.destroy()
animal2.destroy()
animal3.destroy()
animal4.destroy()

men1.destroy()
men2.destroy()
men3.destroy()
men4.destroy()
men5.destroy()

box1.destroy()
box2.destroy()
box3.destroy()
box4.destroy()
}





  drawSprites();
}


