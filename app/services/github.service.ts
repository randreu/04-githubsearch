import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '7c5c2d57111ac2daa982';
  private client_secret = '1fe77c3996135ed272c82370612071e62c50318b';
  //private host = 'https://api.github.com';
  private host = 'http://localhost:3001';

  constructor(private _http: Http){
    console.log('Gihub Service Ready...');
    this.username = 'randreu'
  }

  getUser(){
    return this._http
      .get(
        this.host + '/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret,
        {
          headers : new Headers()
        }
      )
      .map(res => res.json());
  }


}
