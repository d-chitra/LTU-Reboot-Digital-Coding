function wearAcoat(temperature){
    blnNotNumber = false;
    if(isNaN(temperature)){
        blnNotNumber = true;
    }
    if(!blnNotNumber){
      if(temperature<0) {
        console.log('stay inside');
    }
    else if(temperature<10) {
        console.log('wear a coat & hat');
    }
    else if(temperature<18){
        console.log('wear a coat');
        }
    else {
        console.log('You don\'t need a coat');
    }
} 
    else {
        console.log('temperature needs to be a number')
    }
}


wearAcoat(-1);
wearAcoat(5);
wearAcoat(10);
wearAcoat(30);
wearAcoat('june');