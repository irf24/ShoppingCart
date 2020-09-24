import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  constructor(private fb : FormBuilder, private auth:AuthService) { 
    this.signupForm = this.fb.group(
      {
        firstName : ['',[Validators.required]],
        lastName : ['',[Validators.required]],
        email : ['',[Validators.required]],
        password : ['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      }
    )
  }

  onSubmit(form){
    let email:string = this.signupForm.value.email;
    let password:string = this.signupForm.value.password;
    let firstName:string = this.signupForm.value.firstName;
    let lastName:string = this.signupForm.value.lastName;
    
    this.auth.signup(firstName,lastName,email,password)
    .then(()=>{
      console.log('Signed up successfully');
    }).catch((error)=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
