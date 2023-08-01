//DOM elements/nodes
const stop_start = document.getElementById("start-stop")
const bottonReset = document.getElementById("reset")
var countNumber = document.getElementById("counter")
let isStarted = false

function startStopCount(){
    isStarted = !isStarted
    while (isStarted && countNumber.innerText < 9000){
        countNumber.innerText++
    }
}
function reset(){
    countNumber.innerText = 0
}


//DOM Events
stop_start.addEventListener("click",startStopCount)
bottonReset.addEventListener("click",reset)

