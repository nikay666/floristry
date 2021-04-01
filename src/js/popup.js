import { add, remove } from "./utilits";

/* -- Popup -- */
const showThanks = (data, popupSubstrate, activeCls) => {
    const thanksForm = document.querySelector('#thanks');
    const name = thanksForm.querySelector('.name');
    const phone = thanksForm.querySelector('.phone');

    name.textContent = data.name;
    phone.textContent  = data.phone;

    add([thanksForm, popupSubstrate], activeCls)

    popupSubstrate.addEventListener('click', () =>{ 
        remove([thanksForm, popupSubstrate], activeCls)
    })
    setTimeout(() => {
        remove([thanksForm, popupSubstrate], activeCls)
    }, 4000);
}

const getFormData = (form) =>  {
    const data  = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    form.reset();
    return data;
}

export  const popupInit = () => {
    const popup = document.querySelector('#popup');
    const popupSubstrate = document.querySelector('.popup__substrate');
    const btnPopupClose = popup.querySelector('.popup__btn-close');
    const btnPopupToggle = document.querySelectorAll('.popupToggle');
    const form = popup.querySelector('form');
    const activeCls = 'popup-show';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = getFormData(form) ;
        remove([popup], activeCls );
        showThanks(data, popupSubstrate, activeCls); 
    });

    btnPopupToggle.forEach( btn => {
        btn.addEventListener('click', function(){
            if(! popup.classList.contains('popup-show')){
                add([popup, popupSubstrate], activeCls );
            }
        });
        }
    );
    
    window.addEventListener('keyup', (e) => {
        if(e.keyCode === 27){
            remove([popup, popupSubstrate], activeCls );
        }
    });

    const removeClickEvent = (target) => {
        target.addEventListener('click', () => { 
            remove([popup, popupSubstrate], activeCls);
        });
    } 

    removeClickEvent(btnPopupClose);
    removeClickEvent(popupSubstrate)

} 
