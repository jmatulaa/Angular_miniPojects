import { Component} from '@angular/core';
import {UsersComponent} from '../users/users.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends UsersComponent{

  messageForUser: string;


  sayHello(value: string)
  {
    this.messageForUser='Hej ';
  }


}
