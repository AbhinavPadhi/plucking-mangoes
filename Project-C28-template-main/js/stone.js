class Stone{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);

        this.image= loadImage("Plucking mangoes/stone.png");


    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x-50,pos.y-50);
        ellipseMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r);

        pop()
    }
}