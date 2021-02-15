var blinkInterval = setInterval(blinkLED, 250);
var blinkCount = 0;

function blinkLED() {
    blinkCount += 1;
    console.log('Blink ' + blinkCount);
}

function endBlink() {
    blinkCount = 0;
    clearInterval(blinkInterval);
}

setTimeout(endBlink, 5000);