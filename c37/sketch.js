var  database;
var gameState=0;
var playerCount;
var form1;
var player1;
var game1;
var gameState=0;


function setup(){
  database = firebase.database();
  
  game1=new game ();
  game1.getState();
  game1.start();
  
  createCanvas(500,500); 


 
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}

