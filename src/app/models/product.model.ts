export enum ProductTypes {
    Cauldron = 'cauldron',
    Herb='herb',
}

export interface Review {
    authorId: number,
    authorName: string,
    rating: number,
    reviewText: string,
    date: Date,
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number, //available
    rating: number,
    image: string,
    type: ProductTypes,
    deliveryTime: number,

    reviews: Review[],
}