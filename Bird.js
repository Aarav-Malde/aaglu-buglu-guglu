class Bird extends Base {
    constructor(x, y) {
      super(x,y,50,50)


      this.Image=loadImage("sprites/bird.png")
    };
    display(){
      
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();

    };
  };
  