var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        ball.x= ball.x-1;
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.x= ball.x+1;
    }
    else if(keyDown(UP_ARROW)){
        ball.y= ball.y+1;
    }
    else if(keyDown(DOWN_ARROW)){
        ball.y= ball.y-1;
    }
    drawSprites();
}


