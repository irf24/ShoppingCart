import { Injectable, resolveForwardRef } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email:string,pass:string){
    return firebase.auth().signInWithEmailAndPassword(email,pass)
  }

  signup(firstName:string,lastName:string,email:string,pass:string){
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,pass).then((response)=>{
        console.log(response);
        response.user.updateProfile({
        displayName : firstName+' '+lastName
      }).then(()=>{
        resolve();
      }).catch((error)=>{
        console.log(error);
        reject();
      })
      }).catch((error)=>{
        reject();
      })
    });
  }
}
