import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { Cart } from '../../models/cart.model';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem } from '../../models/orderItem.model';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
  private _snackBar = inject(MatSnackBar);
  cartSource = new MatTableDataSource<OrderItem>()
  displayColumns = ["name", "amount", "price"];

  ordered : boolean = false
  cart!: Cart
  
  constructor(private userService : UserService, private cartService : CartService, private productService : ProductService) {}

  ngOnInit() {
    if(!this.userService.currentUser.cart) {
      throw new Error('Cart does not exist')
    } else {
      this.cartService.setCart(this.userService.currentUser.cart)
    }
    this.cart = this.cartService.cart
    this.cartSource.data = this.cartService.cart.products
  }

  checkCart() : boolean {
    return this.cartService.isEmpty()
  }

  finishOrdering() {
    this.cart.products.map((item) => item.product.quantity -= item.amount)
    this.cartService.cartToOrder()
    this._snackBar.open('Ordered!', 'Close', { duration: 3000 });
  }

  cancelOrder() {
    this.cartService.clearCart()
    this._snackBar.open('Order canceled!', 'Close', { duration: 3000 });
  }

}
