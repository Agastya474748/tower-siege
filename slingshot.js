class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        this.pointB = pointB
        World.add(world, this.sling);
      
    }

    fly(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            fill(48,22,8)

            if(pointA.x<220){
                line(pointA.x - 20, pointA.y , pointB.x+30, pointB.y);
                line(pointA.x - 20, pointA.y , pointB.x-10, pointB.y);
            }
            
pop();
        }
    }
    
}