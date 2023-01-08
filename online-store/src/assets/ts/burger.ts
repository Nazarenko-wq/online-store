let burgerMenu = (<HTMLTemplateElement>document.querySelector('.burger-menu'));
let burgerBtn = (<HTMLTemplateElement>document.querySelector('.burger-btn'));
let closeBurgerBtn = (<HTMLTemplateElement>document.querySelector('.close-btn'));
let overlay = (<HTMLTemplateElement>document.querySelector('.overlay'));


burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('is-active');
    overlay.classList.add('is-active');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('is-active');
    burgerMenu.classList.remove('is-active');
});
closeBurgerBtn.addEventListener('click', () => {
    overlay.classList.remove('is-active');
    burgerMenu.classList.remove('is-active');
})