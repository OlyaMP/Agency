//найти нужные мне узлы (кнопка, список, враппер)
const burgerButton = document.querySelector('.burger-menu__button');
const burgerWrapper = document.querySelector('.burger-menu');
const burgerList = document.querySelector('.burger-menu__list');

//выполнить функцию клика по кнопке
burgerButton.addEventListener('click', handleMenu);

//написать функцию клика по кнопке, которая показывает и скрывает меню
function handleMenu() {
    burgerList.classList.toggle('hide-menu');
}

//выполнить функцию при клике на любое место экрана
document.addEventListener('click', hideBurgerMenu);

//написать эту функцию
function hideBurgerMenu(el) {
//проверяем есть ли внутри того, по чему кликнули попап меню или кнопка
let targetInside = burgerWrapper.contains(el.target);
//если элемента нет, то прячем меню
if(!targetInside) {
    burgerList.classList.add('hide-menu');
}
else {
    return;
}
}