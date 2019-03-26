import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  get authorizedUser(): User {
    return this._authorizedUser;
  }

  set authorizedUser(value: User) {
    this._authorizedUser = value;
  }
  users: User[];
  private _authorizedUser: User = new User();

  constructor(private userService: UserService) {
    this.authorization();
  }

  private authorization(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.authorizedUser = this.users[1];
    })
  }

  public isRole(): boolean {
    if(typeof this.authorizedUser.role === 'undefined'){
      return false;
    }
    return true;
  }
}
