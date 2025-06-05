import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Product, ProductTypes } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: false,
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})

export class CatalogueComponent implements OnInit, OnInit{

  productSource = new MatTableDataSource<Product>()
  displayColumns = ["image", "name", "type", "price", "rating", "delivery"];

  constructor(private productService : ProductService, private router : Router) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void{
    this.productSource.data = this.productService.getProducts();
  };

  ngAfterViewInit(): void {
    this.productSource.sort = this.sort;
    this.productSource.paginator = this.paginator;
}

doFilter(filterVal : string) {
  this.productSource.filter = filterVal.trim().toLowerCase();
}

goToProduct(id:  number) {
  this.router.navigate(['/catalogue', id]);
}
  
  /*columns:number = 4;
  products! : Product[];
  selectedType = 'none';
  
  constructor(private productService : ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }

  doFilter(filterVal : string) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = window.innerWidth;

    if(width < 600) {
      this.columns = 1;
    } else if (width > 1000) {
      this.columns = 5;
    } else {
      this.columns = Math.round(width / 300);
    }
  }*/
}
