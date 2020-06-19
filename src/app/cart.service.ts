import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})
export class CartService {

  items = [];
  total = 0;

  addToCart(product) {
    this.items.push([product,1]);
    this.total +=product.price;
  }
  removeFromCart(product) {
    this.items.pop();
    this.total -=product.price;
  }

  addQty(product){
    for(let item of this.items){
      if(item==product){
        item[1]+=1;
      }
    }
  }

  deleteQty(product){
    for(let item of this.items){
      if(item==product){
        item[1]-=1;
      }
    }
  }

  getTotal(){
    return this.total;
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http : HttpClient
  ) { }

}
