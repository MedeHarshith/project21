var wall;
var thickness;
var bullet;
var speed;
var weight;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52)

  thickness=random(22,83);
  wall.createSprite(1200200,thickness,height);


}

function draw() {
  background(255,255,255);  

  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5* weight * speed* speed/(thickness *thinkness);

    if (damage>10) {
      wall.shapeColor=colr(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor=color(0,255,0);

    }

  }









  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge= 1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false;
}


