import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FilterPipe } from './filter.pipe';

var firebaseConfig = {
  apiKey: "AIzaSyBe942N5dQgFuDy6feCJakXAXcxNaRPjxw",
  authDomain: "test-e9e4e.firebaseapp.com",
  databaseURL: "https://test-e9e4e.firebaseio.com",
  projectId: "test-e9e4e",
  storageBucket: "test-e9e4e.appspot.com",
  messagingSenderId: "407426191567",
  appId: "1:407426191567:web:1a8c17cf4652b96110e7ba",
  measurementId: "G-2M37ZD0R8R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:id',component:ProductDetailsComponent},
      { path : 'cart', component : CartComponent},
      { path : 'shipping', component : ShippingComponent},
      { path : 'message', component : MessageComponent},
      { path : 'login', component : LoginComponent},
      { path : 'signup', component : SignupComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MessageComponent,
    LoginComponent,
    SignupComponent,
    FilterPipe
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }



