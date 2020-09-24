import { Component, OnInit } from '@angular/core';
import { PRODUCTS} from '../products';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  loggedIn : boolean = false;
  user;
  constructor() { 
    this.user = firebase.auth().currentUser;

    if(this.user){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn = true;
      }
      else{
        this.loggedIn = false;
      }
    })
  }

  ngOnInit() {
  }

}

