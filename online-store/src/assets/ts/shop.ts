let categoryFilter = (<Element>document.querySelector('.filter-category'));
let priceFilter = (<Element>document.querySelector('.filter-price'));
window.isFilterOpened = false;

let arrFilters = [categoryFilter, priceFilter];
arrFilters.forEach(filter => {
    filter?.addEventListener('click', () => {
        filter.lastElementChild?.classList.add('is-clicked');
        window.isFilterOpened = true;
    })
});

// window.addEventListener('click', (e) => {
//     if (window.isFilterOpened === true && e.target?.closest(arrFilters)) {

//     }
// })

// let filters = document.querySelectorAll('.options-block')
// .forEach(filter => {
//     filter.parentElement?.addEventListener('click', () => {
//         filter.classList.toggle('is-clicked');
//     })
// })