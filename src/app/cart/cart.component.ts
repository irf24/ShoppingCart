import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  total = 0;

  constructor(
    private  cartService : CartService,
    private fb : FormBuilder
  ) {
    this.checkoutForm = this.fb.group({
      name: ['',[Validators.required]],
      address: ['',[Validators.required]]
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
  addQty(item){
    if(item[1]<10){
      this.cartService.addQty(item);
      this.cartService.total += item[0].price;
      this.total = this.cartService.getTotal();
    }
  }
  deleteQty(item){
    if(item[1]>1){
      this.cartService.deleteQty(item);
      this.cartService.total -= item[0].price;
      this.total = this.cartService.getTotal();
    }
  }

  clearItem(item){
    let index = this.items.indexOf(item);
    this.items.splice(index,1); 
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
