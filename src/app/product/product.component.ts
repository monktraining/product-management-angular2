import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from  './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({    
    templateUrl: "product.component.html"
})
export class ProductComponent implements OnInit {
    private _id:number;
    constructor(private _productService:ProductService, 
    private _router:ActivatedRoute) {        
    }
    ngOnInit(){
        this._id = this._router.snapshot.params["id"];        
        this._productService.getData().subscribe((data:IProduct[])=>this.products = data);
    }

    imageHeight: number = 64;
    imageWidth: number = 64;
    listFilter: string;
    products: IProduct[];
    title:string;

    delete(product:IProduct) {        
        console.log(product);
    }

    onRatingClicked(message: string): void {
        this.title = 'Product List: ' + message;
    }

    onRatingsClicked(message:string): void {
        this.title = 'Product List: ' + message;
    }
}
