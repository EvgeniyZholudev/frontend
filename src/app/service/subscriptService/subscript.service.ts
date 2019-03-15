import {Subscript} from '../../model/subscript';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class SubscriptService {
  constructor(private http: HttpClient) {}
  getSubscripts(): Observable<Subscript[]> {
    return this.http.get<Subscript[]>('/api/ba');
}
}
