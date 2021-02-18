function percentageCalculator(number,percentage){
    var blnValidated = true;
    if(isNaN(number)){
        blnValidated = false;
    }
    if(isNaN(number)){
        blnValidated = true;
          }
    if(blnValidated) {
        onePercent = number / 100;
        percentValue = onePercent * percentage;
        return percentValue;
    }
    else {
        console.log('both arguments needs to be a number')
    }
}

var sum = percentageCalculator(100,90);


console.log(sum);

sum = percentageCalculator(50,20);
console.log(sum);




