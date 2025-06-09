import { Component, inject, input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: []
})
export class ProductViewComponent implements OnInit {
  id = input<number>();
  product: Product | undefined;

  private productViewService= inject(ProductViewService);
  
  constructor() {}

  ngOnInit(): void {
    this.product = this.productViewService.getProduct(this.id()!);
  }  
}
