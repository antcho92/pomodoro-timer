//starts the timer and finds the end time using a new Date object and adding the remining time
function startTimer() {
    var timeRemaining = $('#minutes').text() * 60 * 1000 + $('#seconds').text() * 1000,
        endTime = (new Date()).getTime() + timeRemaining;

    function updateTimer() {
        tNow = new Date();
        timeRemaining = endTime - tNow.getTime();
		//need to change math.floor to round and only get the minutes and seconds by subtracting minutes from the timeremaining
        secs = Math.floor((timeRemaining / 1000) % 60);
        mins = Math.floor((timeRemaining / 1000 / 60) % 60);
        $('#seconds').text(secs);
        $('#minutes').text(mins);
        if (timeRemaining <= 0) {
            clearInterval(timeInterval);
        }
    }
    updateTimer();
    var timeInterval = window.setInterval(updateTimer, 500);
}


$(document).ready(function() {

    //increases the session length by 1 minutes
    $("#increaseSession").on('click', function() {
        $('#mode').text("Session");
        var next = parseInt($("#sessionLength").text(), 10);
        $("#sessionLength").text(next + 1);
        $("#minutes").text($('#sessionLength').text());
    });
    //decreases the session length by 1 minute
    $("#decreaseSession").on('click', function() {
        $('#mode').text("Session");
        var next = parseInt($("#sessionLength").text(), 10);
        $("#sessionLength").text(next - 1);
        $("#minutes").text($('#sessionLength').text());
    });
    //increases the break length by 1 minute
    $("#increaseBreak").on('click', function() {
        $('#mode').text("Break");
        var next = $("#breakLength").text();
        $("#breakLength").text(parseInt(next, 10) + 1);
        $("#minutes").text($('#breakLength').text());
    });
    //decreases break length by 1 minute
    $("#decreaseBreak").on('click', function() {
        $('#mode').text("Break");
        var next = $("#breakLength").text();
        $("#breakLength").text(parseInt(next, 10) - 1);
        $("#minutes").text($('#breakLength').text());
    });

    $('#start').on('click', startTimer);


});
