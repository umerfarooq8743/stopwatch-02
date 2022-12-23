// function timer(){
// console.log("runnning.....")
// }
// setInterval(timer,1000)
// setTimeout(timer,5000)

// var count=0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }
// interval=setInterval(timer,1000)
// setTimeout(function(){
//     clearInterval(interval)
// },10000)

var interval;
var min=0;
var sec=0;
var msec=0;
var minh1=document.getElementById("min");
var sech1=document.getElementById("sec");
var msech1=document.getElementById("msec");
function stopwatch(){
    msec++
    msech1.innerHTML=msec
    if(msec>=100){
        sec++
        sech1.innerHTML=sec
        msec=0
    }
else if(sec>=60){
    min++
    minh1.innerHTML=min
    sec=0
}
}

function start(){
    interval= setInterval(stopwatch,10)
}
function stop(){
   clearInterval(interval)
}
function reset(){
     min=0;
 sec=0;
 msec=0;
 minh1.innerHTML=min
 sech1.innerHTML=sec
 msech1.innerHTML=msec
 stop()
}

