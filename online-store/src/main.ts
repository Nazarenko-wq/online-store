import database, { IData } from './assets/ts/database';
import './assets/ts/burger'
import {Card} from './assets/ts/card_create';

let databaseCopy: Array<IData> = [...database];

export function renderImages(cardsDatabase: IData[]) {
    let cardsToPage: number;
    let cardsWrapper = (<Element>document.querySelector('.gallery-wrapper'));

    if (cardsWrapper) {
        if (cardsWrapper.classList.contains('gallery-page')) {
            cardsToPage = cardsDatabase.length;
        } else {
            cardsToPage = 3;
        }    
    }
    let randoms: Array<number> = new Array(cardsDatabase.length).fill(0).map((_, i) => i).sort((_, __) => Math.random() - 0.5);

    for (let i = 0; i < cardsToPage!; i++) {
        let random: number = randoms.pop() as number;
        let databaseElem = cardsDatabase[random];
        let item = new Card(databaseElem.id, databaseElem.category, databaseElem.name, databaseElem.description, databaseElem.price, databaseElem.photo);
        cardsWrapper.appendChild(item.init());
    }
}

renderImages(databaseCopy);