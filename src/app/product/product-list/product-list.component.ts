import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ProductCategory } from 'src/app/product-categories/product-category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent{
  pageTitle:string='Product List';
  errorMessage='';
  categories:ProductCategory[]=[];

  products$=this.productService.products$
  .pipe(
    catchError(err=>{
      this.errorMessage=err;
      return EMPTY;
    })
   );

  constructor(private productService: ProductService) { }
  

  onAdd(): void{
    console.log('Not yet implement');
  }

   onSelected(categoryId:string):void{
     console.log('Not yet implement');
  }

}
