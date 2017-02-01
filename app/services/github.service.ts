import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'd9308aacf8b204d361fd';
  private client_secret = '62551cc02cee983fff0bac41baf170eb5a312c1c';
  //private host = 'https://api.github.com';
  private host = 'http://localhost:3001';

  constructor(private _http: Http){
    console.log('Gihub Service Ready...');
    this.username = 'bradtraversy'
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
