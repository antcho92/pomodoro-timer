//will hold the time that the timer should end
var endTime;
//will hold the function for setInterval and allow for stoppage in the stop function
var timeInterval;

//starts the timer and finds the end time using a new Date object and adding the remining time
function startTimer() {
    //Sets the time remaining in the clock based on the minutes/seconds that are currently in the timer
    var timeRemaining = $('#minutes').text() * 60 * 1000 + $('#seconds').text() * 1000;
    //sets the endTime by adding the time remaining to the current time
    endTime = (new Date()).getTime() + timeRemaining;
    //updates the timer immediately
    updateTimer();
    timeInterval = window.setInterval(updateTimer, 200);
}

//function to update the look of the timer in browser
function updateTimer() {
    tNow = new Date();
    //calculated the time remaining based on the given endTime
    timeRemaining = endTime - tNow.getTime();
    //Calculated the minutes remaning by finding only the whole number of minutes in timeRemaining
    mins = Math.floor(timeRemaining / 1000 / 60);
    //subtracts the minutes from timeRemaining in order to calculate the seconds.
    secs = Math.floor((timeRemaining - mins * 1000 * 60) / 1000);
    $('#seconds').text(pad(secs));
    $('#minutes').text(pad(mins));
    if (timeRemaining <= 0) {
        clearInterval(timeInterval);
    }
}

//pads things less than 2 to have a 0 in front
function pad(val) {
    return ('00' + val).slice(-2);
}

function pauseTimer() {
    clearInterval(timeInterval);
}

function resetTimer() {
    pauseTimer();
    $('#seconds').text(pad(00));
    if ($('#mode').text() == "Session") {
        $('#minutes').text(pad($('#sessionLength').text()));
    } else {
        $('#minutes').text(pad($('#breakLength').text()));
    }
}

$(document).ready(function() {

    //increases the session length by 1 minutes
    $("#increaseSession").on('click', function() {
        $('#mode').text("Session");
        var next = parseInt($("#sessionLength").text(), 10);
        $("#sessionLength").text(next + 1);
        $("#minutes").text(pad($('#sessionLength').text()));
    });
    //decreases the session length by 1 minute
    $("#decreaseSession").on('click', function() {
        $('#mode').text("Session");
        var next = parseInt($("#sessionLength").text(), 10);
        $("#sessionLength").text(next - 1);
        $("#minutes").text(pad($('#sessionLength').text()));
    });
    //increases the break length by 1 minute
    $("#increaseBreak").on('click', function() {
        $('#mode').text("Break");
        var next = $("#breakLength").text();
        $("#breakLength").text(parseInt(next, 10) + 1);
        $("#minutes").text(pad($('#breakLength').text()));
    });
    //decreases break length by 1 minute
    $("#decreaseBreak").on('click', function() {
        $('#mode').text("Break");
        var next = $("#breakLength").text();
        $("#breakLength").text(parseInt(next, 10) - 1);
        $("#minutes").text(pad($('#breakLength').text()));
    });

    $('#start').on('click', startTimer);
    $('#pause').on('click', pauseTimer);
    $('#reset').on('click', resetTimer);

});
