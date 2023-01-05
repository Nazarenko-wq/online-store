import database from './database';

if(window.location.href === 'http://localhost:8080/cart.html'){
    (function(){
        // let cartItemImg = document.querySelector('.cartImg') as HTMLImageElement;
        // let cartItemName = document.querySelector('.discription') as HTMLDivElement;
        // let cartItemPrice = document.querySelector('.price') as HTMLDivElement;
        // let cartItemQuantity = document.querySelector('.wrap-quantity') as HTMLInputElement;
        // let cartItemResult = document.querySelector('.result') as HTMLDivElement;
        // let itemQuantity = document.querySelector('.quantity') as HTMLInputElement;
    
        
        // let id = Number(localStorage.getItem('currentItemId'));
        // let currentQuantity = localStorage.getItem('currentQuantity');
        // database.forEach(elem => {
        //     if(elem.id === id) {
        //         cartItemImg.src = elem.photo[0];
        //         cartItemName.textContent = elem.name;
        //         cartItemPrice.textContent = elem.price;
        //         // cartItemQuantity.value = currentQuantity!;
        //         cartItemResult.textContent = cartItemPrice.textContent;

        //         let priceNatural = parseInt(elem.price.replace('$', ''));
        //         cartItemQuantity.addEventListener('change', () => {
        //             let str = String(priceNatural * Number(cartItemQuantity.value));
        //             cartItemResult.textContent = '$' + str;
        //         })
        //     }
        // })
    })();
    
    // Show cart quantity
    (function(){
        let cartCount = document.querySelector('.count') as HTMLSpanElement;

        window.onload = function () {
            cartCount.textContent = localStorage.getItem('currentQuantity');
        }
    })();

    // add items to cart list
    (function(){
        let itemsParent = document.querySelector('.cart-items') as HTMLDivElement;

        let getItems = localStorage.getItem('arrItems');
        let arr = JSON.parse(getItems!);
        let itemsLength = arr.length;

        function createElements (num: number) {

            for(let i = 0; i < num; i++) {
                let td = document.createElement('div');
                td.classList.add('td');
                td.id = arr[i].id;
                itemsParent.appendChild(td);
                td.addEventListener('click', e => {
                    let target = e.target as HTMLImageElement;
                    if(target.classList.contains('close-icon')) {
                        target.parentElement?.parentElement?.classList.remove('td');
                        target.parentElement?.parentElement?.classList.add('del');
                    }
                    console.log(td);
                })

            let product = document.createElement('div');
                product.classList.add('product');
                td.append(product);

            let closeIcon = document.createElement('img');
                closeIcon.classList.add('close-icon');
                closeIcon.src = '../../public/close_icon.svg';
                product.append(closeIcon);

            let productImg = document.createElement('div');
                productImg.classList.add('product-img');
                product.append(productImg);

            let cartImg = document.createElement('img');
                cartImg.classList.add('cartImg');
                cartImg.src = arr[i].photo;
                productImg.append(cartImg);

            let discription = document.createElement('div');
                discription.classList.add('discription');
                discription.textContent = arr[i].name;
                product.append(discription);
            
            let price = document.createElement('div');
                price.classList.add('price');
                price.textContent = arr[i].price;
                td.append(price);

            let quantity = document.createElement('div');
                quantity.classList.add('quantity');
                td.append(quantity);

            let wrapQuantity = document.createElement('input');
                wrapQuantity.classList.add('wrap-quantity');
                wrapQuantity.value = '1';
                quantity.append(wrapQuantity);

            let res = Number((arr[i].price).replace('$', '')) * Number(wrapQuantity.value);

            let result = document.createElement('div');
                result.classList.add('result');
                result.textContent = String('$' + res);
                td.append(result);

            wrapQuantity.addEventListener('change', () => {
                let res2 = Number((arr[i].price).replace('$', '')) * Number(wrapQuantity.value);
                result.textContent = String('$' + res2);
            })    
            }
        
            
        }

        createElements(2);
        // console.log(typeof itemsLength);
    })();
}