var clickElement = document.querySelector('.preventClick');
// console.log(hoverElement);
function alertBox(event){
    event.preventDefault();
    // console.log(event);
    alert('You clicked a link and I stopped it');
}

clickElement.addEventListener('click',alertBox);