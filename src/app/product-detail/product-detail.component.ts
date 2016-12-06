import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IProduct } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub:Subscription;
  private product: IProduct;
  private pageTitle:string = "Product Detail";

  constructor(private _route:ActivatedRoute, private _router:Router, private _productService:ProductService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      let id = +params["id"];
      this.getProductById(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProductById(id:number) : void {
    this._productService.getProductById(id).subscribe(_product=>this.product = _product);
  }

  onBack():void{
    this._router.navigate(["/products"]);
  }

  onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
