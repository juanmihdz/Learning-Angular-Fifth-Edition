import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnChanges {
  product = input<Product>();
  added = output<string>();

  constructor() {
    console.log('Product from constructor', this.product());
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Old value', oldValue);
      console.log('New value', newValue);
    }
  }

  ngOnInit() {
    console.log('Product from ngOnInit Hook', this.product());
  }

  addToCart() {
    this.added.emit('Product added to cart: ' + this.product()?.title);
  }
}
