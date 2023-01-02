import database from './database'

let items = document.querySelectorAll('.gallery-item');

// let currentPath: string = '';


items.forEach(elem => {
    elem.addEventListener('click', function(e) {
        
        let currentImg = <HTMLImageElement>elem.children[0].firstElementChild;
        let target = e.target as HTMLDivElement;
        let currentPath = currentImg.src;
        
        if(target.classList.contains('item-image')) {
            window.location.href = './item.html';
        } 

        function setItemDiscription (str: string) {
            let itemImg = <HTMLImageElement>document.querySelector('.itemImg');
            
            database.forEach(elem => {
                if(elem.photo[1].slice(-20) === str.slice(-20) ) {
                    itemImg.src = elem.photo[1];
                    // console.log('same');
                    console.log(elem.photo[1]);
                }
               
            })  

            // console.log(str.slice(-20));
        }
        
        setItemDiscription(currentPath)
    })
})

// console.log(currentPath)