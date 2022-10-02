let current = document.querySelector('#current');
let imgs = document.querySelectorAll('.imgs img');
let opacity = 0.4;

//Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img =>  img.addEventListener('click', imgClick))

function imgClick(e){

    //Reset opacity 
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked img
    current.src = e.target.src;

    //Add opacity
    e.target.style.opacity = opacity;

    //Add fade-in class
    current.classList.add('fade-in');

    //Remove fade-in class after animation
    setTimeout(() => current.classList.remove('fade-in'), 500);  
}
