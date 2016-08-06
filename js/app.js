function startTimer() {
	var timeRemaining = $('#timer').text().split(':'),
		endTime = new Date().getTime() + parseInt(timeRemaining[0], 10) * 60000;
	updateTimer(timer);
	console.log(endTime);
}

function updateTimer(timer) {
	$('#timer').text(format(timer));
}

function format(timer) {

}

$(document).ready(function () {

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
