import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../../../../models/userdata'

import { map } from 'rxjs/operators';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  private serverApi= 'http://localhost:3000';

  public getAllLists():Observable<UserData[]> {
    let URL = `${this.serverApi}/home/`;
    return this.http.get(URL)
      .pipe(map(res => <UserData[]>res))
  }

  public deleteList(listId : string) {
    let URL = `${this.serverApi}/home/${listId}`;
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URL, {headers})
  }

  public addList(list: UserData) {
    let URL = `${this.serverApi}/home/`;
    let headers = new HttpHeaders;
    let body = JSON.stringify({title: list.title, description: list.description, category: list.category});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URL, body ,{headers: headers})
  }
}

