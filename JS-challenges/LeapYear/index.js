// year % 4 == 0 : leap year;
// year % 100 == 0 : Not a leap year;
// year % 400 === 0 : Leap year;

function isLeapYear(year) {
    var leapYear = "";
    if (year % 4 === 0) {
        leapYear = true;
        if (year % 100 === 0) {
            leapYear = false;
            if (year % 400 === 0) {
                leapYear = true;
            }
        }
    }
    
    if (leapYear) {
        return "Leap Year";
    } else {
        return "Not a Leap year";
    }
}

console.log(isLeapYear(2029));
