$(document).ready(function() {

    var wins = 0
    var losses = 0

    var randomNumber = Math.floor(Math.random() * 101 + 19);
    console.log(randomNumber);
    $('#randomNumber').text(randomNumber);

    var currentScore = 0;
    console.log(currentScore);
    $('#currentscore').text(currentScore);

    var crystal1 = Math.floor((Math.random() * 12) + 1);
    var crystal2 = Math.floor((Math.random() * 12) + 1);
    var crystal3 = Math.floor((Math.random() * 12) + 1);
    var crystal4 = Math.floor((Math.random() * 12) + 1);
    console.log(crystal1, crystal2, crystal3, crystal4);

    $('#crystal1').on('click', function() {
        currentScore = crystal1 + currentScore;
        $('#currentScore').text(currentScore);
        console.log(currentScore);
        if (currentScore == randomNumber) {
            setTimeout(winner, 1000);
        } else if (currentScore > randomNumber) {
            setTimeout(loser, 1000);
        };
    });

    $('#crystal2').on('click', function() {
        currentScore = crystal2 + currentScore;
        $('#currentScore').text(currentScore);
        console.log(currentScore);
        if (currentScore == randomNumber) {
            setTimeout(winner, 1000);
        } else if (currentScore > randomNumber) {
            setTimeout(loser, 1000);
        };
    });

    $('#crystal3').on('click', function() {
        currentScore = crystal3 + currentScore;
        $('#currentScore').text(currentScore);
        console.log(currentScore);
        if (currentScore == randomNumber) {
            setTimeout(winner, 1000);
        } else if (currentScore > randomNumber) {
            setTimeout(loser, 1000);
        };
    });

    $('#crystal4').on('click', function() {
        currentScore = crystal4 + currentScore;
        $('#currentScore').text(currentScore);
        console.log(currentScore);
        if (currentScore == randomNumber) {
            setTimeout(winner, 1000);
        } else if (currentScore > randomNumber) {
            setTimeout(loser, 1000);
        };
    });

    function winner() {
        wins++;
        alert('You Win!');
        $('#wins').text(wins);
        resetGame();
    };

    function loser() {
        losses++;
        alert("You Lost!");
        $('#losses').text(losses);
        resetGame();
    };

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);
        $('#randomNumber').text(randomNumber);
        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);
        console.log(crystal1, crystal2, crystal3, crystal4)
        currentScore = 0;
        console.log(currentScore);
        $('#currentScore').text(currentScore)
        winLose();
    };
});