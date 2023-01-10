import { exemple } from "./item";

if(window.location.href === 'http://localhost:8080/cart.html'){
   
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

            for(let i:number = 0; i < num; i++) {
                let td = document.createElement('div');
                td.classList.add('td');
                td.id = arr[i].id;
                itemsParent.appendChild(td);
                td.addEventListener('click', e => {
                    let cartText = document.querySelector('.count') as HTMLSpanElement;
                    let target = e.target as Element;
                    if(target.classList.contains('close-icon')) {
                        target.parentElement?.parentElement?.classList.remove('td');
                        target.parentElement?.parentElement?.classList.add('del');
                        let newDigit = Number(cartText.textContent) - 1;
                        cartText.textContent = String(newDigit);
                        localStorage.setItem('currentQuantity', `${newDigit}`);

                        let str = localStorage.getItem('arrItems')!;
                        let arr: exemple[] = Array.from(JSON.parse(str));
                        

                        for(let i = 0; i < arr.length; i++) {
                            if(arr[i].id === target.parentElement?.parentElement?.id) {
                                arr.splice(i, 1);
                            }
                        }


                        localStorage.setItem('arrItems', JSON.stringify(arr));
                    }
                    
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

                    // change total results
                    changeTotalResults();
                })    
            }
        
            
        }

        createElements(itemsLength);
    })();

    // change tottal results
    function changeTotalResults (){
        let res = document.querySelector('.res') as HTMLSpanElement;
        let ItemResults = document.querySelectorAll('.result');
        let total = document.querySelector('.total-res') as HTMLSpanElement;

        let sum = 0;
        ItemResults.forEach(elem => {
            let num = Number(elem.textContent?.replace("$", ''));
            sum += num;
            // console.log(elem.textContent);
        })
        res.textContent = '$' + sum;
        total.textContent = '$' + sum;
    };

    changeTotalResults();
}