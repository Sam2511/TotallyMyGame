var a,b;
var v,l;
var s,d;

function preload()
{
	a = loadImage("lol.jpg");
	v = loadImage("victory.jpg")
	s = loadImage("yes.jpg");
}

function setup() {
	createCanvas(1250, 500);


	b = createSprite(150,150);
	b.addImage(a);
	
	

	

	
}


function draw() {
  background("Blue");
  if(frameCount%50 === 0){
	l = createSprite(1000,80);
	l.addImage(v);
	l.scale = 0.1;
	}

	if(frameCount%100 === 0){
		d = createSprite(1000,380);
		d.addImage(s);
		d.scale = 1.2;
		}

		if(frameCount%100 === 0){
			d = createSprite(500,380);
			d.addImage(s);
			d.scale = 1.2;
			}


if(frameCount%10 === 0){
  fill("RED");
  textSize(60);
  text("HAPPY APRIL FOOLS DAY", 425,250);
}

  
  drawSprites();
 
}



