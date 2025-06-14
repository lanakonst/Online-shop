import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
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
      /*if(this.data && this.data.user) {
        this.profileForInput = {
          id: this.data.user.id,
          fullName: this.data.user.fullName,
          email: this.data.user.email,
          password: this.data.user.password,
          address: this.data.user.address,
        };
      } else {
        console.error('Invalid user data: ', this.data);
      }*/
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
    //console.log(UserService.dummyUserList);
    this.isEditing = false;
  }
}