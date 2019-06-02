var topic=[
    "水星",
    "金星",
    "地球",
    "火星",
    "木星",
    "土星",
    "天王星",
    "海王星",
    "冥王星",
    
];

var distan=[
    "57.90",
    "108.20",
    "149.59",
    "227.93",
    "778.41",
    "1426.72",
    "2870.97",
    "4498.25",
    "5906.38"
];

var startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);