class chain{
    constructor(BodyA,BodyB){
        var options = {
            bodyA:BodyA,
            bodyB:BodyB,
            stiffness:0.04,
            length: 10
        }

        this.string= Matter.Constraint.create(options)
        World.add(world, this.string);

    }

    display(){

        var pointA= this.string.bodyA.position;
        var pointB=this.string.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y )
    }

    
}