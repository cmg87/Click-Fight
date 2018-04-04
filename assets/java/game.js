$(document).ready(function () {
    var attack = 8; //set attack equal to 8
    var counterAttack = Math.floor(Math.random() * 10) + 14; //set the counter attack equal to a random number plus 14
    var playerChosen = false;
    var opponentChosen = false;
    var player;
    var opponent;

    var fighters = {
        name: ["Scorpion", "Sub Zero", "Smoke", "Reptile"],
        image: ["'assets/images/scorpion.png'", "'assets/images/subzero.png'", "'assets/images/smoke.png'", "'assets/images/reptile.png'"],
        health: [200, 220, 190, 230],
        sound: ['',"'assets/sounds/subzero.mp3'",'','']

    };
    var myobj = fighters.name.length;
    for (i = 0; i < myobj; i++) {
        var newcolumn = $("<div>");
        newcolumn.addClass("col-xs-3 text-center selectable");
        newcolumn.attr("data", fighters.health[i]);
        newcolumn.text(fighters.name[i]);
        newcolumn.append("<br><img src=" + fighters.image[i] + " />" + "<br>" + fighters.health[i] + ":HP");
        $("#firstrow").append(newcolumn);
    }

    $(".selectable").click(function () {
        if (playerChosen === false) {
            $(this).animate({top: '250px'});
            player = $(this);
            playerChosen = true;
            setTimeout(function () {
                $("#header").text("Now Choose Your Oppenent!");    
            }, 500);
        


        }
        else if (playerChosen === true && opponentChosen === false) {
            $(this).animate({top: '250px'});
            opponent = $(this);
            opponentChosen = true;
            setTimeout(function () {
                $("#header").text("Fight!!!"); 
            }, 500);
           
        }

    });






});
