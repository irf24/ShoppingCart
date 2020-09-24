import { Component } from '@angular/core';

import { PRODUCTS} from '../products';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = PRODUCTS;
  text;
  selectedProduct : Product[] = [];
  category:string = "Mobiles";
  notification : boolean = false;
  product;
  constructor(private cartService : CartService) {
    this.selectItem();
  }

  selectItem(){
    for(var item of this.products){
      if(item.category==this.category){
        this.selectedProduct.push(item);
      }
    }
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    this.notification = !this.notification;
  }

  selectCategory(event){
    this.category = event.target.value;
    this.selectedProduct = [];
    this.selectItem();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
