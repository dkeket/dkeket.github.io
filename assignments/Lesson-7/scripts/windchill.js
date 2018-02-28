var high = parseFloat(document.getElementById("highT"));
var low = parseFloat(document.getElementById("lowT"));
var w = parseFloat(document.getElementById("windS"));
var t = (high + low) / 2;
var a = 35.74 + 0.6215*t;
var b = 35.75 * Math.pow(w,0.16);
var c = 0.4275 * t * Math.pow(w,0.16);

document.getElementById("windchill").innerHTML = a - b + c;
