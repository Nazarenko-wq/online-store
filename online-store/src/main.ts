import database, { IData } from './assets/ts/database';
import './assets/ts/burger'
import {Card} from './assets/ts/card_create';
import { filterResult, priceMaxVal, priceMinVal } from './assets/ts/shop';

let databaseCopy: Array<IData> = [...database];
let cardsToPage: number;
let cardsWrapper = (<Element>document.querySelector('.gallery-wrapper'));

function renderAfterFilter(): void {
    let localStorageCards = localStorage.getItem('filterCards');
    let localStorageCardsObj = JSON.parse(localStorageCards!);
    let localStoragePrices = localStorage.getItem('filterCardsPrices');
    let localStoragePricesObj = JSON.parse(localStoragePrices!);
    let localStorageInputs = localStorage.getItem('filterCardsInputs');
    let localStorageInputsObj = JSON.parse(localStorageInputs!);

    cardsToPage = localStorageCardsObj.length;
    filterResult.innerText = `Найдено товаров: ${cardsToPage}.`;
    
    if (localStorageInputsObj.length && localStoragePricesObj.length) {
        priceMinVal.value = localStoragePricesObj[0];
        priceMaxVal.value = localStoragePricesObj[1];
        let inputsCategories = Array.from(document.querySelectorAll('[name="category"]'));
        for (let i = 0; i < inputsCategories.length; i++) {
            console.log((<HTMLInputElement>inputsCategories[i]).value, localStorageInputsObj);
            if (localStorageInputsObj.includes((<HTMLInputElement>inputsCategories[i]).value)) {
                console.log((<HTMLInputElement>inputsCategories[i]).checked);
                (<HTMLInputElement>inputsCategories[i]).checked = true;
            }
        }
    }
}

export function renderImages(cardsDatabase: IData[]) {
    let randoms: Array<number> = new Array(cardsDatabase.length).fill(0).map((_, i) => i).sort((_, __) => Math.random() - 0.5);
    
    if (cardsWrapper) {
        if (cardsWrapper.classList.contains('gallery-page')) {
            if (localStorage.getItem('filterCards') === null) {
                cardsToPage = cardsDatabase.length;
                history.pushState(null, '', '/shop.html');
            } else {
                renderAfterFilter();
            }
        } else {
            cardsToPage = 3;
        }    
    }
    
    if (localStorage.getItem('filterCards') === null) {
        for (let i = 0; i < cardsToPage!; i++) {
            let random: number = randoms.pop() as number;
            let databaseElem = cardsDatabase[random];
            let item = new Card(databaseElem.id, databaseElem.category, databaseElem.name, databaseElem.description, databaseElem.price, databaseElem.photo);
            cardsWrapper.appendChild(item.init());
        }
    } else {
        const localStorageCards = localStorage.getItem('filterCards');
        const localStorageCardsObj = JSON.parse(localStorageCards!);
        const shuffledArray = localStorageCardsObj.sort((_: unknown, __: unknown) => 0.5 - Math.random());
        for (let i = 0; i < cardsToPage!; i++) {
            let oneItem = shuffledArray[i];
            let item = new Card(oneItem.id, oneItem.category, oneItem.name, oneItem.description, oneItem.price, oneItem.photo);
            cardsWrapper.appendChild(item.init());
        }
    }
}

renderImages(databaseCopy);