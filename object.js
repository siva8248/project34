class obj{
        constructor(x, y, width, height) {
          var options = {
              isStatic: false,
              restitution:0.8,
              friction:0.3,
              density:1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        stroke("black");
        fill("darkgreen");
        rect(pos.x, pos.y,this.width,this.height);
        pop();
}
};