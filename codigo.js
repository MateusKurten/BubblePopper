var bubble;
var d;
var contador = 0;
var popped = new Audio('pop.mp3');
let img;

function preload(){
    img = loadImage('images/popped.png');
}

function setup(){
    createCanvas(800,600);
    background(255);
    var x = 50 + Math.random()*700;
    var y = 50 + Math.random()*500;
    bubble = new Bubble(x, y);
    bubble.mostrar();
}

function draw(){
    bubble.flutuar();
    bubble.mostrar();
}

function mousePressed(){
    bubble.estourar();
    noLoop();
}

function mouseReleased(){
    clear();
    loop();
}

// Class Bubble

class Bubble{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    flutuar(){ 
        clear();
        this.x += random(2,-2);
        this.y += random(2,-2);
    }

    mostrar(){
        stroke("black");
        strokeWeight(4);
        ellipse(this.x, this.y, 50, 50);
    }
    
    estourar(){
        d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 25){
            popped.play();
            clear();
            image(img, this.x, this.y, 50, 50);
            this.x = 50 + Math.random()*700;
            this.y = 50 + Math.random()*500;
            contador += 1;
            document.getElementById("contador").innerHTML = "Bubbles popped: " + contador;
    }
}
}
