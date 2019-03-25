import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _selectedUser: User;


  get selectedUser(): User {
    return this._selectedUser;
  }

  set selectedUser(value: User) {
    this._selectedUser = value;
  }

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('../../../assets/users.json');
  }

  public clearSelectedUser(): void {
    this.selectedUser = new User();
  }
}
