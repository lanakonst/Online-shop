import { Component, Inject, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) {}
  ngOnInit(): void {
      if(this.data && this.data.user) {
        this.profileForInput = {
          id: this.data.user.id,
          name: this.data.user.name,
          surname: this.data.user.surname,
          email: this.data.user.email,
          login: this.data.user.password,
          password: this.data.user.password,
          address: this.data.user.address,
        };
      } else {
        console.error('Invalid user data: ', this.data);
      }
  }
  enableEdit(){
    this.isEditing = !this.isEditing;
    console.log('click');
  }

  finishEditing(){
    this.data.user.email = this.profileForInput.email;
    this.data.user.password= this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }
}