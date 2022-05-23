"use strict"

var hr = 0
var min = 0
var seg = 0

var volta = 0

var tempo = 1000;
var cron;

function Start() {
    cron = setInterval(timer, tempo)
}

function Pause() {
    clearInterval(cron)
}

function Stop() {
    clearInterval(cron)
    hr = 0
    min = 0
    seg = 0
    volta = 0

    document.getElementById('cron').innerHTML = '<h1> 00:00:00 </h1>'

    document.getElementById('volta').innerHTML = '<h3> VOLTAS </h3>'
}

function timer() {
    seg++
    if (seg == 60) {
        seg = 0
        min++
        if (min == 60) {
            min = 0
            hr++
        }
    }

    var format = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg)
    document.getElementById("cron").innerHTML = '<h1>' + format + '</h1>'
    return format
}

function Volta() {
    var format = timer()
    volta++
    document.getElementById('volta').innerHTML += '<br>' + '<h2>' + volta + '</h2>' + '<h3>' + format + '</h3>'

}