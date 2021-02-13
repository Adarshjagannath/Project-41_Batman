class Umbrella{
    constructor(x,y,r){
     var options = {
     isStatic : true
     }

     this.r = r;
     this.body = Bodies.circle(x, y, r, options);
     this.image = loadImage("bat.png");
     World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        this.visiblity = 0;
        pop();
    }
}


