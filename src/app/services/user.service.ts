import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Cart } from "../models/cart.model";
import { Order } from "../models/order.model";

@Injectable()
export class UserService{
   private static dummyUserList : User[] = [
        {  id: 0,
            fullName: 'guest',
            email: 'guest',
            phone: 'guest',
            address: 'guest',
            login: 'guest',
            password: 'guest',
        
            preferences: [],
            orders: [],
        }
    ];

    currentUser : User = UserService.dummyUserList[0];

    getUserName(user: User) : string { return user.email; }

    getUserById(id : number): User {
        var foundUser: User = UserService.dummyUserList.find(user => user.id == id)!; //i think better use .find, so we aren't going through the whole list:/

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail : string) : User{
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail : string, password : string) : boolean {
        return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    registerUser(fullName: string, email:string, phone:string, address:string, 
        login:string, password: string): User {
        var maxId: number = Math.max(...UserService.dummyUserList.map(user=>user.id), 0)

        /*UserService.dummyUserList.forEach(user => {
            if(maxId < user.id) maxId = user.id;
        })*/

        var id = ++maxId;
        var orders: Order[] = []
        var user : User = {id, fullName, email, phone, address, login, password, orders};

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;
    }

    toGuestUser() {
        this.currentUser = UserService.dummyUserList[0];
    }

}
