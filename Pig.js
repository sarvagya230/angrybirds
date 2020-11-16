class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255

  }
  display()
  {
    //console.log(this.body.speed)
    if ((this.body.speed<1.7)||(frameCount<30))
    super.display()

    else 
    {
    World.remove(world,this.body)
    this.visibility=this.visibility-5
    push()
    tint(255,this.visibility)
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
    }
  }
  calculate_score()
     {
       if(this.visibility<0&&this.visibility>-300)
       {
         score++
       }

     }


  

};