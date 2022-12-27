import database, { Data, IData } from '../public/database/database';
import '../public/ts/burger';
import { Card } from '../public/ts/card_create';

let cardsToPage = 3;
let cardsWrapper = (<Node>document.querySelector('.gallery-wrapper'));
let databaseCopy: Array<IData> = [...database];
let makeRandomItemFromDatabase = Math.floor(Math.random() * (databaseCopy.length + 1 - 0) + 0);

let randoms: Array<number> = new Array(databaseCopy.length).fill(0).map((_, i) => i).sort((_, __) => Math.random() - 0.5);

for (let i = 0; i < cardsToPage; i++) {
    let random: number = randoms.pop() as number;
    let databaseElem = database[random];
    let item = new Card(databaseElem.id, databaseElem.category, databaseElem.name, databaseElem.description, databaseElem.price, databaseElem.photo);
    cardsWrapper.appendChild(item.init());
}