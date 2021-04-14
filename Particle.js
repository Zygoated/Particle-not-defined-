class Particle{
    constructor(x,y){
        var options={
            restitution:0.7,
            friction:1,
            density:1
        }

        this.body=Bodies.Matter.circle(x,y,10,options);
        this.width=10;
        this.height=10;
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        circle(0,0,this.width,this.height,this.color);
        pop();

    }





}