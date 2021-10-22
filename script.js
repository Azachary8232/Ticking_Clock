






function getSecond() {
    return new Date().getSeconds()
}

function getMinute() {
    return new Date().getMinutes()
}

function getHour() {
    return new Date().getHours();
}


setInterval( function() {
    var timeSecond = getSecond();
    console.log(timeSecond);
    var secondDegree = timeSecond * 6 + 180;
    console.log(secondDegree);
    var second = document.querySelector("#seconds");
    second.style.transform = "rotate(" + secondDegree + "deg)";
    console.log(second.style.transform);

    var timeMinute = getMinute();
    console.log(timeMinute);
    var minuteDegree = timeMinute * 6 + 180;
    console.log(minuteDegree); 
    var minute = document.querySelector("#minutes");
    minute.style.transform = "rotate(" + minuteDegree + "deg)";
    console.log(minute.style.transform);

    var timeHour = getHour();
    console.log(timeHour);
    var hourDegree = timeHour * 30 + 180;
    console.log(hourDegree);
    var hour = document.querySelector("#hours");
    hour.style.transform = "rotate(" + hourDegree + "deg)";
    console.log(hour.style.transform);
}, 1000);
