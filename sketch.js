var bow , arrow,  scene;
var bowImage, arrowImage
var arowgroup;
var score2=100;
var score1=100
var gun,guni
var b,bi
var bb,bii
var gamestate
var start
var play
var end
var g
var gg
var pw1
var pi1
var pw2
var pi1
function preload(){
 pi1=loadImage("p1w.png")
   pi2=loadImage("p2w.png")
  backgroundImage = loadImage("arena.jpeg");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  bi=loadImage("bu-1.png")
  guni=loadImage("gun-png.png")
  bii=loadImage("bbbb.jpeg")
  
}
function setup() {
  createCanvas(1000,600);
pw1=createSprite(300,300,10,10)
  pw1.addImage(pi1)
  pw1.scale=0.5 
  pw2=createSprite(300,300,10,10)
  pw2.addImage(pi2)
  pw2.scale=0.5
  //creating background
  scene = createSprite(340,300,400,400);
  scene.addImage(backgroundImage);
  scene.visible=false
  scene.scale = 1.5
  bb=createSprite(500,310,10,10)
  bb.addImage(bii)
  bb.scale=1.7
 pw1.visible=false
  pw2.visible=false
  // creating bow to shoot arrow
 bow = createSprite(880,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
    gun=createSprite(60,100,20,20)
  gun.addImage(guni)
gun.scale=0.08
score = 0  
redb=new Group()
pinkb=new Group()
blueb=new Group()
grenb=new Group()
arowgroup=new Group()
bull=new Group()
}
function draw(){
  background("white");
  
 
    if(keyDown("space")){
    gamestate=play
      bb.x=77768786    
  }
  if(gamestate===play){
    scene.visible=true
  
    if(keyDown("l")){
  createa()
}
if(keyDown("w")){
gun.y=gun.y-10
}
if(keyDown("s")){
    gun.y=gun.y+10
  }
if(keyDown("enter")){
    createaa()
}
if(score1===0){
  scene.x=764768534768
    bb.x=897435879458907345
  pw1.visible=true
}
if(score2===0){
  scene.x=764768534768
    bb.x=897435879458907345
  pw2.visible=true
}
if(keyDown("g")){
     scene.x=340
    pw2.visible=false
    pw1.visible=false
    bb.x=300
     score1=100
     score2=100
   }
if(gun.y>600||gun.y<0){
  gun.y=300
}
if(bow.y>600||bow.y<0){
 bow.y=300
}
if(keyDown("p")){
bow.y=bow.y-10
}
if(keyDown("o")){
bow.y=bow.y+10
}
if (keyDown("shift")) {
  
     createArrow();
   
   
    
  }
if (keyDown("q")) {
 
      createbullets()
}
if(bull.isTouching(bow)){
   score1=score1-1
  }
if(arowgroup.isTouching(gun)){
      score2=score2-1
      }
if(keyDown("d")){
createbu()
 
  bull.velocityX=-5
}
if(keyDown("a")){
    createb()
  }
drawSprites();
text("health: "+ score2, 100,50);
text("health: "+ score1, 400,50);
text("player1",100,60)
text("player2",420,60)
  }

}
function createArrow() {
  var arrow= createSprite(300, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 540;
  arrow.y=bow.y;
  arrow.velocityX = -7         ;
  arrow.lifetime=600
  arrow.scale = 0.3;
   arowgroup.add(arrow)
}
function createbullets() {
  var bulet= createSprite(300, 100, 10, 10);
 
 bulet.x = 100;
 bulet.y=gun.y;
 bulet.velocityX =7          ;
  bulet.addImage(bi)
bulet.scale=0.09
   bull.add(bulet)
   bulet.lifetime=600
 }
function createbu() {
  var bulet= createSprite(300, 100, 10, 10);
 
 bulet.x = 100;
 bulet.y=gun.y;
 bulet.velocityX =7   ;
  bulet.velocityY=5
  bulet.addImage(bi)
bulet.scale=0.09
   bull.add(bulet)
   bulet.lifetime=600
 }
function createb() {
  var bulet= createSprite(300, 100, 10, 10);
 
 bulet.x = 100;
 bulet.y=gun.y;
 bulet.velocityX =7   ;
  bulet.velocityY=-5
  bulet.addImage(bi)
bulet.scale=0.09
   bull.add(bulet)
   bulet.lifetime=600
 }
function createa() {
  var arrow= createSprite(300, 100, 10, 10);
 
arrow.x = 520;
 arrow.y=bow.y;
arrow.velocityX =-7   ;
  arrow.velocityY=-5
arrow.addImage(arrowImage)
arrow.scale=0.3
   arowgroup.add(arrow)
   
 }
function createaa() {
  var arrow= createSprite(300, 100, 10, 10);
 
arrow.x = 520;
 arrow.y=bow.y;
arrow.velocityX =-7   ;
  arrow.velocityY=5
arrow.addImage(arrowImage)
arrow.scale=0.3
   arowgroup.add(arrow)
  arrow.lifetime=600
 }
