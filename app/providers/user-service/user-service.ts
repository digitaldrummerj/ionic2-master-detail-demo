import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(numToPull?: number) {
    var url = 'https://randomuser.me/api/?results=' + numToPull;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
