// 'use strict'

$(function () {
    current_progress = 19;
	//updateDBpbar();
	$("#dynamic")
	.css("width", current_progress + "%")
	.attr("aria-valuenow", current_progress)
	.text(current_progress + "% Profit");

 });