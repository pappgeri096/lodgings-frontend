import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';
import {Lodging} from '../../models/lodging.model';
import {LodgingsService} from '../lodgings/lodgings.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from '../auth/token-storage/token-storage.service';
import {UserInfo} from '../../utils/user-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: User;
  private baseUrl = 'http://localhost:8080/api/user/';

  constructor(private lodgingsService: LodgingsService, private http: HttpClient, private tokenStorage: TokenStorageService) {

  }

  getUserLodgingsFromServer(): Observable<Lodging[]> {
    return this.http.get<Lodging[]>(this.baseUrl + this.tokenStorage.getUsername() + '/lodgings');
  }


  getUserFromServer() {
    return this._user;
  }

  getUserFromDB() {
     return this.http.get<User>(this.baseUrl + this.tokenStorage.getUsername());
  }

  updateUserInfo(userInfo: UserInfo) {
    return this.http.put<User>(this.baseUrl + this.tokenStorage.getUsername() + '/update', userInfo);
  }
}
