import { renderImages } from "../../main";
import database, { IData } from "./database";

let acceptFiltersBtn = document.querySelector('.submit-filter');
let categoryFilter = (<Element>document.querySelector('.filter-category'));
let priceFilter = (<Element>document.querySelector('.filter-price'));
let filterCloseBtns = (<NodeList>document.querySelectorAll('.button'));
let resetBtn = document.querySelector('.reset-btn');
let priceMinVal = (<HTMLInputElement>document.querySelector('.input-min'));
let priceMaxVal = (<HTMLInputElement>document.querySelector('.input-max'));

let copyOfDatabase = [...database];

let arrFilters = [categoryFilter, priceFilter];
arrFilters.forEach(filter => {
    filter?.addEventListener('click', () => {
        filter.lastElementChild?.classList.add('is-clicked');
    })
});

filterCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            btn.parentElement?.classList.remove('is-clicked');
        }, 0);
    })
});

function filteredRender(e: Event) {
    e.preventDefault();
    if (document.querySelectorAll('[name="category"]:checked').length ||
    priceMinVal.value !== '' ||
    priceMaxVal.value !== ''
    ) {
        let wrapper = document.querySelector('.gallery-wrapper');
        wrapper!.innerHTML = '';
        
        let filterItems = Array.from((<NodeListOf<HTMLInputElement>>document.querySelectorAll('[name="category"]:checked'))).map(checkbox => checkbox.value);
        let filteredArr = [...database].filter(item => {
            let pass = false;
            if (filterItems.length) {
                if (filterItems.includes(item.category)) {
                    pass = true;
                } else {
                    pass = false;
                }
            }
            let priceNatural = parseInt(item.price.replace('$', ''));
            if (priceMinVal.value) {
                if (parseInt(priceMinVal.value) > priceNatural) {
                    pass = false;
                } else {
                    pass = true;
                }
            }
            if (priceMaxVal.value) {
                if (parseInt(priceMaxVal.value) > priceNatural) {
                    pass = true;
                } else {
                    pass = false;
                }
            }
            return pass;
        });
        renderImages(filteredArr);    
    }
}

acceptFiltersBtn?.addEventListener('click', filteredRender);
resetBtn?.addEventListener('click', () => {
    let wrapper = document.querySelector('.gallery-wrapper');
    wrapper!.innerHTML = '';
    renderImages(copyOfDatabase);
})
