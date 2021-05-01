class Form{
    constructor(){
        this.input= createInput("Name");
        this.button= createButton('PLAY');
        this.greeting= createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h2');
        title.html("CAR RACE");
        title.position(670,100); 

        this.input.position(670,300);
        this.button.position(680,360);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
          
            this.greeting.html("hello "+ player.name);
            this.greeting.position(670,300)
        })
    }
}