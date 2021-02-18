function isValidNumber(number){
    return !isNaN(number);
}

function calculator(number1, number2, operator){
    strMessage = '';
    if (!isValidNumber(number1)){
        return 'Argument 1 must be number';
    }
    if (!isValidNumber(number2)){
        return 'Argument 2 must be number';
    }
    if (operator != '+' && operator != '-' && operator != '*' && operator != '/' && operator != '%'){
        return 'Argument 3 must be arithmatic operator';
    }
    var sum;
    switch (operator){
    case '+':
        sum = number1 + number2;
    break;
    case '-':
        sum = number1 - number2;
    break;
    case '*':
        sum = number1 * number2;
    break;
    case '/':
        sum = number1 / number2;
    break;
    case '%':
        sum = number1 % number2;
    break;
}
    return sum;
}
sum = calculator(100,20, '*');
console.log(sum);