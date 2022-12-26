const database = [
    {
        id: 1,
        category: 'Головные уборы',
        name: 'Шляпа Gangster',
        description: 'Почувствуйте себя настоящим гангстером со шляпой Gangster, которая в точности передает стиль того времени.',
        price: '$85',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/band_hat1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/band_hat2.jpg'
        ],
    },
    {
        id: 2,
        category: 'Рубашки',
        name: 'Сорочка Real Belarus',
        description: 'Настоящий белорусский бренд для истинных ценителей всего белорусского стиля. Будь похожа на истинного беларуса, чувствуй себя беларусом, стань беларусом!',
        price: '$148',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/belarus_shirt1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/belarus_shirt2.jpg'
        ]
    },
    {
        id: 3,
        category: 'Верхняя одежда',
        name: 'Куртка Wild Attraction',
        description: 'Куртка Wild Attraction. В услових большого города и каменных джунглей, вы будете выделяться стилей дикого зверя, уверенного в себе и знающего себе цену.',
        price: '$322',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/big_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/big_jacket2.jpg'
        ]
    },
    {
        id: 4,
        category: 'Верхняя одежда',
        name: 'Куртка Jacky Paul',
        description: 'То, что вам нужно для правильного впечатления.',
        price: '$218',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/black_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/black_jacket2.jpg'
        ]
    },
    {
        id: 5,
        category: 'Верхняя одежда',
        name: 'Куртка Skin Nature',
        description: 'С курткой Skin Nature вы всегда будете в тренде, на пике популярности среди ваших друзей и близких.',
        price: '$241',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/black-skin_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/black-skin_jacket2.jpg'
        ]
    },
    {
        id: 6,
        category: 'Платья',
        name: 'Платье Wonder Girl',
        description: 'Платье для ежедневного выхода в свет. Сочетание стиля, легкости и удобства всегда будет сопутствовать вашему хорошему настроению.',
        price: '$142',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/casual_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/casual_dress2.jpg'
        ]
    },
    {
        id: 7,
        category: 'Верхняя одежда',
        name: 'Куртка Cube Libre',
        description: 'С курткой Cube Libre вы всегда будете в тепле. С такой длинной и утеплителем, вы сможете больше времени проводить на улице, не переживая за холод и неудобства.',
        price: '$345',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/cell_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/cell_jacket2.jpg'
        ]
    },
    {
        id: 8,
        category: 'Майки и боди',
        name: 'Боди Elegance',
        description: 'Простота и комфорт, уют и мягкость - то, из чего вам не захочется вылезать!',
        price: '$100',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/elegance_body1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/elegance_body2.jpg'
        ]
    },
    {
        id: 9,
        category: 'Рубашки',
        name: 'Рубашка Turneo',
        description: 'Рубашка Turneo идеально подходит для ежедневных деловых и неформальных встреч.',
        price: '$99',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/everyday_shirt1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/everyday_shirt2.jpg'
        ]
    },
    {
        id: 10,
        category: 'Платья',
        name: 'Платье Nature',
        description: 'Ощутите себя частью чего-то чистого, природного и благородного. Свежесть этого цвета разбавит серые краски большого города.',
        price: '$137',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/green_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/green_dress2.jpg'
        ]
    },
    {
        id: 11,
        category: 'Верхняя одежда',
        name: 'Джинсовая куртка Bestie',
        description: 'То, что никогда не выйдет из моды.',
        price: '$178',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/jeans_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/jeans_jacket2.jpg'
        ]
    },
    {
        id: 12,
        category: 'Рубашки',
        name: 'Рубашка Linear World',
        description: 'Непревзойденное качество и стиль, начиная от цвета, заканчивая швейной строчкой.',
        price: '$125',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/lined_shirt1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/lined_shirt2.jpg'
        ]
    },
    {
        id: 13,
        category: 'Платья',
        name: 'Платье Impression',
        description: 'Вообразите себя суперзвездой в платье Impression. Великолепное сочетание цвета и покроя не оставит равнодушным никого, кто вас встретит.',
        price: '$155',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/mature_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/mature_dress2.jpg'
        ]
    },
    {
        id: 14,
        category: 'Шорты',
        name: 'Шорты Hero',
        description: 'Не будь как все, будь индивидуальной.',
        price: '$135',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/oversize_shorts1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/oversize_shirts2.jpg'
        ]
    },
    {
        id: 15,
        category: 'Майки и боди',
        name: 'Боди Samurai',
        description: 'Боди Samurai создан для тех, кто ждет пополнения и времени заниматься собой нет. Боди удобно в ношении и не доставляет неудобств с тем, как его надеть.',
        price: '$122',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/pregnancy_body1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/pregnancy_body2.jpg'
        ]
    },
    {
        id: 16,
        category: 'Платья',
        name: 'Платье Amaze',
        description: 'Платье для тех, кто ждет ребенка, но всё еще хочет выглядеть стильно и опрятно.',
        price: '$168',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/pregnancy_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/pregnancy_dress2.JPG'
        ]
    },
    {
        id: 17,
        category: 'Верхняя одежда',
        name: 'Куртка Red Dragon',
        description: 'Ярко, дерзко, стильно - разбавляй серые цвета и удивляй прохожих.',
        price: '$220',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/red_jacket1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/red_jacket2.jpg'
        ]
    },
    {
        id: 18,
        category: 'Платья',
        name: 'Платье Happiness',
        description: 'Свадебное платье Happiness создано для самого прекрасного дня в жизни каждой девушки. Ваш жених не останетс равнодушным, увидев вас с этом платье.',
        price: '$750',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/wedding_dress1.JPG',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/wedding_dress2.JPG'
        ]
    },
    {
        id: 19,
        category: 'Обувь',
        name: 'Кроссовки Shake It',
        description: 'В кроссовках Shake It вы сможете как пройти много тысяч шагов, так же и приковывать взгляды к этим кроссовкам. Непревзойденное качество материалов не позволит вашим ногам устать и болеть.',
        price: '$220',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/white_shoes1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/white_shoes2.jpg'
        ]
    },
    {
        id: 20,
        category: 'Майки',
        name: 'Майка Sunrise',
        description: 'Та самая майка, для той самой...',
        price: '$103',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/white_tshirt1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/white_tshirt2.jpg'
        ]
    },
    {
        id: 21,
        category: 'Платья',
        name: 'Платье Caramel',
        description: 'Платье Caramel очаровывает с первого взгляда. Отлично подходит для теплого солнечного дня, вы всегда будете чувствовать комфорт и мягкость.',
        price: '$143',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/wonder_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/wonder_dress2.jpg'
        ]
    },
    {
        id: 22,
        category: 'Платья',
        name: 'Платье Sunshine',
        description: 'Идеальное платье для серого, хмурого дня, выделяет из толпы и поднимает настроение своими яркими красками.',
        price: '$233',
        photo: [
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/yellow_dress1.jpg',
            'https://disk.yandex.ru/d/vHX22fXGxuYVLw/yellow_dress2.jpg'
        ]
    },
];

export default database;