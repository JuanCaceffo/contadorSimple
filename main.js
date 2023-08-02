//DOM elements/nodes
const stop_start = document.getElementById("start-stop")
const bottonReset = document.getElementById("reset")
var hsMinsSec = document.getElementById("counter")
var INTERVAL_ID = null
var counter = 0

function startStopCount(){
    const INTERVAL = 1000
    if (!INTERVAL_ID){
        INTERVAL_ID = setInterval(count,INTERVAL)
    }else{
        clearInterval(INTERVAL_ID)
        INTERVAL_ID = null
    }
}
function count(){
    counter++
    hsMinsSec.innerText = secsToHsMinSec(counter)
}
function secsToHsMinSec(sec){
    var hs 
    var mins
    var secs
    const RESTO = (sec % 3600)
    hs = Math.trunc(sec/3600)
    mins =  Math.trunc(RESTO / 60)
    secs = RESTO % 60 
    return (hs+':'+mins+':'+secs)
}
function reset(){
    hsMinsSec.innerText = "00:00:00"
}


//DOM Events
stop_start.addEventListener("click",startStopCount)
bottonReset.addEventListener("click",reset)

