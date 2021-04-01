import { add, remove } from "./utilits";

/* -- Header Menu -- */
export const mobileHeaderMenuInit = () => {
    let menu = document.querySelector('.menu-header');
    let btnHeaderMenu = document.querySelector('.btn__menu-header');
    let btnCloseHeaderMenu = menu.querySelector('.close__btn');
    let body = document.querySelector('body');
    
    btnHeaderMenu.addEventListener('click', function(){
        if( ! menu.classList.contains('is-header-show') ){
            add(menu, 'is-header-show');
            add(body, 'modal-open');
        }
       
    });
    
    btnCloseHeaderMenu.addEventListener('click', function(){
        remove(menu, 'is-header-show');
        remove(body, 'modal-open');
    });
}