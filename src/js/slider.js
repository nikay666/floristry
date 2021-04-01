export function ItemsSlider(){
    let wrapCatalog = document.querySelector('.wrap-catalog'); 
    if(!wrapCatalog) return;
    let wrapContent = wrapCatalog.querySelector('.wrap-content');
    let sliderItems = wrapContent.querySelectorAll('.slider-item');
    let activeSliders = wrapContent.querySelectorAll('.is-slider-show');
    let paginationCont = wrapCatalog.querySelector('.slider-bottom-pagination');

    let SlideIndex = 0;
    let tabletSize = 961;
    let mobileSize = 540;
    let clsShowPag = 'is-active-sub-line';
    const clsShowSlide = 'is-slider-show'
    let countSlides = 0;
    let paginationSubLines = [];

    const  mobileCount = 1, tabletCount =  2, fullCount = 4;

    const mediaQueryList =  [
            window.matchMedia(`(min-width: ${mobileSize}px) and (max-width: ${tabletSize}px)`),
            window.matchMedia(`(max-width: ${mobileSize}px)`),
            window.matchMedia(`(min-width: ${tabletSize+1}px)`)
    ];

    

    const checkWidth = (e) => {
        if(mediaQueryList[0].matches) {
            countSlides = tabletCount;
            showSlide(SlideIndex);
            updatePagination()
        } else if(mediaQueryList[2].matches){
            countSlides = fullCount;
            showSlide(SlideIndex);
            updatePagination()
        } else if(mediaQueryList[1].matches){
            countSlides = mobileCount;
            showSlide(SlideIndex);
            updatePagination();
        }
    }

    const touchEvents = () => {
        const pagination =  document.querySelectorAll('.sub-line')

        sliderItems.forEach(item => {
            let touchStart, touchEnd
         
            item.addEventListener('touchstart', (e) => {
                console.log(e.changedTouches[0])
                touchStart = e.changedTouches[0].screenX
            })

            item.addEventListener('touchend', (e) => {
                let index = SlideIndex
                console.log(SlideIndex, 'SLIDEINDEX')
                clearPaginationStyle(pagination)
                touchEnd = e.changedTouches[0].screenX
                const dif = touchStart - touchEnd
                console.log(dif)

                if(dif > 0){
                    index  = index + 1  >= sliderItems.length  ? sliderItems.length - 1 : index + 1 
               
                }else{
                    index = index - 1 < 0 ? 0 : index - 1 
                } 

                SlideIndex = index
                isActivePagination(index, pagination[index + 1])
            })

        })
    }
    
    const initSlider = () => {
        createPagination()
    
        mediaQueryList.forEach(query => {
            checkWidth(query)
            query.addListener(checkWidth)
        })
        showSlide(SlideIndex)

        touchEvents()
       
    }
    initSlider();

    function updatePagination(){
        paginationSubLines.forEach(item => {
            item.remove()
        });
        if(sliderItems.length > fullCount ||  sliderItems.length > tabletCount || sliderItems.length > mobileCount){
            const count =  sliderItems.length / countSlides ;
            for(let i  = 0; i < count; i++){
                createPaginationItem(i)
            }
        }
    }

    function createPagination(){       
        for(let i = 0; i < countSlides; i++){
            createPaginationItem(i)
        }
    }

    function createPaginationItem(i){
        let span = document.createElement('span');
        span.classList.add('sub-line');
        isActivePagination(i, span);
        paginationSubLines.push(span)
        paginationCont.append(span);
        addSubLineEvent(span, i)
    }

    function addSubLineEvent(item, i){
        item.addEventListener('click', ()  => {
            clearPaginationStyle(paginationSubLines);
            showSlide(i);
            item.classList.add(clsShowPag);
        })
    }
      
    function showSlide(i){
        console.log(i)
        sliderItems.forEach(item => {
            item.classList.remove(clsShowSlide);
        })
        SlideIndex = i;
        if(countSlides === mobileCount){
            sliderItems[i].classList.add(clsShowSlide);
        } 
        if(countSlides === tabletCount){
            if(i == 0){
                sliderItems[i].classList.add(clsShowSlide);
                sliderItems[i+1].classList.add(clsShowSlide);
            }
            if(i == 1){
                sliderItems[i+1].classList.add(clsShowSlide);
                sliderItems[i+2].classList.add(clsShowSlide);
        
            }
        }
        if(countSlides === fullCount){
            sliderItems.forEach(item => {
                item.classList.add(clsShowSlide)
            })
        }
    }

    function clearPaginationStyle(items){
        items.forEach(item => {
            item.classList.remove(clsShowPag);
        });
    }

    function isActivePagination(i, span){
        if(i == SlideIndex) {
            span.classList.add(clsShowPag);
            showSlide(i);
        }
    }
}
