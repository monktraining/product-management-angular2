import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from  './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({    
    templateUrl: "product.component.html"
})
export class ProductComponent implements OnInit {

    constructor(private _productService:ProductService, 
    private _router:ActivatedRoute) {
    }
    ngOnInit(){
        let id = this._router.snapshot.params["id"];
        this._productService.getData().subscribe((data:IProduct[])=>this.products = data);
    }

    imageHeight: number = 64;
    imageWidth: number = 64;
    listFilter: string;
    products: IProduct[];

    delete(product:IProduct) {        
        console.log(product);
    }
}
