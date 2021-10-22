






function getSecond() {
    return new Date().getSeconds()/* + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;*/
}

function getMinute() {
    return new Date().getMinutes()
}

function getHour() {
    return /*new Date().getSeconds() + 
      new Date().getMinutes() * 60 + */
      new Date().getHours() * 3600;
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

    
    // your code here
}, 1000);
