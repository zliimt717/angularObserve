import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  styles: [
  ]
})
export class ProductListAltComponent {

  pageTitle='Products';
  errorMessage='';
  selectedProductId=0;

  products:Product[]=[];
  sub!:Subscription;

  products$=this.productService.products$
  .pipe(
    catchError(err=>{
      this.errorMessage=err;
      return EMPTY;
    })
   );

  constructor(private productService:ProductService) { }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

  onSelected(productId?:number): void{
    console.log('Not yet implemented');
  }


}
