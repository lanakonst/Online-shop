import { Cart } from "./cart.model"
import { Order } from "./order.model"

export interface User {
    id: number,
    fullName: string,
    email: string,
    phone: string,
    address: string,
    login: string,
    password: string,

    preferences?: string[],
    cart?: Cart,
    orders: Order[],
}