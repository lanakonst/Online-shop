import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-page',
  standalone: false,
  templateUrl: './prod-page.component.html',
  styleUrl: './prod-page.component.css'
})
export class ProdPageComponent implements OnInit {
  currentProduct! : Product;
  
  constructor(private productService : ProductService, private route : ActivatedRoute){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.currentProduct = this.productService.getProductById(id!);
      console.log(this.currentProduct);
  }
}
