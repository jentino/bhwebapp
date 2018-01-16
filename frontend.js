

$(function () {
    "use strict";

    current_progress = 50;
	//updateDBpbar();
	$("#dynamic")
	.css("width", current_progress + "%")
	.attr("aria-valuenow", current_progress)
	.text(current_progress + "% Profit");

 });