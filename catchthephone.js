var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var avatar;
var seashell;
var ocean;


function preload() {
  img3 = loadImage('https://samiyahbeary.github.io/finalproject/avatar.png');
  img2 = loadImage('https://samiyahbeary.github.io/finalproject/seashell.png');
  img1 = loadImage('https://samiyahbeary.github.io/finalproject/ocean.jpg');

}

function setup() {
  createCanvas(600, 400);

}

function draw() {
  if(screen == 0){
    startScreen()
  }else if(screen == 1){
    gameOn()
  }else if(screen==2){
    endScreen()
  }  
}

function startScreen(){
    background(96, 157, 255)
    image(img1,0,0,600,500)
    fill(255)
    textAlign(CENTER);
    textSize(25)
    text('Catch the phone!', width / 2, height / 2)
    text('click to start', width / 2, height / 2 + 30);
    reset();
}

function gameOn(){
    imageMode(CENTER);
  image(img1,width/2,height/2,600,500)
      textSize(15)

  text("score = " + score, 50,20)
  rectMode(CENTER)
  // rect(mouseX,height-10,50,30)
  image(img2,mouseX,height-50,70,100)
    image(img3,x,y,60,50)


  y+= speed;
  if(y>height){
    screen =2

   }
  if(y>height-50 && x>mouseX-35 && x<mouseX+35){
    y=-20
    speed+=.5
    score+= 1

  }
  if(y==-20){
    pickRandom();
  }
}

function pickRandom(){
  x= random(20,width-20)
}

function endScreen(){
    background(150)
    textAlign(CENTER);
    text('GAME OVER', width / 2, height / 2)
    text("SCORE = " + score, width / 2, height / 2 + 20)
    text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
  if(screen==0){
    screen=1

  }else if(screen==2){
    screen=0
  }
}

function reset(){
    score=0;
    speed=2;
    y=-20;
}
