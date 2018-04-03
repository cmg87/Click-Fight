$(document).ready(function() {
    var attack = 8; //set attack equal to 8
    var counterAttack = Math.floor(Math.random()*10)+14; //set the counter attack equal to a random number plus 14
    var isChosen = true;
    var player;
    var opponent;
    
    console.log(counterAttack);

if(isChosen){
    $(".panel").click(function(){  
        $(this).hide(500);
        player = $(this);
        
      
            setTimeout(function(){ 
                $("#header").text("Now Choose Your Oppenent!");
                $(".panel-title").text("Opponent");
            },1000);
    });
    isChosen = false;
}
else{
    $(".panel").click(function(){
        $(this).hide(1000);
        opponent = $(this);

    });
};
console.log(opponent);
console.log(player);

// $(".panel").click(function(){
//     $("#fighter2").hide(1000);
// })

});
