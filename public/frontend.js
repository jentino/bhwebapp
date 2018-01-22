// 'use strict'
$(function () {
	
	var globalvar = "yoyoyos";
    current_progress = 54;
	//updateDBpbar();
	$("#dynamic")
	.css("width", current_progress + "%")
	.attr("aria-valuenow", current_progress)
	.text(current_progress + "% Profit");

 });