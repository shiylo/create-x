
// получаю в переменную классы

const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const headerComp = document.querySelector('.header__company');
const headBody = document.getElementsByTagName('body')[0];

//Присваивание класса active когда нажимаю на headerBurger
  headerBurger.addEventListener('click', function(e) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  headerComp.classList.toggle('active');
  headBody.classList.toggle('lock');
});

document.addEventListener('keyup', function(e){
  if(e.code === 'Escape'){
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
      headBody.classList.remove('lock');
  }
});


// *****************************************************



//Валидация формы
const formUs = document.querySelector('.form__user');
const formInputs = document.querySelectorAll('.js-input');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputCheckbox = document.querySelector('.checkbox__input');
const checkLabelText = document.querySelector('.checkbox__text p');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

formUs.onsubmit = function(){

  let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input) {
    if(input.value === ''){
      input.classList.add('error');
    } else{
      input.classList.remove('error');
    }
  })      

  if(emptyInputs.length !== 0){
     return false
  }

  if(!validateEmail(emailVal)){
    inputEmail.classList.add('error')
    return false

  } else{
    inputEmail.classList.remove('error')
  }

  if(!inputCheckbox.checked){
    console.log('rtttttv')
    inputCheckbox.classList.add('error');
    checkLabelText.style.color = "red";
    return false;
  } else{
    inputCheckbox.classList.remove('error')
    checkLabelText.style.color = "#424551";
  }



  if (!validatePhone(phoneVal)) {
      console.log('phone not valid');
      inputPhone.classList.add('error');
      return false;
    } else {
      inputPhone.classList.remove('error');
    }
}



//Функции свайпера

  new Swiper(".mySwiper", {
    
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, 
      },
      // mousewheel: true,
      // keyboard: true,
    

  // Сколлбар 
  //   scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },

//Управление слайдером клавиатурой
  keyboard:{
    //Включить \  Выключить
    enabled:true,

    //Включить \  Выключить
    //Только когда слайдер в пределахь вьюпорта
    onlyInViewport:true,

    //Включить \  Выключить
    //Управление клавишами pageUp, pageDown
    pageUpDown:true,

  },

  
// //Управление слайдером мышью
//  mousewheel:{
//    sensitiviti:1,
//  },

//Автовысота
  // autoHeight: true,


//Количество слайдов для показа
  // slidesPerView: 3,

//Отключение функционала если слайдов меньше чем нужно
  // watchOverflow:true,

//стартовый слайд 0 - это первый, 1 - это второй, итд
  // initialSlide: 1,


//Бесконечный слайдер
  // loop:true,

//Кол-во дублирующих слайдов
  // loopedSlides:3,  


//Свободный режим
  // freeMode:true,


//Скорость
// speed:300,



//Вертикальный слайдер  
// direction:'horizontal',


//смена прозрачности
// effect:'fade',

// //дополнение к fade
// fadeEffect:{
//  //Параллельная смена прозрачности
//  crossFade:true
// },




//Брейн поинты (адаптив)
//Ширина экрана

breakpoints:{
  320:{
    slidesPerView: 1,
  },
  480:{
    slidesPerView: 2,
  },
  992:{
    slidesPerView: 3,
  },
},




});




















