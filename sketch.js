
var thickness, wall;
var bullet, speed, weight;

function setup() {
  var canvas= createCanvas(800,400);
  //canvas.shapeColor=color()
  speed=random(200,300);
  weight=random(30,52);
  thickness=random(22,80);
  wall=createSprite(750,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor= "white"
}


function draw() {
  background(0,0,0); 
  bullet.velocityX=speed;

  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/thickness*thickness;
  } 

  if(damage>10)
{
bullet.shapeColor=color(255,0,0);
}


if(damage<10) 
{
bullet.shapeColor=color(0,255,0);
}

drawSprites();
}



function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
 return true
  }
  return false;
}
