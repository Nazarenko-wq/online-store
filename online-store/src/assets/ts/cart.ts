import database from './database';

if(window.location.href === 'http://localhost:8080/cart.html'){
    (function(){
        let cartItemImg = document.querySelector('.cartImg') as HTMLImageElement;
        let cartItemName = document.querySelector('.discription') as HTMLDivElement;
        let cartItemPrice = document.querySelector('.price') as HTMLDivElement;
        let cartItemQuantity = document.querySelector('.wrap-quantity') as HTMLInputElement;
        let cartItemResult = document.querySelector('.result') as HTMLDivElement;
    
        
        let id = Number(localStorage.getItem('currentItemId'));
        let currentQuantity = localStorage.getItem('currentQuantity');
        database.forEach(elem => {
            if(elem.id === id) {
                cartItemImg.src = elem.photo[0];
                cartItemName.textContent = elem.name;
                cartItemPrice.textContent = elem.price;
                cartItemQuantity.value = currentQuantity!;

                let priceNatural = parseInt(elem.price.replace('$', ''));
                let str = String(priceNatural * Number(currentQuantity));
                cartItemResult.textContent = '$' + str;
            }
        })
    })();
    
    // console.log(localStorage.getItem('currentItemId'));
}