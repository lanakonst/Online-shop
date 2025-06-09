import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorText = ''
  errorExists = false

  constructor(private userService : UserService, private router : Router) {}

  onSubmit(form : NgForm) {
    var login = form.value.login
    var password = form.value.password
    var user = this.userService.getUserByLogin(login)
    console.log('loginnn', login, password, user.password, user)
    if (!user) {
      this.errorExists = true
      this.errorText = 'No such user found'
    } else if (user.password != password) {
      console.log('WRONG password')
      this.errorExists = true
      this.errorText = 'Incorrect password'
    } else {
      this.userService.setCurrentUser(user)
      this.errorExists = false
      this.errorText = ''
      this.router.navigate([''])
    }
  }
  
}
