import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb : FormBuilder, private auth : AuthService) {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]],
      check : ['']
    })
   }

  onSubmit(loginForm){
    let email:string = this.loginForm.value.email;
    let password:string = this.loginForm.value.password;
    
    this.auth.login(email,password)
    .then((response)=>{
      console.log(response);
      console.log("Logged in successfully");
    }).catch((error)=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
