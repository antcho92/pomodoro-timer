function doTimer(length, resolution, oninstance, oncomplete) {
	var steps = (length / 100) * (resolution / 10),
		speed = length / steps,
		count = 0,
		start = new Date().getTime();

	function instance() {
		if (count++ == steps) {
			oncomplete(steps, count);
		} else {
			oninstance(steps, count);

			var diff = (new Date().getTime() - start) - (count * speed);
			window.setTimeout(instance, (speed - diff));
		}
	}

	window.setTimeout(instance, speed);
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

	$('#start').on('click', startTimer);


});
