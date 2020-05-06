class Drop{
    constructor(){
        this.x = Math.round(random(0,width));
        this.y = Math.round(random(0,height));
        this.update();
    }

    draw(){
        if(Math.random()>0.1){
            fill("yellow");
        }
        else{
            fill("red");
        }
        rect(this.x,this.y,10,10);
    }

    update(){
        this.y = this.y + 20;

        if(this.y>height+80){
            this.y = random(0,20);
            this.x = random(0,width);
        }
        this.draw();
    }
};