import { throwError } from "rxjs";
import { Order } from "../models/order.model";
import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Cart } from "../models/cart.model";
import { ProductService } from "./product.service";

@Injectable()
export class OrderService {
   private ordersMap : Map<number, Order> = new Map()
   currentOrder! : Order

    constructor(private userService: UserService, private productService : ProductService) {
        this.userService.currentUser.orders.forEach((order) => {
            this.ordersMap.set(order.id, order)
        })
    }

    private getOrderById(id : number) : Order {
        const currOrder = this.ordersMap.get(id)
        if (!currOrder) {
            throw new Error(`Order ${id} not found`)
        }
        return currOrder
    }

    setCurrentOrder(order : Order) {
        this.currentOrder = order
    }

    orderFromCart(cart : Cart) : Order {
        var maxDeliveryTime = Math.max(...cart.products.map((item) => item.product.deliveryTime))
        var deliveryDate = new Date()
        deliveryDate.setDate(deliveryDate.getDate() + maxDeliveryTime)
        const newOrder : Order = {
            id: Date.now(),
            products: cart.products,
            totalPrice: cart.totalPrice,
            status: 'ongoing',
            dateCreated: new Date(),
            deliveryDate,
        }
        this.addOrder(newOrder)
        return newOrder
    }

    addOrder(order : Order) {
        this.ordersMap.set(order.id, order)
        this.userService.currentUser.orders.push(order)
    }

    getAllOrders() : Order[] {
        return this.userService.currentUser.orders
    }

    changeStatus(id:number, newStatus : 'completed' | 'ongoing' | 'canceled') {
        const currOrder = this.getOrderById(id)
        currOrder.status = newStatus
    }

    checkAllOrders() {
         this.ordersMap.forEach((item) => {
            if (item.deliveryDate <= new Date()) item.status = 'completed'
        })
    }

    addRating(id:number, rating : number) {
        const currOrder = this.getOrderById(id)
        if (currOrder.status != 'completed') {
            throw new Error('The order is not completed')
        }
        currOrder.rating = rating
    }

    addReview(id: number, review: string) {
        const currOrder = this.getOrderById(id)
        if (currOrder.status != 'completed') {
            throw new Error('The order is not completed')
        }
        currOrder.review = review
    }

    deleteOrder(id : number) {
        this.ordersMap.delete(id)
        const userOrders = this.userService.currentUser.orders
        const indexToDelete = userOrders.findIndex(order => order.id === id)
        if (indexToDelete != -1) {
            userOrders[indexToDelete].products.map((item) => item.product.quantity += item.amount)
            userOrders.splice(indexToDelete, 1)
        }
    }

    cancelOrder(order : Order) {
        order.products.map((item) => item.product.quantity += item.amount)
        order.status = 'canceled'
    }
}

