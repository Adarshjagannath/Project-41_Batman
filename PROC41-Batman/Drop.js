class Drop{
    constructor(x,y,r){
     var options = {
          isStatic : true,
          friction : 0.1
     }

     this.x = x;
     this.y = y;
     this.r = r;

     this.body = Bodies.circle(x, y, r,options);
     this.velocity = random(2,7);

     World.add(world,this.body);

     

    }

    fall(speed){
        this.y+= speed;
    }

    display(){
       
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius);
        pop();

    }
}

function update(){
   
   if(this.rain.position > height ){
       Matter.Body.setPosition(this.rain,{x:RandomSource(0,400),y:(0,400)})
   }

}