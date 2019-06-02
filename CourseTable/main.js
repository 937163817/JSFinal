window.onload = function () {

};

$(document).ready(function () {

    $("#courseTable").append("<tr><th><font color=white>排序</th><th><font color=white>距離(百萬公里)</th><th><font color=white>行星</th><tr>");

    var topicCount = topic.length;

    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;

    for (var x = 0; x < topicCount; x++) {
        
        if (x == 8) {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td><font color=gray>" + (x + 1) + "</td>");
            //        $("#courseTable").append("<td>"+
            //            (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td><font color=gray>" + distan[x] + "</td>");
            $("#courseTable").append("<td><font color=gray>" + topic[x] + "</td>");
            $("#courseTable").append("<tr>");
        } else {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td><font color=white>" + (x + 1) + "</td>");
            //        $("#courseTable").append("<td>"+
            //            (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td><font color=white>" + distan[x] + "</td>");
            $("#courseTable").append("<td><font color=white>" + topic[x] + "</td>");
            $("#courseTable").append("<tr>");
        }
    }

});
