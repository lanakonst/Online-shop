import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Form, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../models/order.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  orderSource = new MatTableDataSource<Order>()
  displayColumns = ["prodList", "dateCreated", "deliveryDate", "price", "status"];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isEditing: boolean = false;
  currentUser!: User;
  errorExists = false;
  errorText = '';
  newName = '';
  newAddress = '';
  newEmail = '';
  newPhone = '';
  

  constructor(public userService: UserService, public orderService : OrderService) {}

  

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser
    this.orderSource.data = this.orderService.getAllOrders()
    console.log(this.orderSource.data)
    
    this.newName = this.currentUser.fullName
    this.newEmail = this.currentUser.email
    this.newAddress = this.currentUser.address
    this.newPhone = this.currentUser.phone
  }

  onSubmit(f : NgForm){
    this.isEditing = !this.isEditing
    console.log(this.isEditing, f.disabled)
    if(this.userService.checkGuest()) {
      throw new Error('No current user')
    }
   if(!this.isEditing) {
    this.currentUser.fullName = this.newName
    this.currentUser.address = this.newAddress
    this.currentUser.email = this.newEmail
    this.currentUser.phone = this.newPhone
   }
  }
}