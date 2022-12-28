import database from '../database/database';

type obj = 
    {
        id: number,
        category: string,
        name: string,
        description: string,
        price: string,
        photo: [string, string]
    }
;

function func (arr: [obj]) {
    for(let elem of arr) {
        if(elem.id === 1) {
            console.log(elem);
        }
    }
}

// func(database);