import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscript} from '../../modules/models/subscript';

@Injectable({
  providedIn: 'root'
})
export class SubscriptService {

  private _selectedSubscript: Subscript;

  get selectedSubscript(): Subscript {
    return this._selectedSubscript;
  }

  set selectedSubscript(value: Subscript) {
    this._selectedSubscript = value;
  }

  constructor(private http: HttpClient) {
  }

  public getSubscripts(): Observable<Subscript[]> {
    return this.http.get<Subscript[]>('../../../assets/subscripts.json');
  }

  public clearSelectedSubscript(): void {
    this.selectedSubscript = new Subscript();
  }
}
