import { OrderItem } from "./orderItem.model";

export interface Cart {
    products: OrderItem[],
    timeCreated: Date,
    totalPrice: number,
}