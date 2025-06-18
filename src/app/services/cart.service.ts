import { Cart } from "../models/cart.model";
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";
import { OrderItem } from "../models/orderItem.model";
import { UserService } from "./user.service";
import { OrderService } from "./order.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
    cart : Cart = {
        products: [],
        timeCreated: new Date(),
        totalPrice: 0,
    }

    constructor(private userService: UserService, private orderService : OrderService) {}

    setCart (currentCart : Cart) {
        this.cart = currentCart
    }

    addItem(product: Product, amount : number) {
        if (amount > product.quantity) {
            console.log('Not enough')
            return
        }
        var itemInCart = this.cart.products.find((item) => item.product.id == product.id) 
        if (itemInCart) {
            if (itemInCart.amount > product.quantity) {
                console.log('not enough')
                return
            }
            itemInCart.amount += amount
        } else {
            var newItem : OrderItem = {product, amount}
            this.cart.products.push(newItem)
        }
        
        this.cart.totalPrice += product.price * amount
    }

    removeItem(productId : string) {
        var itemIndex = this.cart.products.findIndex((item) => item.product.id == productId)
        if (itemIndex === -1) {
            console.log('No such item')
            return
        }
        var itemToRemove = this.cart.products[itemIndex]
        this.cart.totalPrice -= itemToRemove.product.price
        if (itemToRemove.amount > 1) {
            itemToRemove.amount -= 1
        } else {
            this.cart.products.splice(itemIndex, 1)
        }
    }

    clearCart() {
        this.cart.products = []
        this.cart.timeCreated = new Date()
        this.cart.totalPrice = 0
    }

    cartToOrder() : Order {
        if (this.cart.products.length === 0) {
            throw new Error("Cart is empty. Cannot place order")
        }
        const newOrder = this.orderService.orderFromCart(this.cart)
        this.clearCart()
        return newOrder
    }

    isEmpty() : boolean {
        return this.cart.products.length == 0
    }
}