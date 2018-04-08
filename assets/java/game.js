var fighters = {
    name: ["Scorpion", "Sub Zero", "Smoke", "Reptile"],
    image: ["'assets/images/scorpion.png'", "'assets/images/subzero.png'", "'assets/images/smoke.png'", "'assets/images/reptile.png'"],
    health: [200, 220, 190, 230],
};
var attack = 0;
var counterAttack = function(){
   return Math.floor(Math.random() * 20) + 5; 
};//set the counter attack equal to a random number
var playerChosen = false;
var opponentChosen = false;
var player = 0;
var opponent = 0;
var defeated = 0;

$(document).ready(function () {


    var myobj = fighters.name.length;
    for (i = 0; i < myobj; i++) {
        var newcolumn = $("<div>");
        newcolumn.addClass("col-xs-3 text-center selectable");
        newcolumn.attr("data", fighters.health[i]);
        newcolumn.text(fighters.name[i]);
        newcolumn.append("<br><img class='img-responsive center-block' src=" + fighters.image[i] + " />" + "<p>" + fighters.health[i] + ":HP</p>");
        $("#firstrow").append(newcolumn);
    }

    $("body").on("click",".selectable",function () {
        if (playerChosen === false) {
            $(this).animate({top: '250px'});
            player = $(this).attr("data");
            $(this).find("p").addClass("player");
            playerChosen = true;
            $(this).removeClass("selectable");
            setTimeout(function () {
                $("#header").text("Now Choose Your Oppenent!");    
            }, 500);
            var button = $("<button>");
            button.text("attack");
            button.addClass("btn-danger attackbtn");
            $(this).append(button);


        }
        else if (playerChosen === true && opponentChosen === false) {
            $(this).animate({top: '250px'});
            opponent = $(this).attr("data");
            opponentChosen = true;
            $(this).addClass("playerToDefeat");
            $(this).removeClass("selectable");
            $(this).find("p").addClass("opponent");
            setTimeout(function () {
                $("#header").text("Fight!!!"); 
            }, 500);
           
        }


    });

    $("body").on("click", ".attackbtn",function(){
        attack += 8;
        player = player - counterAttack();
        opponent = opponent - attack;
        $(".player").text(player+":HP");
        $(".opponent").text(opponent+":HP");
        $("#header").text("You Delt "+attack+" damage and received "+counterAttack()+" damage!");
        if(player <=0){
            $("#header").text("You have lost the game!");
            setTimeout(function(){
                location.reload();
            },3000);
        }
        else if(opponent <= 0  && defeated < 2){
            defeated++;
            opponentChosen = false;
            $("#header").text("You have defeated your enemy! Chose another!");
            setTimeout(function(){
                $(".playerToDefeat").hide(200);
            }, 500);
        }
        else if(opponent <=0 && defeated >= 2){
            $("#header").text("You have vanquished your enemies and won the game!");
            $(".playerToDefeat").hide(200);
            setTimeout(function(){
                location.reload();
            },3000);
        }
    });




});
