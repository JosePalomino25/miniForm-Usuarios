import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Heroes, User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User[] = [];
  userNew: User = new User(' ', 0, ' ', ' ', Heroes.batman);
  mostrarUser: boolean = true;
  heroes = Object.keys(Heroes).map(key => ({ key, value: Heroes[key as keyof typeof Heroes] }));

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.obtenerUsers();
  }

  agregarUser(): void {
    if (
      this.userNew.name &&
      this.userNew.age >= 0 &&
      this.userNew.email &&
      this.userNew.password
    ) {
      this.userService.agregarUser(
        new User(this.userNew.name, this.userNew.age, this.userNew.email, this.userNew.password, this.userNew.heroe)
      );
      this.userNew = new User(' ', 0, ' ', ' ', Heroes.batman);
    }
  }

  mostrarUsers(): void {
    this.mostrarUser = !this.mostrarUser;
  }
}
