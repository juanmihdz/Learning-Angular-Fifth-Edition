import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output();

  addToCart() {
    this.added.emit();
  }
}
