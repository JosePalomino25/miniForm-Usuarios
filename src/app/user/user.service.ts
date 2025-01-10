import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() { }

  obtenerUsers(): User[] {
    return this.users
  }

  agregarUser(user:User){
    this.users.push(user);
  }
}
