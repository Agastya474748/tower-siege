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
        
        
      
    }

    fly(){
        this.slingshot.bodyA = null
    }
    attach(body){
        this.slingshot.bodyA = body;
    }

    display(){
        
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
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