//DOM elements/nodes
const stop_start = document.getElementById("start-stop")
const bottonReset = document.getElementById("reset")
var countNumber = document.getElementById("counter")
var INTERVAL_ID = null


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
    countNumber.innerText++
}
function reset(){
    countNumber.innerText = 0
}


//DOM Events
stop_start.addEventListener("click",startStopCount)
bottonReset.addEventListener("click",reset)

