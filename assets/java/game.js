$(document).ready(function() {



$(".panel").click(function(){
    $("#fighter1").hide(1000);
    $("#header").text("Now Choose Your Oppenent!");
    setTimeout(function(){ 
        $(".panel-title").text("Opponent");
    },1000);

    
});


});