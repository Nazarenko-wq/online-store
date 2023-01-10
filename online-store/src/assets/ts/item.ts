import { Card } from './card_create';
import database, { IData } from './database'

interface IObj {
    id: string,
    name: string,
    price: string,
    photo: string
};

export type exemple = IObj;

let arr: exemple[] = [];
let str = JSON.stringify(arr);

if(localStorage.getItem('arrItems') === null) {
    localStorage.setItem('arrItems',str);
};
// localStorage.clear();
// console.log(localStorage.getItem('arrItems'));

let relatedGoodsWrapper = (<HTMLElement>document.querySelector('.cards-related'));

function renderToRelatedGoods(databaseRelated: IData[], wrapper: HTMLElement) {
    const cardsToPage = 2;
    const shuffledArray = databaseRelated.sort((_: unknown, __: unknown) => 0.5 - Math.random());
    for (let i = 0; i < cardsToPage!; i++) {
        let oneItem = shuffledArray[i];
        let item = new Card(oneItem.id, oneItem.category, oneItem.name, oneItem.description, oneItem.price, oneItem.photo);
        wrapper.appendChild(item.init());
    }
}

(function(){
    // Get all gallery items
    let items = document.querySelectorAll('[data-id]');

    // Get current item ID & go to item page 
    items.forEach(elem => {
        elem.addEventListener('click', function(e) {
            
            localStorage.setItem('currentItemId', `${elem.attributes[1].nodeValue}`);
            // localStorage.setItem('currentItemCategory', )
            let target = e.target as HTMLDivElement;
            
            if(target.classList.contains('item-image')) {
                window.location.href = './item.html';
            } 
        })
    })
})();

if(window.location.href === 'http://localhost:8080/item.html') {

    let itemImg = document.querySelector('.itemImg') as HTMLImageElement;
    let itemPrice = document.querySelector('.cust') as HTMLParagraphElement;
    let item = document.querySelector('.item-name') as HTMLDivElement;
    let itemName = document.querySelector('.current-item') as HTMLSpanElement;
    let itemKind = document.querySelector('.kinds') as HTMLSpanElement;
    let discription = document.querySelector('.discription') as HTMLDivElement;

    // Get item data
    (function(){
        const id = localStorage.getItem('currentItemId');
        let num = Number(id);
        // console.log(num);

        database.forEach(elem => {
            if(elem.id === num) {
                itemImg.src = elem.photo[0];
                itemPrice.textContent = elem.price;
                itemName.textContent = elem.name;
                item.textContent = elem.name;
                itemKind.textContent = elem.category;
                discription.textContent = elem.description;
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

    // // Choose the color
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
    
    let cartCount = document.querySelector('.count') as HTMLSpanElement;
    let btn = document.querySelector('.add-btn') as HTMLButtonElement;

    window.onload = function () {
        cartCount.textContent = localStorage.getItem('currentQuantity');
    }

    btn.addEventListener('click', function addItemToCart() {
        // count quantity if items
        localStorage.setItem('currentQuantity', `${cartCount.textContent}`);
        let currentQuantity = localStorage.getItem('currentQuantity');
        let num = Number(currentQuantity) + 1;
        cartCount.textContent = String(num);
        localStorage.setItem('currentQuantity', String(num));
       
        // create object
        let obj = {
            id: localStorage.getItem('currentItemId'),
            name: item.textContent,
            price: itemPrice.textContent,
            photo: itemImg.src
        }

        // push object to local storage
        let itemArr = localStorage.getItem('arrItems');
        let arr2 = Array.from(JSON.parse(itemArr!)); 
        // let arr2 = JSON.parse(itemArr!);
        arr2.push(obj);
        let str = JSON.stringify(arr2);
        localStorage.setItem('arrItems', str);
    });

    let relatedGoodsArray: IData[] = [];
    database.forEach(el => {
        if (el.category === itemKind.textContent) {
            relatedGoodsArray.push(el);
        }
    });
    renderToRelatedGoods(relatedGoodsArray, relatedGoodsWrapper);
}

let oneClickBtn = document.getElementById('one-click-purchase');
let oneClickPopup = document.querySelector('.popup-oneclick_purchase');
let cancelBtn = document.querySelector('.cancel');
let popupOverlay = document.querySelector('.popup-overlay');

oneClickBtn?.addEventListener('click', () => {
    oneClickPopup!.classList.add('is-activated');
    popupOverlay!.classList.add('is-active');
});

cancelBtn?.addEventListener('click', () => {
    popupOverlay!.classList.remove('is-active');
    oneClickPopup!.classList.remove('is-activated');
});

popupOverlay?.addEventListener('click', () => {
    popupOverlay!.classList.remove('is-active');
    oneClickPopup!.classList.remove('is-activated');
});
// localStorage.clear();
