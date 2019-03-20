import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscript} from '../../model/subscript';

@Injectable({
  providedIn: 'root'
})
export class SubscriptService {

  constructor(private http: HttpClient) {
  }

  public getSubscripts(): Observable<Subscript[]> {
    return this.http.get<Subscript[]>('../../../assets/subscripts.json');
  }
}
