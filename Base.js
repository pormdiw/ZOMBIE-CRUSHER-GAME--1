class Base{
    constructor(x,y,w,h,color,Static){

        var options = {
            isStatic : Static,
        }

        this.b = Bodies.rectangle(x,y,w,h,options)
        this.color = color
        this.w = w
        this.h = h
        World. add(world,this.b)
    }
 show(){

    push()
    translate(this.b.position.x,this.b.position.y)
    rectMode(CENTER)
    fill(this.color)
    rect(0,0,this.w,this.h)
    pop()

 }
}