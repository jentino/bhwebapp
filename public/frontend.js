// 'use strict'
$(function () {
	// var globalone = "WORLDIE";
    current_progress = 54;
	//updateDBpbar();
	$("#dynamic")
	.css("width", current_progress + "%")
	.attr("aria-valuenow", current_progress)
	.text(current_progress + "% Profit");

 });