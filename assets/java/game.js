$(document).ready(function() {
    var attack = 8; //set attack equal to 8
    var counterAttack = Math.floor(Math.random()*10)+14; //set the counter attack equal to a random number plus 14
    var isChosen = true;

    
    console.log(counterAttack);

if(isChosen){
    $(".panel").click(function(){  
        $(this).hide(1000);
        
      
            setTimeout(function(){ 
                $("#header").text("Now Choose Your Oppenent!");
                $(".panel-title").text("Opponent");
            },1000);
    });
}


// $(".panel").click(function(){
//     $("#fighter2").hide(1000);
// })

});
