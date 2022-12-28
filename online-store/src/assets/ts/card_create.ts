export class Card {
    id?: number;
    category?: string;
    name: string;
    description?: string;
    price: string;
    photos: string[];
    element: HTMLDivElement | undefined;

    constructor(id: number, category: string, name: string, description: string, price: string, photos: string[]) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
        this.photos = photos;
        this.element = undefined
    }
    
    get markUp(): string {
        return `
            <div class="item-image">
                <img class="img" src="${this.photos[0]}" alt="Card">
            </div>
            <div class="description">
                <div class="item-name">${this.name}</div>
                <div class="item-price">${this.price}</div>
            </div>
        `
    }

    init(): HTMLDivElement {
        this.element = document.createElement('div');
        this.element.classList.add('gallery-item');
        this.element.innerHTML = this.markUp;
        const that = this;
        this.element.addEventListener('mouseenter', () => {
            const img = (<HTMLImageElement>that.element?.querySelector('.img'));
            img.src = that.photos[1];
        });
        this.element.addEventListener('mouseleave', () => {
            const img = (<HTMLImageElement>that.element?.querySelector('.img'));
            img.src = that.photos[0];
        });
        return this.element;
    }
}