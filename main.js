var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_objects="";
var block_imageObject="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_objects=Img;
        
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_imageObject=Img;

        block_imageObject.scaleToWidth(block_width);
        block_imageObject.scaleToWidth(block_height);
        block_imageObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imageObject);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey== true && keyPressed=='80'){
        console.log("p and shift pressed together.");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed=='77'){
        console.log("m and shift pressed together.");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
}
if(keyPressed=='38')
{
    Up();
    console.log("up");
}
if(keyPressed='40');
{
    Down();
    console.log("down");
}
if(keyPressed='37');
{
    Left();
    console.log("left");
}
if(keyPressed='39');
{
    Right();
    console.log("right");
}
if(keyPressed='87');
{
    new_image("wall.jpg");
    console.log("w");
}
if(keyPressed='71');
{
    new_image("ground.png");
    console.log("g");
}
if(keyPressed='76');
{
    new_image("light_green.png");
    console.log("l");
}
if(keyPressed='84');
{
    new_image("trunk.jpg");
    console.log("t");
}
if(keyPressed='82');
{
    new_image("roof.jpg");
    console.log("r");
}
if(keyPressed='89');
{
    new_image("yellow_wall.png");
    console.log("y");
}
if(keyPressed='68');
{
    new_image("dark_green.png");
    console.log("d");
}
if(keyPressed='85');
{
    new_image("unique.png");
    console.log("u");
}
if(keyPressed='67');
{
    new_image("cloud.jpg");
    console.log("c");
}
}

function Up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block_image_height"+block_height);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block_image_height"+block_height);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("block_image_width"+block_width);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_image_width"+block_width);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}