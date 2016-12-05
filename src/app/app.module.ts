import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import  { ProductComponent } from './product/product.component';
import { HomeComponent } from './home.component';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "products", component: ProductComponent },
      { path: "products/:id", component: ProductComponent }  ,
      { path:"", redirectTo:"home", pathMatch:"full"}    
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
