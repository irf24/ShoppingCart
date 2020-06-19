import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  added : boolean = false;
  constructor(private route: ActivatedRoute,
              private cartService : CartService) { }

  addToCart(product) {
    if(!this.added){
      this.cartService.addToCart(product);
    }
    else{
      this.cartService.removeFromCart(product);
    }

    this.added = !this.added;
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    console.log(params.get('id'));
    for(var product of PRODUCTS){
      if(product.id.toString()===params.get('id')){
        this.product = product;
      }
    }
  });
  }

}
