import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from 'src/app/product-categories/product-category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  pageTitle:string='Product List';
  errorMessage='';
  categories:ProductCategory[]=[];

  products$:Observable<Product[]> | undefined;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
   this.products$= this.productService.getProducts()
  }

  onAdd(): void{
    console.log('Not yet implement');
  }

   onSelected(categoryId:string):void{
     console.log('Not yet implement');
  }

}
