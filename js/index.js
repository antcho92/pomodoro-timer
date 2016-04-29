$(document).ready(function() {
    //sets the starting timer at 25
    $("#timer").text($('#sessionLength').text());
    //experimenting with multiple selectors, having trouble evaluating the string "+"
    $("#increaseSession, #decreaseSession, #increaseBreak, #decreaseBreak").click(function() {
        var modifier = $(this).text();
        if (this == "#increaseSession" || this == "#decreaseSession") {
            var result = $('#sessionLength').text() + modifier + 1;
            $('#sessionLength').text(eval(result));
        } else if (this == '#decreaseBreak' || this == "#increaseBreak") {
            var result = $('#breakLength').text() + modifier + 1;
            $('#breakLength').text(eval(result));
        }
    });

    /*
    //increases the session length by 1 minutes
    $("#increaseSession").click(function() {
        var next = $("#sessionLength").text();
        $("#sessionLength").text(parseInt(next, 10) + 1);
        $("#timer").text($('#sessionLength').text());
    });
    //decreases the session length by 1 minute
    $("#decreaseSession").click(function() {
        var next = $("#sessionLength").text();
        $("#sessionLength").text(parseInt(next, 10) - 1);
        $("#timer").text($('#sessionLength').text());
    });
    //increases the break length by 1 minute
    $("#increaseSession").click(function() {
        var next = $("#sessionLength").text();
        $("#sessionLength").text(parseInt(next, 10) + 1);
        $("#timer").text($('#sessionLength').text());
    });
    //decreases break length by 1 minute
    $("#decreaseSession").click(function() {
        var next = $("#sessionLength").text();
        $("#sessionLength").text(parseInt(next, 10) - 1);
        $("#timer").text($('#sessionLength').text());
    });*/
});
