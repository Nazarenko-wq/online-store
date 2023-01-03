import database from './database'

(function(){
    // Get all gallery items
let items = document.querySelectorAll('[data-id]');

// Get current item ID & go to item page 
items.forEach(elem => {
    elem.addEventListener('click', function(e) {
        
        localStorage.setItem('currentItemId', `${elem.attributes[1].nodeValue}`);
        let target = e.target as HTMLDivElement;
        
        if(target.classList.contains('item-image')) {
            window.location.href = './item.html';
        } 
    })
})
})();

// Get item data
(function(){
    const id = localStorage.getItem('currentItemId');
    let num = Number(id);
    // console.log(num);

    let itemImg = document.querySelector('.itemImg') as HTMLImageElement;
    let itemPrice = document.querySelector('.cust') as HTMLParagraphElement;
    let itemName = document.querySelector('.current-item') as HTMLSpanElement;
    let itemKind = document.querySelector('.kinds') as HTMLSpanElement;
    
    database.forEach(elem => {
        if(elem.id === num) {
            itemImg.src = elem.photo[0];
            itemPrice.textContent = elem.price;
            itemName.textContent = elem.name;
            itemKind.textContent = elem.category;
        }
    })
})();

// Choose the size
(function(){
    let parent = document.querySelector('.sizes') as HTMLDivElement;

    parent.addEventListener('click', (e) => {
        let target = e.target as HTMLDivElement;

        let sizes = document.querySelectorAll('.size')
        sizes.forEach(item => {
            item.classList.remove('active-size');
        })

        target.classList.add('active-size');

        // Push size to local storage
        sizes.forEach(elem => {
            if(elem.classList.contains('active-size')) {
                localStorage.setItem('currentSize', `${elem.attributes[1].nodeValue}`)
            }
        })

        // console.log(localStorage.getItem('currentSize'));
    })
})();

// Choose the color
(function(){
    let parent = document.querySelector('.colors') as HTMLDivElement;

    parent.addEventListener('click', (e) => {
        let target = e.target as HTMLDivElement;

        let colors = document.querySelectorAll('.color');
        colors.forEach(item => {
            item.classList.remove('active-color');
        })

        target.classList.add('active-color');

        // Push size to local storage
        colors.forEach(elem => {
            if(elem.classList.contains('active-color')) {
                localStorage.setItem('currentColor', `${elem.attributes[1].nodeValue}`)
            }
        })

        // console.log(localStorage.getItem('currentColor'));
    })
})();


// Push to lockal storage quantity goods
(function(){
    let input = document.querySelector('.quantity') as HTMLInputElement;
    localStorage.setItem('currentQuantity', `${input.value}`);
    
    input.addEventListener('change', () => {
        
        localStorage.setItem('currentQuantity', `${input.value}`);
        
        // console.log(localStorage.getItem('currentQuantity'));
    })
})();

// add btn listener
let btn = document.querySelector('.add-btn') as HTMLButtonElement;
btn.addEventListener('click', () => {window.location.href = './cart.html'});