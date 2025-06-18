import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../models/order.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderPageComponent } from '../order-page/order-page.component';

@Component({
  selector: 'app-order-history',
  standalone: false,
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit, AfterViewInit {
  orderSource = new MatTableDataSource<Order>()
  displayColumns = ["prodList", "dateCreated", "deliveryDate", "price", "status", "action"];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public userService: UserService, public orderService : OrderService, public dialog: MatDialog) {}

  ngOnInit(): void{
    this.orderService.checkAllOrders()
    this.orderSource.data = this.orderService.getAllOrders()
    
  };

  ngAfterViewInit(): void {
    this.orderSource.sort = this.sort;
    this.orderSource.paginator = this.paginator;
  }

  getProdList(order : Order) : string {
    return order.products.reduce((str, item)=>  str + item.product.name + `(${item.product.type}) `, '')
  }

  openRate(order : Order) {
    this.orderService.setCurrentOrder(order)
    const dialogRef = this.dialog.open(OrderPageComponent, {
      width: '100%',
      maxWidth: '100vw',
      data: order
    })
  }
  
}
