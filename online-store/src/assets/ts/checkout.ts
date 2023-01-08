
if(window.location.href === 'http://localhost:8080/checkout.html') {
    let userName = document.querySelector('#user-name') as HTMLInputElement;
    let userEmail = document.querySelector('#user-email') as HTMLInputElement;
    let userPhone = document.querySelector('#user-phone') as HTMLInputElement;
    let userCountry = document.querySelector('#user-country') as HTMLInputElement;
    let userCity = document.querySelector('#user-city') as HTMLInputElement;
    let userStreet = document.querySelector('#user-street') as HTMLInputElement;
    let userHouse = document.querySelector('#user-home') as HTMLInputElement;
    let userApartment = document.querySelector('#user-flat') as HTMLInputElement;
    let userComment = document.querySelector('#user-comment') as HTMLInputElement;
    let totalBtn = document.querySelector('.checkout-btn') as HTMLButtonElement;


    totalBtn.addEventListener('click', () => {
        let userData = {
            'name': `${userName.value}`,
            'mail': `${userEmail.value}`,
            'phone': `${userPhone.value}`,
            'county': `${userCountry.value}`,
            'city': `${userCity.value}`,
            'street': `${userStreet.value}`,
            'house': `${userHouse.value}`,
            'apartment': `${userApartment.value}`,
            // 'comment': `${userComment.textContent}`,
        }

        let arr: string[] = [];
        localStorage.setItem('userData', JSON.stringify(arr));
        let data = localStorage.getItem('userData')!;
        let newArr = JSON.parse(data);
        newArr.push(userData);
        localStorage.setItem('userData', JSON.stringify(newArr));
    });

    localStorage.removeItem('arrItems');
    localStorage.removeItem('currentQuantity');
    localStorage.removeItem('currentItemId');
}


// arr.push(localStorage.getItem('userData')!);
// data.push(arr);
// localStorage.clear();