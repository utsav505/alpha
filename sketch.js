var shoot,ground,rope;

function setup() {
  createCanvas(1200,800);
  shoot =  new Shooter(300,200,30);
  rope =  new Sling(shoot,{x:200,y:210});
}



function draw() {
  background(255,255,255);  
  shoot.display();
  rope.display();
  drawSprites();
}