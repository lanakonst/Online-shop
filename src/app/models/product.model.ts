import { Review } from "./review.model";

export enum ProductTypes {
    Cauldron = 'cauldron',
    Herb='herb',
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