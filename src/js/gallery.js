export function Gallery(){
    let galThumb = document.querySelector('.pg__content-thumb');
    if(!galThumb){
        return;
    }
    let thumbConteiner = galThumb.querySelector('.thumb');
    let slidesThumb = galThumb.querySelectorAll('.thumb__item');

    let fullImage = document.querySelector('.pg__fullImg-img');
    let prev = galThumb.querySelector('.thumb__btn-l');
    let next = galThumb.querySelector('.thumb__btn-r');

    let slideIndex = 0;
    let clsShow =  'img__active'; //class for show img
    let coutnImg = 4; //count images in div.thumb
    let widthImgItem = 26; //width div .thumb__item in %

    showSlides(slideIndex);

    function showSlides(n) {
        // slidesThumb.length - 1 count images

        if(n > slidesThumb.length -1 ){
            slideIndex = 0;
        }
        if(n < 0) {
            slideIndex = slidesThumb.length - 1;
        }
        slidesThumb.forEach(item => item.classList.remove(clsShow));

        for(let i = 0 ; i < coutnImg; i++ ){ 
            if(n > slidesThumb.length - 1){
                n = 0;
            }
            if(n < 0){
                n = slidesThumb.length - 1;
            }

            slidesThumb[n].classList.add(clsShow);
            slidesThumb[n].style.left = i * widthImgItem + '%' ; 
            n++;
        }

        
        let a = slidesThumb[slideIndex].querySelector('img');
        fullImage.setAttribute('src', a.getAttribute('src'));

    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    slidesThumb.forEach((item, i) => {
        item.addEventListener('click', function(){
            currentSlide(i);
        });
    });

    prev.addEventListener('click', function(){
        plusSlide(-1);
    });
    next.addEventListener('click', function(){
        plusSlide(1);
    });

}