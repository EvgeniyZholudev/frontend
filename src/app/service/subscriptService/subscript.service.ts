import {Subscript} from '../../model/subscript';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SubscriptService {
  constructor(private http: HttpClient) {}
  getSubscripts(): Observable<Subscript[]> {
    return this.http.get<Subscript[]>('try.json');
}
}
