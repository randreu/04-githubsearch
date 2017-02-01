import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
  constructor(private _githubservice : GithubService){
    this._githubservice.getUser()
      .subscribe( user => {
        console.log(user)
      });
  }
}
