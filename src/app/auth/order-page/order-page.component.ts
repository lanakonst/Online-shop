import { Component, Inject, input, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product.model';
import { UserService } from '../../services/user.service';
import { _RecycleViewRepeaterStrategy } from '@angular/cdk/collections';
import { Review } from '../../models/review.model';
import { User } from '../../models/user.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-order-page',
  standalone: false,
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent implements OnInit{
  currentUser! : User
  reviews: { [productId: string]: { rating: number; review: string } } = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: Order, public userService : UserService, public productService : ProductService){}


  ngOnInit() : void {
    this.currentUser = this.userService.currentUser
    this.data.products.forEach((prod) => this.reviews[prod.product.id] = {rating: 0, review: ''})
  }

  onSubmit(form : NgForm, product : Product){
    if (this.checkIfRated(product)) {
      throw new Error('The product is already rated')
    }
    let reviewData = this.reviews[product.id]
    if (reviewData.rating != 0) {
      const newReview : Review = {authorId: this.currentUser.id, 
        authorName: this.currentUser.fullName,
        rating: reviewData.rating,
        reviewText: reviewData.review,
        date: new Date(),
        orderId: this.data.id
      }
      product.reviews.push(newReview)
      this.productService.calculateRating(product)
    }
    
  }

  checkIfRated(product : Product) {
    const rating = product.reviews.find((rev)=> rev.authorId == this.userService.currentUser.id && rev.orderId == this.data.id)
    if (rating) {
      return true
    }
    return false
  }
}
