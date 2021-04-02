import {Component} from '@angular/core';
import {User} from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  newUser: string;
  name: string;
  password: string;
  config: {[key: string]: string } = null;

  users: User[] = [];
  oldUsers: User[] =[];

  helloUser(name: string){
    const user: User = {
      name,
      password: this.password,
    };
    this.users.push(user);
  }

  createUser(){
    const user: User = {
      name: this.newUser,
      password: this.password,
    };
    this.users.push(user);
  }


  onKeyUp(event: KeyboardEvent)
  {
    const target = event.target as HTMLInputElement;
    this.newUser = target.value;
  }
  onKeyUp2(event: KeyboardEvent)
  {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }


}
