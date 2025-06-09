import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
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
      var newUser = this.userService.registerUser(form.value.fullName, form.value.email, form.value.phone,
        form.value.address, form.value.login, form.value.password)
      console.log('registered')
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists";
    }
  }
}