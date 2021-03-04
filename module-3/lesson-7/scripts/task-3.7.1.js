/*---------- Variables ----------*/
const arrBirdFilters = document.querySelectorAll('.birdFilter');
const arrBirdImages = document.querySelectorAll('.birdImage');
console.log(arrBirdFilters);

/*---------- Event Listeners ----------*/
for(counter=0; counter<arrBirdFilters.length; counter++){
    //console.log(counter);
    let currentFilter = arrBirdFilters[counter];
    //console.log(counterFilter);
    currentFilter.addEventListener('click',filterImages);
}

/*---------- Functions ----------*/
function filterImages(event){
    //console.log(event.target.innerHTML);
    var birdName = event.target.innerHTML;
    // console.log(birdName);
    for (counter = 0; counter < arrBirdImages.length; counter++){
        let currentImage = arrBirdImages[counter];
        currentImage.style.display = 'none';
        //console.log(currentImage);
        if (birdName == 'All'){
            currentImage.style.display = 'inline';
        } else {
            let currentImageBird = currentImage.getAttribute('bird');
            //console.log(currentImageBird);
            if (currentImageBird == birdName){
               currentImage.style.display = 'inline';
            }
        }


    }

}

