import { Component, HostListener, OnInit } from '@angular/core';
import { Product, ProductTypes } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalogue',
  standalone: false,
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})

export class CatalogueComponent implements OnInit{
  columns:number = 4;
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
  }
}
