class Laun{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }
    

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48, 22, 8);
            if(pointA.x < 220) {
            strokeWeight(0);
            line(pointA.x-0, pointA.y, pointB.x-0, pointB.y);
            
            pop();
            }
            else{

            strokeWeight(0);
            line(pointA.x+0, pointA.y, pointB.x-0, pointB.y);
            
            }
        }
        
    }
    
}