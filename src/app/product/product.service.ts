import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; 

@Injectable()
export class ProductService {

  constructor(private _http:Http) {

   }

   getData() : Observable<IProduct[]> {
     return this._http.get("/api/product/products.json")
     .map((response:Response) => <IProduct[]>response.json());     
   } 

   getProductById(id:number) : Observable<IProduct> {
     return this.getData().map((products:IProduct[]) => products.find(p => p.Id === id));
   }


}
