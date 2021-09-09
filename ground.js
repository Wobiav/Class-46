class Ground{
    constructor(x, y, w, h){
        var options = {
            isStatic: true,
            
        }

        this.body = Bodies.rectangle(x, y, w, h, options );

        this.w = w;
        this.h = h;
        
        World.add(moonWorld, this.body);
    }

    display(){
        var pos = this.body.position

        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h)
        this.body.visibility = 0;
        pop();
    }
}