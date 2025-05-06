import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-exam';
  profileOpened : boolean = false;

  constructor(public userService: UserService, public dialog: MatDialog) {}

  openProfile(userId: number) {
    
    const user = this.userService.getUserById(userId)
    if(user) {
      this.profileOpened = true;
      const profileDialog = this.dialog.open(ProfileComponent, {
        disableClose: true, /*cause its opened */
        width: '50vw',
        data: {user}
      });

      profileDialog.afterClosed().subscribe(()=>this.profileOpened = false);
    } else {
      console.error("User not found for id: ", userId)
    }
  }
}
