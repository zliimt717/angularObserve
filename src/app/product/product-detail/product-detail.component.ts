import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/suppliers/supplier';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent{

  pageTitle='Product Detail';
  errorMessage='';
  product:Product |null=null;
  productSuppliers:Supplier[]|null=null;

  constructor(private productService:ProductService) { }


}
