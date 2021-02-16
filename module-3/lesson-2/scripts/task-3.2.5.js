function wearAcoat(temperature){
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

wearAcoat(5);
wearAcoat(12);
wearAcoat(7);
wearAcoat(-7);