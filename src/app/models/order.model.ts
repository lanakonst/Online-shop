import { Product } from "./product.model";
import { OrderItem } from "./orderItem.model";

export interface Order {
    id: number,
    products: OrderItem[],
    totalPrice: number,
    status: 'completed' | 'ongoing' | 'canceled',
    rating?: number,
    review?: string,
    dateCreated: Date,
    deliveryDate: Date,
}

