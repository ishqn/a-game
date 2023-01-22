function preload(){
narutoImage=loadImage("naruto running.gif")
backgroundImage=loadImage("naruto background.gif")
itachiImage=loadImage("naruto-itachi.gif")
obitoImage=loadImage("naruto obstacle obito.png")
sasoriImage=loadImage("naruto-sasori.png")
painImage=loadImage("naruto-painbrother-obstacle.png")
kakuzuImage=loadImage("naruto-akatuski-obstacle.png")
bgImg=loadImage("bg2.jpg")
jumpSound=loadSound("dattebayo.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  naruto=createSprite(windowWidth-900,windowHeight-200,50,50)
  naruto.scale=0.8
  naruto.addImage(narutoImage)

  itachi=createSprite(windowWidth-1200,windowHeight-200,50,50)
itachi.scale=0.6
itachi.addImage(itachiImage)


invGround=createSprite(0,windowHeight-50,windowWidth*2,10)
invGround.visble=false
}

function draw(){
  background("white")
  if(keyDown("space")){
    naruto.velocityY=-10
    jumpSound.play()
  }
  naruto.velocityY+=1
 image(bgImg,0,0,width,height)
  createObstacles()
  naruto.collide(invGround)
drawSprites()
}

function createObstacles(){
  if(frameCount%180===0){
    obstacle=createSprite(windowWidth,windowHeight-200,10,40)
    obstacle.velocityX=-8
    obstacle.scale=0.5
    num=Math.round(random(1,4))
    switch(num){
      case 1:
        obstacle.addImage(sasoriImage)
        break
        case 2: 
        obstacle.addImage(kakuzuImage)
        break
        case 3: 
        obstacle.addImage(obitoImage)
        break
        case 4: 
        obstacle.addImage(painImage)
        break
        default:break
        
    }}}