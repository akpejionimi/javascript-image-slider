document.addEventListener('DOMContentLoaded', () => {
    let btnext = document.getElementById('btnNext');
    let btnprev = document.getElementById('btnPrev');
    let myslides = document.getElementById('mySlides');
    


    let images = ['images/p1.jpg', 'images/p2.jpg', 'images/p3.jpg', 'images/p4.jpg'];
    let currentIndex = 0;

    btnext.addEventListener('click', () => {
        let imagesLength = images.length;
        if (currentIndex < imagesLength - 1) {
            currentIndex += 1;
            myslides.setAttribute('src', images[currentIndex]);
            console.log(currentIndex);
            btnprev.disabled=false;
            if(currentIndex === imagesLength - 1){
                btnext.disabled=true;
            }
        }
    })
    btnprev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            mySlides.setAttribute("src", images[currentIndex]);
            console.log(currentIndex);
            btnext.disabled=false;
        }
        if(currentIndex === 0){
            btnprev.disabled=true;
        }
    })

})
