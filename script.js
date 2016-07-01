function validatePIN (pin) {
    var x = Math.floor(pin);
    if (isNaN(x) === false && pin.length === 4 && isNaN(x) === false && pin.length === 6 && pin.charAt(0) !== "." && pin.charAt(0) !== "-" && pin.charAt(0) !== "+" && pin.charAt(1) !== "e" && pin.charAt(1) !== "E") {
        console.log(x.length);
        return true;
    } else if (isNaN(x) === false && pin.length === 6 && pin.charAt(0) !== "." && pin.charAt(0) !== "-" && pin.charAt(1) !== "e" && pin.charAt(0) !== "+" && pin.charAt(1) !== "E") {
        return true;
    } else {
        return false;
    }
}


