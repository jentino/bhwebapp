

$(function () {
    "use strict";

    // var timer = $('#timer');
    // var mybalance = $('#mybalance');

    var HOST = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(HOST);


    var timer = $('#servertime');
    var status = $('#status');



    // var connection = new WebSocket('ws://127.0.0.1:1337');

    connection.onopen = function () {   
        status.text('Connected.');
    };

    connection.onerror = function (error) {
        // just in there were some problems with connection...
        status.html($('<p>', {
          text: 'Server is down.'
        }));
    };
    //Receive messages from SERVER
    connection.onmessage = function (message) {
        try {
            var json = JSON.parse(message.data);
            timer.text(json.data);
        }catch (e) {
            console.log('Invalid JSON: ', message.data);
        return;
        }
        

        timer.text(json.data);
        
        // if (json.type === 'timer') { 
        //     timer.text(json.data);
        // }

        // if (json.type === 'masterbalance') { 
        //     status.text("$"+json.data);
        // }
    };

    setInterval(function() {
        if (connection.readyState !== 1) {
          status.text('Disconnected');
        }
    }, 3000);

    // $("#btndisconnect").attr("disabled", true);
    // // $.fn.startClock = function() {
    // //     connection.send('startclock');
    // //     $("#btnstart").attr("disabled", true);
    // //     $("#btnstop").attr("disabled", false);
    // //     return this;
    // //  };

    // //  $.fn.stopClock = function() {
    // //     connection.send('stopclock');
    // //     $("#btnstart").attr("disabled", false);
    // //     $("#btnstop").attr("disabled", true);
    // //     return this;
    // //  };

    //  $.fn.connectmaster = function() {
    //     connection.send(JSON.stringify({ data: 'startServerClock' }));
    //     $("#btnconnectmaster").attr("disabled", true);
    //     $("#btndisconnectmaster").attr("disabled", false);
    //     return this;
    //  };

    //  $.fn.disconnectmaster = function() {
    //     //connection.send('stopServerClock');
    //     connection.send(JSON.stringify({ data: 'stopServerClock' }));
    //     $("#btnconnectmaster").attr("disabled", false);
    //     $("#btndisconnectmaster").attr("disabled", true);
    //     return this;
    //  };




    //  $.fn.stopClock = function() {
    //     connection.send('stopclock');
    //     btnstop.text('Clock Stopped');
    //     return this;
    //  };

 });