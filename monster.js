class mn{
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
          this.image = loadImage("mon.png");
          World.add(world, this.body);
        }
        display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();
        }
      };