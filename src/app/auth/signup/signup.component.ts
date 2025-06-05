import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  errorExists = false;
  errorText="";

  constructor(private userService: UserService, private router : Router){}
  onSubmit(form: NgForm) {
    console.log('signup comp ' + this.userService.getUser(form.value.email))
    if(!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      console.log(form.value.password)
      var newUser = this.userService.registerUser(form.value.email, form.value.password);
      console.log('registered')
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists";
    }
  }
}