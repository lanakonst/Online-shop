import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderItem } from '../../models/orderItem.model';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-prod-page',
  standalone: false,
  templateUrl: './prod-page.component.html',
  styleUrl: './prod-page.component.css'
})
export class ProdPageComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  currentProduct! : Product;
  amount : number = 1


  constructor(private productService : ProductService, private route : ActivatedRoute, private userService : UserService){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.currentProduct = this.productService.getProductById(id!);
      console.log(this.currentProduct);
  }

  getRange() : number[] {
    return Array.from({ length: this.currentProduct.quantity}, (v, i) => ++i )
  }

  addToCart() {
    const currentUser = this.userService.currentUser
    if (this.userService.checkGuest()) {
      this._snackBar.open('Please, log in to add item to the cart', 'Close', { duration: 2000 });
    } else {
      if (!currentUser.cart) {
        currentUser.cart = {products: [], timeCreated: new Date(), totalPrice: 0}
      }
      const itemId = currentUser.cart.products.map((orderItem) => orderItem.product).indexOf(this.currentProduct)
      if (itemId === -1) {
        currentUser.cart.products.push({product: this.currentProduct, amount: this.amount})
      } else if (this.amount + currentUser.cart.products[itemId].amount > this.currentProduct.quantity) {
        this._snackBar.open('Not enough items', 'Close', { duration: 3000 }); //CHANGEEEEE
        return
      } else {
        currentUser.cart.products[itemId].amount += this.amount
      }
      currentUser.cart.totalPrice += this.currentProduct.price * this.amount
      console.log(currentUser.cart)
      this._snackBar.open('Item added!', 'Close', { duration: 3000 });
    }
  }
}
