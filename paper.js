class paper {

    constructor(x,y,raidus){

        var options ={
            isStatic : false,
            resitution : 0.3,
            friction : 0.5,
            density : 1.2


        }
        this.body = Bodies.circle(x,y,raidus,options)
        
        this.raidus = raidus;
        

        World.add(world, this.body);

    }

    display(){


        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //ellipseMode(CENTER);

        fill(255);
        ellipse(0, 0, this.raidus);
        pop();


    }

}