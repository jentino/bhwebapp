// 'use strict'

$(function () {
	var globalone = "HELLO WORLDIE";
    current_progress = 89;
	//updateDBpbar();
	$("#dynamic")
	.css("width", current_progress + "%")
	.attr("aria-valuenow", current_progress)
	.text(current_progress + "% Profit");

 });