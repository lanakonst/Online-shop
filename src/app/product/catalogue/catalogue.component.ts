import { Component, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { Product, ProductTypes } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


interface ProductFilter {
  search?: string,
  types?: Set<ProductTypes>,
  priceRange?: number[],
  deliveryTime?: number,
  quantity?: number,
}

@Component({
  selector: 'app-catalogue',
  standalone: false,
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})

export class CatalogueComponent implements OnInit{
  readonly panelOpenState = signal(false)
  readonly categoryOpenState = signal(false)
  
  allChecked = true

  prodTypes = Object.values(ProductTypes)
  filterValues : ProductFilter = {}
  maxPrice! : number
  minPrice!: number
  minDeliveryTime!: number
  maxDeliveryTime = 60
  maxQuantity = 10

  productSource = new MatTableDataSource<Product>()
  displayColumns = ["image", "name", "type", "price", "rating", "delivery"];

  constructor(private productService : ProductService, private router : Router) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngOnInit(): void{
    this.productSource.data = this.productService.getProducts()
    this.maxPrice = this.productService.getMaxPrice()
    this.minPrice = this.productService.getMinPrice()
    this.minDeliveryTime = this.productService.getMinDeliveryTime()
    
    this.initFilters()
    this.productSource.filterPredicate = this.createFilter.bind(this)
  };

  initFilters() {
    this.filterValues.search = ''
    this.filterValues.types = new Set()
    this.allChecked = true
    this.filterValues.priceRange = [this.minPrice, this.maxPrice]
    this.filterValues.deliveryTime = this.maxDeliveryTime
    this.filterValues.quantity = 0
    this.applyFilters()
  }

  createFilter(data : Product, filter: string) : boolean {
    this.filterValues.search = this.filterValues.search?.toLowerCase()
    if (this.filterValues.search && this.filterValues.search!.length > 0){
      return data.name.toLowerCase().includes(this.filterValues.search!) || data.type.toLowerCase().includes(this.filterValues.search!)
    }
    
    const typeCheck = this.allChecked ? true : !this.filterValues.types || this.filterValues.types.has(data.type)
    const priceCheck = data.price >= this.filterValues.priceRange![0] && data.price <= this.filterValues.priceRange![1]
    const deliveryCheck = data.deliveryTime <= this.filterValues.deliveryTime!
    const quantityCheck = data.quantity >= this.filterValues.quantity!

    return typeCheck && priceCheck && deliveryCheck && quantityCheck
  }

  onTypesChange(checked : boolean, type : ProductTypes) {
    if(checked) {
      this.filterValues.types?.add(type)
    } else {
      this.filterValues.types?.delete(type)
    }
    this.allChecked = this.filterValues.types?.size == 0
  }

  applyFilters() {
    this.productSource.filter ='trigger'
  }

  ngAfterViewInit(): void {
    this.productSource.sort = this.sort;
    this.productSource.paginator = this.paginator;
  }

  goToProduct(id:  number) {
    this.router.navigate(['/catalogue', id]);
  }
}
