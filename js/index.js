function startTimer() {
    var start = new Date().getTime(),
    time = $('#timer').text(),
    elapsed = '0.0';
    function instance() {
        time += 100;
        elapsed = Math.floor(time/100)/10;
        if(Math.round(elapsed) == elapsed) {
            elapsed += '.0';
        }

    }
}



$(document).ready(function () {
	//sets the starting timer at 25
	$("#timer").text($('#sessionLength').text());
	//experimenting with multiple selectors, having trouble evaluating the string "+"
	/*$("#increase").click(function() {
	    var modifier = $(this).text();
	    if (this == "#increaseSession" || this == "#decreaseSession") {
	        var result = $('#sessionLength').text() + modifier + 1;
	        $('#sessionLength').text(eval(result));
	    } else if (this == '#decreaseBreak' || this == "#increaseBreak") {
	        var result = $('#breakLength').text() + modifier + 1;
	        $('#breakLength').text(eval(result));
	    }
	}); */

	//increases the session length by 1 minutes
	$("#increaseSession").on('click', function () {
		$('#mode').text("Session");
		var next = parseInt($("#sessionLength").text(), 10);
		$("#sessionLength").text(next + 1);
		$("#timer").text($('#sessionLength').text());
	});
	//decreases the session length by 1 minute
	$("#decreaseSession").on('click', function () {
		$('#mode').text("Session");
		var next = parseInt($("#sessionLength").text(), 10);
		$("#sessionLength").text(next - 1);
		$("#timer").text($('#sessionLength').text());
	});
	//increases the break length by 1 minute
	$("#increaseBreak").on('click', function () {
		$('#mode').text("Break");
		var next = $("#breakLength").text();
		$("#breakLength").text(parseInt(next, 10) + 1);
		$("#timer").text($('#breakLength').text());
	});
	//decreases break length by 1 minute
	$("#decreaseBreak").on('click', function () {
		$('#mode').text("Break");
		var next = $("#breakLength").text();
		$("#breakLength").text(parseInt(next, 10) - 1);
		$("#timer").text($('#breakLength').text());
	});

	$('#start').on('click', function () {

	});


});
