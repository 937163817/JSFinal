window.onload=function()
{
    
};

$(document).ready(function(){

    $("#courseTable").append("<tr><th>排序</th><th>距離(百萬公里)</th><th>行星</th><tr>");
    
    var topicCount=topic.length;
    
    var secondUnit=1000;
    var minuteUnit=secondUnit*60;
    var hourUnit=minuteUnit*60;
    var dayUnit=hourUnit*24;
    
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
//        $("#courseTable").append("<td>"+
//            (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        $("#courseTable").append("<td>"+distan[x]+"</td>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("<tr>");
    }
    
});