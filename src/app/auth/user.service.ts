import { Injectable } from "@angular/core";

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    phone?: string,
    address?: string,
    login: string,
    password: string,
}

@Injectable()
export class UserService{
    static dummyUserList : User[] = [
        {id: 0,
            name: 'guest',
            surname: 'guest',
            email: 'guest',
            login: 'guest',
            password: 'guest',
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

}