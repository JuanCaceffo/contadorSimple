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
        stopCount()
    }
}
function stopCount(){
    clearInterval(INTERVAL_ID)
    INTERVAL_ID = null

}
function count(){
    counter++
    hsMinsSec.innerText = secsToTimeFormat(counter)
}
function secsToTimeFormat(sec){
    var hs 
    var mins
    var secs
    const RESTO = (sec % 3600)

    hs = Math.trunc(sec/3600)
    mins =  Math.trunc(RESTO / 60)
    secs = RESTO % 60

    return (leadingCeros(1,hs,0)+':'+leadingCeros(1,mins,0)+':'+leadingCeros(1,secs,0))
}
function leadingCeros(maxDigits,number,cantCeros){
    strNum = String(number)
    if (strNum.length <= maxDigits ){
        return cantCeros+strNum
    }else{
        return strNum
    }
}
function reset(){
    stopCount()
    counter = 0
    hsMinsSec.innerText = "00:00:00"
}


//DOM Events
stop_start.addEventListener("click",startStopCount)
bottonReset.addEventListener("click",reset)

