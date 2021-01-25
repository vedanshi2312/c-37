class form{

    constructor(){

    }
display(){
    var title=createElement('h2');
    title.html("car racing game")
    title.position(500,100)
    var input=createInput("name")
    input.position(500,300)
    var button =createButton("play")
    button.position(500,350)
    var greeting=createElement('h2');
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount+=1;
        player1.update(name)
        player1.updateCount(playerCount)
        greeting.html("hello "+name)
        greeting.position(550,150)
    })
}
}