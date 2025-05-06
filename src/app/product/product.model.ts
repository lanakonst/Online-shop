export enum ProductTypes {
    Cauldron = 'cauldron',
    Herb='herb',
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    quantity: number,
    raiting: number,
    image: string,
    type: ProductTypes,
}