import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, SortPipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductsService);

  constructor() {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
