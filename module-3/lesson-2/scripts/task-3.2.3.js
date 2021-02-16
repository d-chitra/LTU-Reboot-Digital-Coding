function getfullName(firstName,lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

var fName = 'Chitra';
var lName ='Deokar';

var fName2 = 'Shrija';
var lName2 = 'Pawar';

var fullName1 = getfullName(fName,lName);
var fullName2 = getfullName(fName2,lName2);

console.log(fullName1);
console.log(fullName2);