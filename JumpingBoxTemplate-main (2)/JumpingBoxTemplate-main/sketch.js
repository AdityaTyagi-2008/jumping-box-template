var canvas;
var music;
var cube1, cube2, cube3, cube4 ;
var box ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    cube1 = createSprite(100,500,120,80);
    cube1.shapeColor = "orange";

    cube2 = createSprite(250,500,120,80);
    cube2.shapeColor = "green";

    cube3 = createSprite(400,500,120,80);
    cube3.shapeColor = "blue";

    cube4 = createSprite(550,500,120,80);
    cube4.shapeColor = "yellow";
    

    box = createSprite(325,446,30,30);
    box.shapeColor = "black";
    
    music.addSound = ("music.mp3",music);
    music.stop();

}

function draw() {
    background("white");

    drawSprites();

    if(box.isTouching(cube4)){
        box.shapeColor = cube4.shapeColor;
    }
    
    if(box.isTouching(cube3)){
        box.shapeColor = "blue";
        music.play();
    }
    
    if(box.isTouching(cube2)){
        box.shapeColor = "green";
        music.play();
    }
    
    if(box.isTouching(cube1)){
        box.shapeColor = "orange";
        music.play();
    }
    
    if(keyDown("LEFT_ARROW")){
        box.x = box.x - 10;
        music.play();
    }
    if(keyDown("RIGHT_ARROW")){
        box.x = box.x + 10;
        music.play();
    }

    text("Press LEFT Arrow key to move the black box towards left side",180,250);
    text("Press RIGHT Arrow key to move the black box towards right side",180,270);

}
