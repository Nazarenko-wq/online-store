import { renderImages } from "../../main";
import database, { IData } from "./database";

let acceptFiltersBtn = document.querySelector('.submit-filter');
let categoryFilter = (<Element>document.querySelector('.filter-category'));
let priceFilter = (<Element>document.querySelector('.filter-price'));
let filterCloseBtns = (<NodeList>document.querySelectorAll('.button'));
let resetBtn = document.querySelector('.reset-btn');
export let priceMinVal = (<HTMLInputElement>document.querySelector('.input-min'));
export let priceMaxVal = (<HTMLInputElement>document.querySelector('.input-max'));
export let filterResult = (<HTMLSpanElement>document.querySelector('.filter-result'));

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
// let arrToRenderAfterRefresh: IData[];

function filteredRender(e: Event) {
    e.preventDefault();
    if (document.querySelectorAll('[name="category"]:checked').length ||
    priceMinVal.value !== '' ||
    priceMaxVal.value !== ''
    ) {
        let wrapper = document.querySelector('.gallery-wrapper');
        wrapper!.innerHTML = '';
        
        let filterItems = Array.from((<NodeListOf<HTMLInputElement>>document.querySelectorAll('[name="category"]:checked'))).map(checkbox => checkbox.value);
        console.log(filterItems);
        let filteredArr = [...database].filter(item => {
            let pass = false;
            let priceNatural = parseInt(item.price.replace('$', ''));

            if (filterItems.length) {
                if (filterItems.includes(item.category) && priceMinVal.value && priceMaxVal.value) {
                    if (parseInt(priceMinVal.value) <= priceNatural && parseInt(priceMaxVal.value) >= priceNatural) {
                        pass = true;
                    } else {
                        pass = false;
                    }
                } else if (filterItems.includes(item.category) && priceMinVal.value) {
                    if (parseInt(priceMinVal.value) <= priceNatural) {
                        pass = true;
                    } else {
                        pass = false;
                    }
                } else if (filterItems.includes(item.category) && priceMaxVal.value) {
                    if (parseInt(priceMaxVal.value) >= priceNatural) {
                        pass = true;
                    } else {
                        pass = false;
                    }
                } else if (filterItems.includes(item.category)) {
                    pass = true;
                } else {
                    pass = false;
                }
            } else if (priceMinVal.value && priceMaxVal.value) {
                if (parseInt(priceMinVal.value) <= priceNatural && parseInt(priceMaxVal.value) >= priceNatural) {
                    pass = true;
                } else {
                    pass = false;
                }
            } else if (priceMinVal.value) {
                if (parseInt(priceMinVal.value) <= priceNatural) {
                    pass = true;
                } else {
                    pass = false;
                }
            } else if (priceMaxVal.value) {
                if (parseInt(priceMaxVal.value) >= priceNatural) {
                    pass = true;
                } else {
                    pass = false;
                }
            } else {
                pass = false;
            }
            return pass;
        });
        if(filteredArr.length) {
            //Check for min and max prices for localStorage to set after page refresh
            let minPriceCheck = priceMinVal.value ? priceMinVal.value : '0';
            let maxPriceCheck = priceMaxVal.value ? priceMaxVal.value : '750';
            let minMaxPrices = [minPriceCheck, maxPriceCheck];
            
            let arrToRenderAfterRefresh = [...filteredArr];

            //Add items for localStorage
            localStorage.setItem('filterCards', JSON.stringify(arrToRenderAfterRefresh));
            localStorage.setItem('filterCardsInputs', JSON.stringify(filterItems));
            localStorage.setItem('filterCardsPrices', JSON.stringify(minMaxPrices));
            
            filterResult.innerText = `Найдено товаров: ${filteredArr.length}.`;
            renderImages(filteredArr);
            history.pushState(null, '', `/shop.html?category=${filterItems.join(';')}&pricemin=${minPriceCheck}&pricemax=${maxPriceCheck}`);
        } else {
            filterResult.innerHTML = '';
            wrapper!.innerHTML = "Найдено товаров: 0. Попробуйте сформировать запрос ещё раз.";
            localStorage.removeItem('filterCards');
            localStorage.removeItem('filterCardsPrices');
            localStorage.removeItem('filterCardsInputs');
        }
    }
}

acceptFiltersBtn?.addEventListener('click', filteredRender);

resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('filterCards');
    localStorage.removeItem('filterCardsPrices');
    localStorage.removeItem('filterCardsInputs');
    let wrapper = document.querySelector('.gallery-wrapper');
    wrapper!.innerHTML = '';
    filterResult.innerHTML = '';
    renderImages(copyOfDatabase);
    history.pushState(null, '', '/shop.html');
})
